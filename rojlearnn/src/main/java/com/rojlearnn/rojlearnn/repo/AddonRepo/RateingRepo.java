package com.rojlearnn.rojlearnn.repo.AddonRepo;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rojlearnn.rojlearnn.model.Addon.Rateing;

@Repository
public interface RateingRepo extends MongoRepository<Rateing, String> {

    Rateing findByCuid(String cuid);

    List<Rateing> findAllByContentid(ObjectId objectId);

}
