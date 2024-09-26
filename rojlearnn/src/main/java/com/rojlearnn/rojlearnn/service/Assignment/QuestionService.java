package com.rojlearnn.rojlearnn.service.Assignment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.Assignment.Questions;
import com.rojlearnn.rojlearnn.repo.Assignment.QuestionsRepo;


@Service
public class QuestionService {
	@Autowired
	private QuestionsRepo qr;

	public ResponseEntity<?> getAllQuestion() {
		List<Questions> question = qr.findAll();
		return new ResponseEntity<>(question, HttpStatus.OK);
	}

	public ResponseEntity<?> getQuestionById(String id) {
		Questions question = qr.findById(id).get();
		return new ResponseEntity<>(question, HttpStatus.OK);
		
	}

	public ResponseEntity<?> getQuestionByQuestiontype(String type) {
		List<Questions> question = qr.findByQuestiontype(type);
		return new ResponseEntity<>(question, HttpStatus.OK);
	}

	public ResponseEntity<?> createQuestion(Questions question) {
		Questions ex = qr.save(question);
		return new ResponseEntity<>(ex, HttpStatus.CREATED);
	}

}
