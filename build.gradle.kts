import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

val ktorVersion: String by project
val kotlinVersion: String by project
val exposedVersion: String by project
val logbackVersion: String by project

plugins {
    application
    kotlin("jvm") version "1.5.31"
}

group = "com.cinema.beka"
version = "0.0.1"
application {
    mainClass.set("com.cinema.beka.ApplicationKt")
}

val javaVersion = JavaVersion.VERSION_1_8.toString()

tasks.withType<KotlinCompile> {
    kotlinOptions.jvmTarget = javaVersion
}

tasks.withType<JavaCompile> {
    sourceCompatibility = javaVersion
    targetCompatibility = javaVersion
}


//tasks.jar {
//    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
//    from (
//        configurations.runtimeClasspath.get().map {
//            if (it.isDirectory)
//                it
//            else
//                zipTree(it)
//        }
//    )
//
//    manifest {
//        attributes(
//        "Main-Class" to "com.cinema.beka.ApplicationKt"
//        )
//    }
//}

tasks.create("stage") {
    dependsOn("installDist")
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("io.ktor:ktor-server-core:$ktorVersion")
    implementation("io.ktor:ktor-server-netty:$ktorVersion")
    implementation("io.ktor:ktor-thymeleaf:$ktorVersion")
    implementation("org.jetbrains.exposed:exposed-core:$exposedVersion")
    implementation("org.jetbrains.exposed:exposed-dao:$exposedVersion")
    implementation("org.jetbrains.exposed:exposed-jdbc:$exposedVersion")
    implementation("ch.qos.logback:logback-classic:$logbackVersion")
    testImplementation("io.ktor:ktor-server-tests:$ktorVersion")
    testImplementation("org.jetbrains.kotlin:kotlin-test:$kotlinVersion")
    implementation(kotlin("stdlib-jdk8"))
}
