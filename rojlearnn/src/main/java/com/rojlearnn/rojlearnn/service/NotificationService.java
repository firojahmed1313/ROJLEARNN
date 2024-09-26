package com.rojlearnn.rojlearnn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.Notifications;
import com.rojlearnn.rojlearnn.repo.NotificationsRepo;

@Service
public class NotificationService {
	@Autowired
	NotificationsRepo nr;

	public ResponseEntity<?> getNotificationById(String userid) {
		List<Notifications> not= nr.findByUserid(userid);
		return new ResponseEntity<>(not, HttpStatus.OK);
	}

	public ResponseEntity<?> getAllNotification() {
		List<Notifications> not= nr.findAll();
		return new ResponseEntity<>(not, HttpStatus.OK);
	}

	public ResponseEntity<?> createNotification(Notifications notification) {
		Notifications not= nr.save(notification);
		return new ResponseEntity<>(not, HttpStatus.CREATED);
		
	}

	public ResponseEntity<?> updateStatus(String id) {
		Notifications not= nr.findById(id).get();
		not.setStatus(true);
		nr.save(not);
		return new ResponseEntity<>(not, HttpStatus.OK);
	}

	public ResponseEntity<?> deleteNotification(String id) {
		nr.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
