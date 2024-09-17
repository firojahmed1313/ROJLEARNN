package com.rojlearnn.rojlearnn.service;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.Assignment.Assignment;

@Service
public class AssignmentService {
    @Autowired
    private com.rojlearnn.rojlearnn.repo.Assignment.ExamRepo er;
    @Autowired
    private com.rojlearnn.rojlearnn.repo.Assignment.AssignmentRepo ar;
    @Autowired
    private com.rojlearnn.rojlearnn.repo.Assignment.TaskRepo tr;
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


}
