package com.rojlearnn.rojlearnn.repo.Assignment;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rojlearnn.rojlearnn.model.Assignment.Submit.Submittask;

@Repository
public interface TaskSubmitRepo extends MongoRepository<Submittask, String> {

    Optional<Submittask> findById(ObjectId objectId);

}
