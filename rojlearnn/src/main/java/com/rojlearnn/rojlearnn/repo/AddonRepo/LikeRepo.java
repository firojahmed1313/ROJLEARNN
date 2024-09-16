package com.rojlearnn.rojlearnn.repo.AddonRepo;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.rojlearnn.rojlearnn.model.Addon.Like;

public interface LikeRepo extends MongoRepository<Like, String> {

    List<Like> findAllByContentid(ObjectId contentid);

    Like findByCuid(String cuId);

    List<Like> findAllByUserid(ObjectId objectId);

}
