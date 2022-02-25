package com.cinema.beka.plugins

import io.ktor.application.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.thymeleaf.*
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver

fun Application.templating() {
//    install(FreeMarker) {
//        templateLoader = ClassTemplateLoader(this::class.java.classLoader, "templates")
//    }

    install(Thymeleaf) {
        setTemplateResolver(ClassLoaderTemplateResolver().apply {
            prefix = "src/"
            suffix = ".html"
            characterEncoding = "utf-8"
        })
    }

    routing {
        get("/") {
            call.respond(ThymeleafContent("index", mapOf()))
        }
        get("/test") {
            call.respond(ThymeleafContent("", mapOf()))
        }
    }
}

