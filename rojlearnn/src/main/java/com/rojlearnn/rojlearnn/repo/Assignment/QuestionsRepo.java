package com.rojlearnn.rojlearnn.repo.Assignment;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rojlearnn.rojlearnn.model.Assignment.Questions;

@Repository
public interface QuestionsRepo extends MongoRepository<Questions, String> {

	List<Questions> findByQuestiontype(String type);

}
