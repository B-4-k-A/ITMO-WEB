package com.cinema.beka.plugins

import io.ktor.application.*
import io.ktor.routing.*
import io.ktor.thymeleaf.*
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver

fun Application.templating() {
//    install(FreeMarker) {
//        templateLoader = ClassTemplateLoader(this::class.java.classLoader, "templates")
//    }

    install(Thymeleaf) {
        setTemplateResolver(ClassLoaderTemplateResolver().apply{
            prefix = "/pages"
            suffix = ".html"
            characterEncoding = "utf-8"
        })
    }

    routing {
        get("/") {
            call.respondTemplate("/index.html")
        }
    }
}

