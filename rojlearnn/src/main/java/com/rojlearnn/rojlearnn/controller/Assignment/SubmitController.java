package com.rojlearnn.rojlearnn.controller.Assignment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.model.Marks;
import com.rojlearnn.rojlearnn.model.Assignment.Submit.Submitass;
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

   @PostMapping("/marksByTeacher/{containid}")
   public ResponseEntity<?> getMarksByTeacher(@PathVariable String containid, @RequestBody Marks marks){
      return ss.getMarksByTeacher(containid, marks);
   }
   @PostMapping("/submitass/{assignmentId}")
   public ResponseEntity<?> submitAssignment(@PathVariable String assignmentId, @RequestBody Submitass assignment){
      return ss.submitAssignment(assignmentId, assignment);
   }

   @GetMapping("/gettaskSubmitByUser/{userId}")
   public ResponseEntity<?> getTaskSubmitByUser(@PathVariable String userId){
      return ss.getTaskSubmitByUser(userId);
   }

   @GetMapping("/getAssSubmitByUser/{userId}")
   public ResponseEntity<?> getAssSubmitByUser(@PathVariable String userId){
      return ss.getAssSubmitByUser(userId);
   }

   @GetMapping("/getTaskSubmitByTaskid/{taskId}")
   public ResponseEntity<?> getTaskSubmitByTaskId(@PathVariable String taskId){
      return ss.getTaskSubmitByTaskId(taskId);
   }

   @GetMapping("/getAssSubmitByAssId/{assignmentId}")
   public ResponseEntity<?> getAssSubmitByAssId(@PathVariable String assignmentId){
      return ss.getAssSubmitByAssId(assignmentId);
   }

   
   

}
