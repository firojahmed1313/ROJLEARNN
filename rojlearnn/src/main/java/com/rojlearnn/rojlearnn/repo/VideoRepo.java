package com.rojlearnn.rojlearnn.repo;

import org.springframework.stereotype.Repository;

import com.rojlearnn.rojlearnn.model.Video;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

@Repository
public interface VideoRepo extends MongoRepository<Video, String> {

    List<Video> findAllByCourseid(ObjectId objectId);
    
}
