package com.rojlearnn.rojlearnn.repo.Assignment;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rojlearnn.rojlearnn.model.Assignment.Assignment;
@Repository
public interface AssignmentRepo extends MongoRepository<Assignment, String> {

    Assignment findByCourseid(ObjectId objectId);

	//Object findById(ObjectId objectId);

}
