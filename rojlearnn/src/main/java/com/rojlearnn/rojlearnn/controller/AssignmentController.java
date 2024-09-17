package com.rojlearnn.rojlearnn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.model.Assignment.Assignment;
import com.rojlearnn.rojlearnn.service.AssignmentService;

@RestController
@RequestMapping(path = "/assignment")
public class AssignmentController {
    @Autowired
    private AssignmentService as;

    @PostMapping("/create")
    public ResponseEntity<?> createAssignment(@RequestBody Assignment assignment) {
        return as.createAssignment(assignment);
    }
    @GetMapping("/getAllAssignment")
    public ResponseEntity<?> getAllAssignment(){

        return as.getAllAssignment();
    }

}
