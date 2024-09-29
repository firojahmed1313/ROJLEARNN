package com.rojlearnn.rojlearnn.service.Assignment;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.Marks;
import com.rojlearnn.rojlearnn.repo.Assignment.MarksRepo;

@Service
public class ReportService {
    @Autowired
    MarksRepo mr;

    public ResponseEntity<?> getMarksByContentId(String contentid) {
        List <Marks> l= mr.findAllByContentid(new ObjectId(contentid));
        if(l.isEmpty()) {
            return new ResponseEntity<>("No Record Found",HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(l,HttpStatus.OK);
    }

    public ResponseEntity<?> getMarksByStudentId(String studentid) {
        List <Marks> l= mr.findAllByStudentid(new ObjectId(studentid));
        if(l.isEmpty()) {
            return new ResponseEntity<>("No Record Found",HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(l,HttpStatus.OK);
    }

    public ResponseEntity<?> getMarksByCuid(String cuid) {
        Marks l= mr.findByCuid(cuid);
        if(l==null) {
            return new ResponseEntity<>("No Record Found",HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(l,HttpStatus.OK);
    }
}
