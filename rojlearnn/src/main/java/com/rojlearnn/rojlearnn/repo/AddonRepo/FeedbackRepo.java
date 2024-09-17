package com.rojlearnn.rojlearnn.repo.AddonRepo;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.rojlearnn.rojlearnn.model.Addon.Feedback;

public interface FeedbackRepo extends MongoRepository<Feedback, String> {

    List<Feedback> findAllByContentid(ObjectId objectId);

    List<Feedback> findAllByUserid(ObjectId objectId);

    List<Feedback> findAllByFeedbacktype(String feedbacktype);

}
