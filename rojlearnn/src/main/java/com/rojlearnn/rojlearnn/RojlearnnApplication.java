package com.rojlearnn.rojlearnn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


//@EnableMongoRepositories(basePackages ={"UserRepo.class", "CourseRepo.class"})
@SpringBootApplication
public class RojlearnnApplication {

	public static void main(String[] args) {
		SpringApplication.run(RojlearnnApplication.class, args);
	}

}
