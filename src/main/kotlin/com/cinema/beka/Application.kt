package com.cinema.beka

import io.ktor.server.engine.*
import io.ktor.server.netty.*
import com.cinema.beka.plugins.*
import io.ktor.application.*
import io.ktor.features.*

fun main() {
    embeddedServer(Netty, port = System.getenv("PORT")?.toInt() ?: 8080) {
        configureRouting()
        configureTemplating()
        install(CallLogging)
    }.start(wait = true)
}
