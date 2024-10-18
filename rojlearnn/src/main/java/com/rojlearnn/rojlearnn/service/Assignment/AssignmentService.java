package com.rojlearnn.rojlearnn.service.Assignment;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.Assignment.Assignment;
import com.rojlearnn.rojlearnn.repo.Assignment.AssignmentRepo;

@Service
public class AssignmentService {
    
    @Autowired
    private AssignmentRepo ar;

    public ResponseEntity<?> createAssignment(Assignment assignment) {
        ar.save(assignment);
        return new ResponseEntity<>(assignment, HttpStatus.CREATED);
    }

    public ResponseEntity<?> getAllAssignment() {
        List<Assignment> assignments = ar.findAll();
        return new ResponseEntity<>(assignments, HttpStatus.OK);
    }

    public ResponseEntity<?> getAssignmentById(String id) {
        Assignment assignment = ar.findById(id).orElse(null);
        if (assignment == null) {
            return new ResponseEntity<>("Assignment not found", HttpStatus.OK);
        }
        return new ResponseEntity<>(assignment, HttpStatus.OK);
    }

    public ResponseEntity<?> getAssignmentByCourse(String id) {
        List<Assignment> assignment = ar.findByCourseid(new ObjectId(id));
        return new ResponseEntity<>(assignment, HttpStatus.OK);
    }




}
