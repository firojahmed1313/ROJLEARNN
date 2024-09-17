package com.rojlearnn.rojlearnn.repo.AddonRepo;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rojlearnn.rojlearnn.model.Addon.Tacking;

@Repository
public interface TackingRepo extends MongoRepository<Tacking, String> {

    List<Tacking> findAllByContentid(ObjectId objectId);

    List<Tacking> findAllByUserid(ObjectId objectId);

    Tacking findByCuid(String cuid);

}
