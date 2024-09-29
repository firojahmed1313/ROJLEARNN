package com.rojlearnn.rojlearnn.controller.Assignment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.service.Assignment.ReportService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController("/report")
public class ReportController {
    @Autowired
    ReportService rs;

    @GetMapping("/markByContent/{contentid}")
    public ResponseEntity<?> getMarksByContentId(@PathVariable String contentid) {
        return rs.getMarksByContentId(contentid);
    }

    @GetMapping("/markByStudent/{studentid}")
    public ResponseEntity<?> getMarksByStudentId(@PathVariable String studentid) {
        return rs.getMarksByStudentId(studentid);
    }

    @GetMapping("/markByCuid/{cuid}")
    public ResponseEntity<?> getMarksByCuid(@PathVariable String cuid) {
        return rs.getMarksByCuid(cuid);
    }

    
}
