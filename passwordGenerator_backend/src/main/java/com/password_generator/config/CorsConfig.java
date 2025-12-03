package com.password_generator.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")  // all endpoints
                         .allowedOrigins(
                            "http://localhost:3000"  // React frontend local
                            // "http://backend:3000",    // Docker network (if needed)
                            // "http://frontend:3000",    // optional: frontend container name
                            // "http://frontend:80"       // docker-compose frontend
                        )
                        .allowedMethods("GET", "POST", "PUT", "DELETE");
            }
        };
    }
}

