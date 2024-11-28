package com.rojlearnn.rojlearnn.service.Assignment;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.Marks;
import com.rojlearnn.rojlearnn.model.Assignment.Exam;
import com.rojlearnn.rojlearnn.repo.Assignment.AssignmentRepo;
import com.rojlearnn.rojlearnn.repo.Assignment.ExamRepo;
import com.rojlearnn.rojlearnn.repo.Assignment.MarksRepo;
import com.rojlearnn.rojlearnn.repo.Assignment.TaskRepo;

@Service
public class ReportService {
    @Autowired
    MarksRepo mr;

    @Autowired
    ExamRepo er;

    @Autowired
    TaskRepo tr;

    @Autowired
    AssignmentRepo ar;

    public ResponseEntity<?> getMarksByContentId(String contentid) {
        //System.out.println(contentid);
        List <Marks> l= mr.findAllByContainid(new ObjectId(contentid));
        //System.out.println(l);
        if(l.isEmpty()) {
            return new ResponseEntity<>("No Record Found",HttpStatus.OK);
        }
        return new ResponseEntity<>(l,HttpStatus.OK);
    }

    public ResponseEntity<?> getMarksByStudentId(String studentid) {
        //System.out.println(studentid);
        List <Marks> l= mr.findAllByUserid(new ObjectId(studentid));
        //System.out.println(l);
        if(l.isEmpty()) {
            return new ResponseEntity<>("No Record Found",HttpStatus.OK);
        }
        return new ResponseEntity<>(l,HttpStatus.OK);
    }

    public ResponseEntity<?> getMarksByCuid(String cuid) {
        //System.out.println(cuid);
        Marks l= mr.findByCuid(cuid);
        //System.out.println(l);
        if(l==null) {
            return new ResponseEntity<>("No Record Found",HttpStatus.OK);
        }
        return new ResponseEntity<>(l,HttpStatus.OK);
    }

    public ResponseEntity<?> getExamMarksDetails(List<Marks> marks) {
        List<Map<String, Object>> ans = new ArrayList<>();
        
        for (Marks mark : marks) {
            Map<String, Object> response = new HashMap<>();
            Exam exam = er.findBy_id(new ObjectId(mark.getContainid())).orElse(null);
            response.put("contain", exam);
            response.put("mark", mark);
            ans.add(response);
        }
        return new ResponseEntity<>(ans, HttpStatus.OK);

        // TODO Auto-generated method stub
    }

    public ResponseEntity<?> getTaskMarksDetails(List<Marks> marks) {
        List<Map<String, Object>> ans = new ArrayList<>();
        
        for (Marks mark : marks) {
            Map<String, Object> response = new HashMap<>();
            String taskid = mark.getContainid();
            response.put("contain", tr.findBy_id(new ObjectId(taskid)));
            response.put("mark", mark);
            ans.add(response);
        }
        return new ResponseEntity<>(ans, HttpStatus.OK);
    }

    public ResponseEntity<?> getAssignmentMarksDetails(List<Marks> marks) {
        List<Map<String, Object>> ans = new ArrayList<>();
        
        for (Marks mark : marks) {
            Map<String, Object> response = new HashMap<>();
            String assignmentid = mark.getContainid();
            response.put("contain", ar.findBy_id(new ObjectId(assignmentid)));
            response.put("mark", mark);
            ans.add(response);
        }
        return new ResponseEntity<>(ans, HttpStatus.OK);
    }
}
