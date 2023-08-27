package com.example.libraryjava;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableRedisHttpSession
public class LibraryJavaApplication {

    public static void main(String[] args) {
        SpringApplication.run(LibraryJavaApplication.class, args);
    }

}