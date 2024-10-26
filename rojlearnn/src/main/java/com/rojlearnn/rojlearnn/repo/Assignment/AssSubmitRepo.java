package com.rojlearnn.rojlearnn.repo.Assignment;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rojlearnn.rojlearnn.model.Assignment.Questions;
import com.rojlearnn.rojlearnn.model.Assignment.Submit.Submitass;
@Repository
public interface AssSubmitRepo extends MongoRepository<Submitass, String> {

    List<Submitass> findByUserid(ObjectId objectId);


    List<Submitass> findByAssignmentid(ObjectId objectId);


	Submitass findByAuid(String auid);
    
}
