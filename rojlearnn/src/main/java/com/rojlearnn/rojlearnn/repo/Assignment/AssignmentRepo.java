package com.rojlearnn.rojlearnn.repo.Assignment;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.rojlearnn.rojlearnn.model.Assignment.Assignment;

public interface AssignmentRepo extends MongoRepository<Assignment, String> {

}
