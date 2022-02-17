package com.cinema.beka.plugins

import io.ktor.routing.*
import io.ktor.application.*
import io.ktor.http.content.*
import io.ktor.response.*

fun Application.routing() {

    routing {

        static("/static") {
            resources("source")
        }

        get("/h") {
            call.respondText("Hello, World!")
        }
    }
}





