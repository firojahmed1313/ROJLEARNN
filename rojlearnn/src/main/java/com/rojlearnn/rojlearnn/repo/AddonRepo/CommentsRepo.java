package com.rojlearnn.rojlearnn.repo.AddonRepo;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.rojlearnn.rojlearnn.model.Addon.Comments;

public interface CommentsRepo extends MongoRepository<Comments, String> {

    List<Comments> findAllByContentid(ObjectId objectId);

    List<Comments> findAllByUserid(ObjectId objectId);

}
