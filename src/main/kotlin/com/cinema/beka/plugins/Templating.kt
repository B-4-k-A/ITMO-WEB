package com.cinema.beka.plugins

import freemarker.cache.*
import io.ktor.freemarker.*
import io.ktor.application.*
import io.ktor.routing.*

fun Application.configureTemplating() {
    install(FreeMarker) {
        templateLoader = ClassTemplateLoader(this::class.java.classLoader, "templates")
    }

    routing {
        get("/") {
            call.respondTemplate("/index.ftl")
        }
    }
}

