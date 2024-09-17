package com.rojlearnn.rojlearnn.repo.Assignment;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.rojlearnn.rojlearnn.model.Assignment.Exam;

public interface ExamRepo extends MongoRepository<Exam, String> {

}
