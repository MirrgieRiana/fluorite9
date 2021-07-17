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

}

(tasks["processDceKotlinJs"] as KotlinJsDce).apply {
    keep("fl9_compiler.fl9")
}

afterEvaluate {
    tasks["build"].dependsOn("copyWeb")
    tasks["build"].dependsOn("copyMinifiedFiles")
}
