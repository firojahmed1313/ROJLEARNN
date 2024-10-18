package com.rojlearnn.rojlearnn.service.Assignment;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.Assignment.Assignment;
import com.rojlearnn.rojlearnn.repo.Assignment.AssignmentRepo;
import com.rojlearnn.rojlearnn.repo.Assignment.ExamRepo;
import com.rojlearnn.rojlearnn.repo.Assignment.TaskRepo;

@Service
public class AssignmentService {
    
    @Autowired
    private AssignmentRepo ar;
    @Autowired
    private TaskRepo tr;
    public ResponseEntity<?> createAssignment(Assignment assignment) {
        Assignment ass = ar.findByCourseid(new ObjectId(assignment.getCourseid())); // TODO: assignment.getCourseid());

        if (ass == null) {
            Assignment ass1 = new Assignment(new ObjectId(assignment.getCourseid()), assignment.getTask(), assignment.getExam());
            ar.save(ass1);
            return new ResponseEntity<>(ass1, HttpStatus.CREATED);
        }
        List<ObjectId> t = ass.getTask();
        t.addAll(assignment.getTask());
        ass.setTask(t);

        List<ObjectId> e = ass.getExam();
        e.addAll(assignment.getExam());
        ass.setExam(e);
        Assignment assar = ar.save(ass);
        return new ResponseEntity<>(assar, HttpStatus.CREATED);

        //assignment.setExam()
    }
    public ResponseEntity<?> getAllAssignment() {

        return new ResponseEntity<>(ar.findAll(), HttpStatus.OK);
    }
	public ResponseEntity<?> getAssignmentById(String id) {
        return null;

		//return new ResponseEntity<>(ar.findById(id), HttpStatus.OK);
	}
	public ResponseEntity<?> updateAssignmentExamAdd(String id, Assignment assignment) {
		// TODO Auto-generated method stub
		return null;
	}
	public ResponseEntity<?> updateAssignmentExamRemove(String id, Assignment assignment) {
		// TODO Auto-generated method stub
		return null;
	}
	public ResponseEntity<?> updateAssignmentTaskAdd(String id, Assignment assignment) {
		// TODO Auto-generated method stub
		return null;
	}
	public ResponseEntity<?> updateAssignmentTaskRemove(String id, Assignment assignment) {
		// TODO Auto-generated method stub
		return null;
	}
    public ResponseEntity<?> getAssignmentByCourse(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAssignmentByCourse'");
    }
	

}
