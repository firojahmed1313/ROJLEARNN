package com.rojlearnn.rojlearnn.service.Assignment;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.Assignment.Task;
import com.rojlearnn.rojlearnn.repo.Assignment.TaskRepo;

@Service
public class TaskService {
	@Autowired
	private TaskRepo tr;

	public ResponseEntity<?> getAllTask() {
		List<Task> task= tr.findAll();
		return new ResponseEntity<>(task, HttpStatus.OK);
	}

	public ResponseEntity<?> getTaskById(String id) {
		Task task= tr.findById(id).get();
		return new ResponseEntity<>(task, HttpStatus.OK);
	}

	public ResponseEntity<?> getTaskByCourse(String id) {
		List<Task> task= tr.findByCourseid(new ObjectId(id));
		return new ResponseEntity<>(task, HttpStatus.OK);
	}

	public ResponseEntity<?> createTask(Task task) {
		Task ex= tr.save(task);
		return new ResponseEntity<>(ex, HttpStatus.CREATED);
	}

}
