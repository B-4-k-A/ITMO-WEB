package com.cinema.beka

import io.ktor.server.engine.*
import io.ktor.server.netty.*
import com.cinema.beka.plugins.*
import io.ktor.application.*
import io.ktor.features.*

fun main() {
    embeddedServer(Netty, port = 8080, host = "0.0.0.0") {
        configureRouting()
        configureTemplating()
        install(CallLogging)
    }.start(wait = true)
}
