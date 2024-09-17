package com.rojlearnn.rojlearnn.repo.Assignment;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface TaskRepo extends MongoRepository<com.rojlearnn.rojlearnn.model.Assignment.Task, String> {

}
