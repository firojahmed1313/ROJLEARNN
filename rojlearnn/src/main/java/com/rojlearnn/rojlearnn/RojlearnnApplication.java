package com.rojlearnn.rojlearnn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;


//@EnableMongoRepositories(basePackages ={"UserRepo.class", "CourseRepo.class"})
@SpringBootApplication
@CrossOrigin(origins = "https://8080-firojahmed131-rojlearnn-yx462bjcym9.ws-us116.gitpod.io")
public class RojlearnnApplication {

	public static void main(String[] args) {
		SpringApplication.run(RojlearnnApplication.class, args);
	}

}

