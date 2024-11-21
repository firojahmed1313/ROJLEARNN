package com.rojlearnn.rojlearnn.controller.Assignment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.model.Assignment.Questions;
import com.rojlearnn.rojlearnn.service.Assignment.QuestionService;

@RestController
@RequestMapping(path = "/question")
public class QuestionController {
	
	@Autowired
	private QuestionService qs;
	
	@GetMapping("/getAllQuestion")
	public ResponseEntity<?> getAllQuestion(){
		return qs.getAllQuestion();
	}
	
	@GetMapping("/getQuestion/{id}")
	public ResponseEntity<?> getQuestionById(@PathVariable String id){
		return qs.getQuestionById(id);
	}
	
	@GetMapping("/getQuestionByQuestiontype/{type}")
	public ResponseEntity<?> getQuestionByQuestiontype(@PathVariable String type){
		return qs.getQuestionByQuestiontype(type);
	}
	
	@PostMapping("/create")
	public ResponseEntity<?> createQuestion(@RequestBody Questions question){
		return qs.createQuestion(question);
	}
	@GetMapping("/getQuestionByExam/{examId}")
	public ResponseEntity<?> getQuestionByExam(@PathVariable String examId){
		return qs.getQuestionByExam(examId);
	}

}
