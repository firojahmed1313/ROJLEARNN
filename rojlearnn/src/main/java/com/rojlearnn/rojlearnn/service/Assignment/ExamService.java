package com.rojlearnn.rojlearnn.service.Assignment;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

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
public class ExamService {
	
	@Autowired
	private ExamRepo er;
	
	@Autowired
	private QuestionsRepo qr;


	public ResponseEntity<?> getAllExam() {
		List<Exam> exam= er.findAll();
		return new ResponseEntity<>(exam, HttpStatus.OK);
	}

	public ResponseEntity<?> getExamById(String id) {
		Exam exam= er.findById(id).orElse(null);
		if(exam==null) {
			return new ResponseEntity<>("Exam not found",HttpStatus.OK);
		}
		return new ResponseEntity<>(exam, HttpStatus.OK);
	}

	public ResponseEntity<?> getExamByCourse(String id) {
	    List<Exam> exam= er.findByCourseid(new ObjectId(id));
		return new ResponseEntity<>(exam, HttpStatus.OK);
	}

	public ResponseEntity<?> getExamByQuestiontype(String type) {
		List<Exam> exam= er.findByQuestiontype(type);
		return new ResponseEntity<>(exam, HttpStatus.OK);
	}

	public ResponseEntity<?> createExam(Exam exam) {
		String qtype= exam.getQuestiontype();
		int no = Integer.valueOf(exam.getTotalquestions());
		System.out.println(qtype);
		System.out.println(no);
		if(qtype==null) {
			return new ResponseEntity<>("Question type cannot be null",HttpStatus.BAD_REQUEST);
		}
		if(no==0) {
			return new ResponseEntity<>("Total questions cannot be 0",HttpStatus.BAD_REQUEST);
		}
		List<Questions> q = new ArrayList<Questions>();
		if(qtype.equals("ALL")) {
			q = qr.findAll();
		}else {
			q = qr.findByQuestiontype(qtype);
		}
		Random rndm = new Random();
		int rndmIndx = rndm.nextInt(q.size());	
		List<String> questions = new ArrayList<String>();
		for(int i=0;i<no;i++) {
			System.out.println(rndmIndx);
			System.out.println(q.get(rndmIndx));
			questions.add(q.get(rndmIndx).get_id());
			rndmIndx = rndm.nextInt(q.size());
		}
		System.out.println(questions);
		exam.setQuestions(questions);
		//exam.setQuestions(questions);
		Exam ex= er.save(exam);
		return new ResponseEntity<>(ex, HttpStatus.CREATED);
	}

    public ResponseEntity<?> getExamByUser(String userId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getExamByUser'");
    }

}
