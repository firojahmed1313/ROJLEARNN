package com.rojlearnn.rojlearnn.repo;


import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rojlearnn.rojlearnn.model.Notifications;

@Repository
public interface NotificationsRepo extends MongoRepository<Notifications, String> {

	List<Notifications> findByUserid(ObjectId objectId);

	Notifications findBy_id(String id);

}
