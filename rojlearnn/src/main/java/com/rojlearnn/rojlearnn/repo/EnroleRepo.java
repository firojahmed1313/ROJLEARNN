package com.rojlearnn.rojlearnn.repo;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rojlearnn.rojlearnn.model.Enrole;
@Repository
public interface EnroleRepo extends MongoRepository<Enrole, String> {

    List<Enrole> findAllByCourseid(ObjectId courseId);

    List<Enrole> findAllByStudentid(ObjectId objectId);

}
