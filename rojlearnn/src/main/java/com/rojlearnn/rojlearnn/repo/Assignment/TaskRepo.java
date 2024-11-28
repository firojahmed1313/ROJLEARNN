package com.rojlearnn.rojlearnn.repo.Assignment;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rojlearnn.rojlearnn.model.Assignment.Task;
@Repository
public interface TaskRepo extends MongoRepository<com.rojlearnn.rojlearnn.model.Assignment.Task, String> {

	List<Task> findByCourseid(ObjectId objectId);

    Object findBy_id(ObjectId objectId);

}
