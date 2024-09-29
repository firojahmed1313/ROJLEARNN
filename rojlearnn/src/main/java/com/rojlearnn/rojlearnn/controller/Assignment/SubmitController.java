package com.rojlearnn.rojlearnn.controller.Assignment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.service.Assignment.SubmitService;

@RestController("/submit")
public class SubmitController {
   @Autowired
   SubmitService ss;
}
