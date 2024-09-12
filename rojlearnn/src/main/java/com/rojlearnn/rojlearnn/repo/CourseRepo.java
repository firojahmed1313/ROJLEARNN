package com.rojlearnn.rojlearnn.repo;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rojlearnn.rojlearnn.model.Course;
@Repository
public interface CourseRepo extends MongoRepository<Course, String> {

    List<Course> findAllByCategory(String category);


    List<Course> findAllByInstructor(ObjectId istructorId); //not working

    

}
