val ktor_version: String by project
val kotlin_version: String by project
val kotlin_css_version: String by project
val logback_version: String by project

plugins {
    application
    kotlin("jvm") version "1.5.31"
}

group = "com.cinema.beka"
version = "0.0.1"
application {
    mainClass.set("com.cinema.beka.ApplicationKt")
}

//tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
//    kotlinOptions {
//        jvmTarget = "1.6"
//    }
//}



tasks.jar {
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE 
    from (
        configurations.runtimeClasspath.get().map {
            if (it.isDirectory)
                it
            else
                zipTree(it)
        }
    )

    manifest {
        attributes(
        "Main-Class" to "com.cinema.beka.ApplicationKt"
        )
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("io.ktor:ktor-server-core:$ktor_version")
    implementation("io.ktor:ktor-freemarker:$ktor_version")
    implementation("io.ktor:ktor-server-netty:$ktor_version")
    implementation("ch.qos.logback:logback-classic:$logback_version")
    testImplementation("io.ktor:ktor-server-tests:$ktor_version")
    testImplementation("org.jetbrains.kotlin:kotlin-test:$kotlin_version")
}