import org.jetbrains.kotlin.gradle.tasks.Kotlin2JsCompile
import org.jetbrains.kotlin.gradle.tasks.KotlinJsDce

plugins {
    kotlin("js") version "1.5.20"
}

kotlin {
    js {
        browser {

        }
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation(kotlin("stdlib-js"))
    testImplementation("org.jetbrains.kotlin:kotlin-test")
    testImplementation("org.jetbrains.kotlin:kotlin-test-junit")
}

sourceSets {
    create("web") {
        resources.srcDir(files("src/web"))
    }
}

tasks {

    "compileKotlinJs"(Kotlin2JsCompile::class) {
        kotlinOptions {
            moduleKind = "umd" //"plain", "amd", "commonjs", "umd"
            sourceMap = true
            sourceMapEmbedSources = "always"
            outputFile = "${buildDir.path}/compileKotlinJs/fl9_compiler.js"
        }
    }

    register<Copy>("copyWeb") {
        from(sourceSets["web"].resources.srcDirs)
        into(file("${buildDir.path}/web"))
    }

    register<Copy>("copyMinifiedFiles") {
        dependsOn("processDceKotlinJs")
        from(project.tasks["processDceKotlinJs"].outputs)
        into(file("${buildDir.path}/web/release"))
    }

    register<Exec>("makeNpms") {
        dependsOn("copyWeb")
        workingDir = file("${buildDir.path}/web/release")
        executable = "bash"
        args("make.sh")
    }

    register<Task>("buildWeb") {
        dependsOn("copyWeb")
        dependsOn("copyMinifiedFiles")
        dependsOn("makeNpms")
    }

    register<Exec>("testWeb") {
        dependsOn("buildWeb")
        executable = "bash"
        args("test.sh")
    }

}

(tasks["processDceKotlinJs"] as KotlinJsDce).apply {
    keep("fl9_compiler.fl9")
}

afterEvaluate {
    tasks["build"].dependsOn("buildWeb")
    tasks["test"].dependsOn("testWeb")
}
