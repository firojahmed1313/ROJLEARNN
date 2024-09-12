package com.rojlearnn.rojlearnn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.rojlearnn.rojlearnn.repo.UserRepo;
import com.rojlearnn.rojlearnn.repo.CourseRepo;

//@EnableMongoRepositories(basePackages ={"UserRepo.class", "CourseRepo.class"})
@SpringBootApplication
public class RojlearnnApplication {

	public static void main(String[] args) {
		SpringApplication.run(RojlearnnApplication.class, args);
	}

}
