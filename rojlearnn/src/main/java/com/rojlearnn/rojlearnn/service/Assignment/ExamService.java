package com.rojlearnn.rojlearnn.service.Assignment;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.Assignment.Exam;
import com.rojlearnn.rojlearnn.repo.Assignment.ExamRepo;

@Service
public class ExamService {
	
	@Autowired
	private ExamRepo er;

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
		Exam ex= er.save(exam);
		return new ResponseEntity<>(ex, HttpStatus.CREATED);
	}

    public ResponseEntity<?> getExamByUser(String userId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getExamByUser'");
    }

}
