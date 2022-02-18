package com.cinema.beka.plugins

import io.ktor.routing.*
import io.ktor.application.*
import io.ktor.response.*

fun Application.configureRouting() {

    routing {

        get("/hello") {
            call.respondText("Hello, World!")
        }
    }
}





