package com.rojlearnn.rojlearnn.controller.Assignment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.dataformat.yaml.snakeyaml.error.Mark;
import com.rojlearnn.rojlearnn.model.Marks;
import com.rojlearnn.rojlearnn.service.Assignment.ReportService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/report")
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
        System.out.println(cuid);
        return rs.getMarksByCuid(cuid);
    }
    @PostMapping("/examMarkByStudent")
    public ResponseEntity<?> getExamMarksDetails(@RequestBody List<Marks> marks) {
        return rs.getExamMarksDetails(marks);
    }
    @PostMapping("/taskMarkByStudent")
    public ResponseEntity<?> getTaskMarksDetails(@RequestBody List<Marks> marks) {
        return rs.getTaskMarksDetails(marks);
    }
    @PostMapping("/assMarkByStudent")
    public ResponseEntity<?> getAssignmentMarksDetails(@RequestBody List<Marks> marks) {
        return rs.getAssignmentMarksDetails(marks);
    }

    
}
