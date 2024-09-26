package com.rojlearnn.rojlearnn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.model.Notifications;
import com.rojlearnn.rojlearnn.service.NotificationService;

@RestController
@RequestMapping(path = "/notification")
public class NotificationController {
	@Autowired
	private NotificationService ns;
	
	@GetMapping("/getAllNotification")
	public ResponseEntity<?> getAllNotification(){
		return ns.getAllNotification();
	}
	
	@GetMapping("/getNotification/{userid}")
	public ResponseEntity<?> getNotificationById(@PathVariable String userid){
		return ns.getNotificationById(userid);
	}
	
	@PostMapping("/create")
	public ResponseEntity<?> createNotification(@RequestBody Notifications notification){
		return ns.createNotification(notification);
	}
	
	@PutMapping("/updateStatus/{id}")
	public ResponseEntity<?> updateStatus(@PathVariable String id){
		return ns.updateStatus(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteNotification(@PathVariable String id){
		return ns.deleteNotification(id);
	}
}
