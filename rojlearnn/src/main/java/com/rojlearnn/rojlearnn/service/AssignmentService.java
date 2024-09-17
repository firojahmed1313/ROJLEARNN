package com.rojlearnn.rojlearnn.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssignmentService {
    @Autowired
    private com.rojlearnn.rojlearnn.repo.Assignment.ExamRepo er;
    @Autowired
    private com.rojlearnn.rojlearnn.repo.Assignment.AssignmentRepo ar;
    @Autowired
    private com.rojlearnn.rojlearnn.repo.Assignment.TaskRepo tr;
}
