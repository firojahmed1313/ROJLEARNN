package com.rojlearnn.rojlearnn.controller.Assignment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.model.Assignment.Assignment;
import com.rojlearnn.rojlearnn.service.Assignment.AssignmentService;
//not needed
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
    
    @GetMapping("/getAssignment/{id}")
	public ResponseEntity<?> getAssignmentById(@PathVariable String id){
		return as.getAssignmentById(id);
	}
    
    @PutMapping("/update/exam/add/{id}")
	public ResponseEntity<?> updateAssignmentExamAdd(@PathVariable String id, @RequestBody Assignment assignment) {
		return as.updateAssignmentExamAdd(id, assignment);
	}
    
	@PutMapping("/update/exam/remove/{id}")
	public ResponseEntity<?> updateAssignmentExamRemove(@PathVariable String id, @RequestBody Assignment assignment) {
		return as.updateAssignmentExamRemove(id, assignment);
	}
	
	@PutMapping("/update/task/add/{id}")
	public ResponseEntity<?> updateAssignmentTaskAdd(@PathVariable String id, @RequestBody Assignment assignment) {
		return as.updateAssignmentTaskAdd(id, assignment);
	}
	
	@PutMapping("/update/task/remove/{id}")
	public ResponseEntity<?> updateAssignmentTaskRemove(@PathVariable String id, @RequestBody Assignment assignment) {
		return as.updateAssignmentTaskRemove(id, assignment);
	}
	
	
	

}
