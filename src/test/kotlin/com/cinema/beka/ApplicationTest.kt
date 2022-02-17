package com.cinema.beka

import io.ktor.routing.*
import io.ktor.http.*
import kotlin.test.*
import io.ktor.server.testing.*
import com.cinema.beka.plugins.*
import io.ktor.application.*

class ApplicationTest {
    @Test
    fun testRoot() {
        withTestApplication({ routing() }) {
            handleRequest(HttpMethod.Get, "localhost:8080/").apply {
//                assertEquals(HttpStatusCode.OK, response.status())
            }
        }
    }
}