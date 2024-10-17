package com.rojlearnn.rojlearnn.controller.Assignment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.model.Assignment.Exam;
import com.rojlearnn.rojlearnn.service.Assignment.ExamService;

@RestController
@RequestMapping(path = "/exam")
public class ExamController {
	
	@Autowired
	private ExamService es;
	
	@GetMapping("/getAllExam")
	public ResponseEntity<?> getAllExam(){
		return es.getAllExam();
	}

	@GetMapping("/getExam/{id}")
	public ResponseEntity<?> getExamById(@PathVariable String id){
		return es.getExamById(id);
	}

	@GetMapping("/getExamByCourse/{id}")
	public ResponseEntity<?> getExamByCourse(@PathVariable String id){
		return es.getExamByCourse(id);
	}
	
	@GetMapping("/getExamByQuestiontype/{type}")
	public ResponseEntity<?> getExamByQuestiontype(@PathVariable String type){
		return es.getExamByQuestiontype(type);
	}
	
	@PostMapping("/create")
	public ResponseEntity<?> createExam(@RequestBody Exam exam){
		return es.createExam(exam);
	}

	@GetMapping("/getExamByUser/{userId}")
	public ResponseEntity<?> getExamByUser(@PathVariable String userId){
		return es.getExamByUser(userId);
	}

}
