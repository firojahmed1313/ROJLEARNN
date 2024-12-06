package com.rojlearnn.rojlearnn.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.Email;
@Service
public class EmailService {
    @Autowired
    JavaMailSender javaMailSender;
    public ResponseEntity<?> sendEmail(Email email) {
        System.out.println(email);
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(email.getFrom());
        message.setTo(email.getFrom());
        message.setSubject(email.getSubject());
        message.setText(email.getMessage());
        message.setSentDate(email.getDate());
        System.out.println(message);
        javaMailSender.send(message);
        System.out.println("sent");
        return new ResponseEntity<>(message, null, 200);
    }

}
