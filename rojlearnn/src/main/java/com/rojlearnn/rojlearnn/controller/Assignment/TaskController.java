package com.rojlearnn.rojlearnn.controller.Assignment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.model.Assignment.Task;
import com.rojlearnn.rojlearnn.service.Assignment.TaskService;

@RestController
@RequestMapping(path = "/task")
public class TaskController {
	
	@Autowired
	private TaskService ts;
	
	@GetMapping("/getAllTask")
	public ResponseEntity<?> getAllTask(){
		return ts.getAllTask();
	}

	@GetMapping("/getTask/{id}")
	public ResponseEntity<?> getTaskById(@PathVariable String id){
		return ts.getTaskById(id);
	}

	@GetMapping("/getTaskByCourse/{id}")
	public ResponseEntity<?> getTaskByCourse(@PathVariable String id){
		return ts.getTaskByCourse(id);
	}
	
	@PostMapping("/create")
	public ResponseEntity<?> createTask(@RequestBody Task task){
		return ts.createTask(task);
	}


}
