import org.jetbrains.kotlin.gradle.tasks.Kotlin2JsCompile
import org.jetbrains.kotlin.gradle.tasks.KotlinJsDce

plugins {
    base
    id("kotlin2js") version "1.3.30"
    id("kotlin-dce-js") version "1.5.20"
    //id("org.jetbrains.kotlin.js") version "1.3.40"
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

    "compileKotlin2Js"(Kotlin2JsCompile::class) {
        kotlinOptions {
            moduleKind = "umd" //"plain", "amd", "commonjs", "umd"
            sourceMap = true
            sourceMapEmbedSources = "always"
            outputFile = "${buildDir.path}/compileKotlin2Js/fl9_compiler.js"
        }
    }

    register<Copy>("copyWeb") {
        from(sourceSets["web"].resources.srcDirs)
        into(file("${buildDir.path}/web"))
    }

    register<Copy>("copyMinifiedFiles") {
        from("${buildDir.path}/kotlin-js-min/main")
        into(file("${buildDir.path}/web/release"))
    }

}

(tasks["runDceKotlinJs"] as KotlinJsDce).apply {
    keep("fl9_compiler.fl9")
}

afterEvaluate {
    tasks["build"].dependsOn("runDceKotlinJs")
    tasks["build"].dependsOn("copyWeb")
    tasks["copyMinifiedFiles"].dependsOn("runDceKotlinJs")
    tasks["build"].dependsOn("copyMinifiedFiles")
}


// apply false
//id("org.jetbrains.kotlin.js") version "1.3.40"
//id("org.jetbrains.kotlin.js") version "1.3.40" apply false
//id("org.jetbrains.kotlin.frontend") version "0.0.45" apply false
//id("com.moowork.node") version  "1.3.1" apply false
//id("kotlin2js")
/*
tasks {
    "compileKotlin2Js"(Kotlin2JsCompile::class) {
        kotlinOptions {
            moduleKind = "umd" //"plain", "amd", "commonjs", "umd"
            sourceMap = true
            sourceMapEmbedSources = "always"
        }
    }
}
tasks {
    register<Copy>("copyMinifiedFiles") {
        val to = "$projectDir/web"
        from("${buildDir.path}/kotlin-js-min/main")
        into(file(to))
    }
}
afterEvaluate {
    tasks["build"].dependsOn("runDceKotlinJs")
    tasks["build"].dependsOn("copyMinifiedFiles")
}

*/


/*
plugins {
    base
    id("kotlin2js")  version "1.3.30" apply false
    id("org.jetbrains.kotlin.js") version "1.3.40" apply false
    id("org.jetbrains.kotlin.frontend") version "0.0.45" apply false
    id("com.moowork.node") version  "1.3.1" apply false

    //id("org.jetbrains.kotlin.jvm") version "1.4.31"
    id("kotlin2js")// version "1.3.70"
    id("kotlin-dce-js")
    //application
}
*/
//repositories {
//mavenCentral()
//jcenter()
//}

//dependencies {
//implementation(platform("org.jetbrains.kotlin:kotlin-bom"))
//implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
//implementation("com.google.guava:guava:30.1-jre")
//testImplementation("org.jetbrains.kotlin:kotlin-test")
//testImplementation("org.jetbrains.kotlin:kotlin-test-junit")
//implementation(kotlin("stdlib-js"))
//}

//application {
//mainClass.set("Abc.AppKt")
//}

/*
tasks {
    compileKotlin2Js {
        kotlinOptions {
            outputFile = "${sourceSets.main.get().output.resourcesDir}/output.js"
            sourceMap = true
        }
    }
    val unpackKotlinJsStdlib by registering {
        group = "build"
        description = "Unpack the Kotlin JavaScript standard library"
        val outputDir = file("$buildDir/$name")
        inputs.property("compileClasspath", configurations.compileClasspath.get())
        outputs.dir(outputDir)
        doLast {
            val kotlinStdLibJar = configurations.compileClasspath.get().single {
                it.name.matches(Regex("kotlin-stdlib-js-.+\\.jar"))
            }
            copy {
                includeEmptyDirs = false
                from(zipTree(kotlinStdLibJar))
                into(outputDir)
                include("/*.js")
                exclude("META-INF/**")
            }
        }
    }
    val assembleWeb by registering(Copy::class) {
        group = "build"
        description = "Assemble the web application"
        includeEmptyDirs = false
        from(unpackKotlinJsStdlib)
        from(sourceSets.main.get().output) {
            exclude("**/*.kjsm")
        }
        into("$buildDir/web")
    }
    assemble {
        dependsOn(assembleWeb)
    }
}
*/
