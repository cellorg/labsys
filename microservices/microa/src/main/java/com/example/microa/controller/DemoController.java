package com.example.microa.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {
    Logger logger = LoggerFactory.getLogger(DemoController.class);
    @Value("${pdp.owner.jdbc.url}")
    private String dbUrl;

    @GetMapping("/hello")
    public String helloWorld() {
        System.out.println("/hello invoked - System.out.println");
        logger.info("/hello invoked - logging");
        return "Hello from MicorA service! >>>>>> parameter dbUrl is " + dbUrl;
    }

    @GetMapping("/health")
    public String healthcheck() {
        return "microa is healthy!";
    }
}
