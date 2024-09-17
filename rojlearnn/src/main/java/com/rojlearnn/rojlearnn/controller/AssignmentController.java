package com.rojlearnn.rojlearnn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.service.AssignmentService;

@RestController
@RequestMapping(path = "/assignment")
public class AssignmentController {
    @Autowired
    private AssignmentService as;

}
