package com.rojlearnn.rojlearnn.repo.Assignment;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.rojlearnn.rojlearnn.model.Assignment.Exam;

public interface ExamRepo extends MongoRepository<Exam, String> {

	List<Exam> findByCourseid(ObjectId objectId);

	List<Exam> findByQuestiontype(String type);

}
