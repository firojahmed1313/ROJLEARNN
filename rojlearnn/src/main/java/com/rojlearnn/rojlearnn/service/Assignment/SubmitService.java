package com.rojlearnn.rojlearnn.service.Assignment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.repo.Assignment.MarksRepo;

@Service
public class SubmitService {
    @Autowired
    MarksRepo mr;
}
