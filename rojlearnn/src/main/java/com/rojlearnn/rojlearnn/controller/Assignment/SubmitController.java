package com.rojlearnn.rojlearnn.controller.Assignment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.model.Marks;
import com.rojlearnn.rojlearnn.model.Assignment.Submit.Submitexam;
import com.rojlearnn.rojlearnn.model.Assignment.Submit.Submittask;
import com.rojlearnn.rojlearnn.service.Assignment.SubmitService;

@RestController
@RequestMapping("/submit")
public class SubmitController {
   @Autowired
   SubmitService ss;

   @PostMapping("/submitExam/{examId}")
   public ResponseEntity<?> submitExam(@PathVariable String examId, @RequestBody List<Submitexam> exam){
      return ss.submitExam(examId, exam);
   }

   @PostMapping("/submittask/{taskId}")
   public ResponseEntity<String> submitTask(@PathVariable String taskId, @RequestBody Submittask task){
      return ss.submitTask(taskId, task);
   }

   @PostMapping("/marksByTeacher/{taskId}")
   public ResponseEntity<?> getMarksByTeacher(@PathVariable String taskId, @RequestBody Marks marks){
      return ss.getMarksByTeacher(taskId, marks);
   }

}
