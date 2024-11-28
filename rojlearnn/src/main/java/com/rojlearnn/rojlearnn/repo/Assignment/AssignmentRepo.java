package com.rojlearnn.rojlearnn.repo.Assignment;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rojlearnn.rojlearnn.model.Assignment.Assignment;
@Repository
public interface AssignmentRepo extends MongoRepository<Assignment, String> {

    List<Assignment> findByCourseid(ObjectId objectId);

    Object findBy_id(ObjectId objectId);

	//Object findById(ObjectId objectId);

}
