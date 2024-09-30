package com.rojlearnn.rojlearnn.repo.Assignment;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.rojlearnn.rojlearnn.model.Marks;
@Repository
public interface MarksRepo extends MongoRepository<Marks, String> {

    Marks findByCuid(String cuid);

    List<Marks> findAllByContainid(ObjectId objectId);

    List<Marks> findAllByUserid(ObjectId objectId);



}
