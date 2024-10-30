package com.rojlearnn.rojlearnn.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // Enable CORS for all endpointshttps://8080-firojahmed131-rojlearnn-yx462bjcym9.ws-us116.gitpod.io
                .allowedOrigins("https://5173-firojahmed131-rojlearnn-yx462bjcym9.ws-us116.gitpod.io","https://rojlearn.vercel.app","http://localhost:5173") 
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .exposedHeaders("Authorization")
                .allowCredentials(true);
    }
}

