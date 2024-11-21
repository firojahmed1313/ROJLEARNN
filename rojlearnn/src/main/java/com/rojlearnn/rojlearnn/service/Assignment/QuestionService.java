package com.rojlearnn.rojlearnn.service.Assignment;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.Assignment.Exam;
import com.rojlearnn.rojlearnn.model.Assignment.Questions;
import com.rojlearnn.rojlearnn.repo.Assignment.ExamRepo;
import com.rojlearnn.rojlearnn.repo.Assignment.QuestionsRepo;


@Service
public class QuestionService {
	@Autowired
	private QuestionsRepo qr;
	@Autowired
	private ExamRepo er;

	public ResponseEntity<?> getAllQuestion() {
		List<Questions> question = qr.findAll();
		return new ResponseEntity<>(question, HttpStatus.OK);
	}

	public ResponseEntity<?> getQuestionById(String id) {
		System.out.println(id);
		Questions question = qr.findBy_id(new ObjectId(id));
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

    public ResponseEntity<?> getQuestionByExam(String examId) {
        Exam exam= er.findById(examId).orElse(null);
		if(exam==null) {
			return new ResponseEntity<>("Exam not found",HttpStatus.OK);
		}
		List<String> questions = exam.getQuestions();
		List<Questions> q = new ArrayList<Questions>();
		for(String s: questions) {
			q.add(qr.findBy_id(new ObjectId(s)));
		}
		return new ResponseEntity<>(q, HttpStatus.OK);
    }


}
