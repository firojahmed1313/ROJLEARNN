package com.rojlearnn.rojlearnn.model;

import java.time.LocalDateTime;
import java.util.Date;

public class Email {
    private String from;
    private String to;
    private String subject;
    private String message;
    private Date date = Date.from(LocalDateTime.now().atZone(java.time.ZoneId.systemDefault()).toInstant());

    public Email() {}

    public Email(String from, String to, String subject, String message) {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.message = message;
    }

    public String getFrom() {
        return from;
    }    

    public String getTo() {
        return to;
    }

    public String getSubject() {
        return subject;
    }

    public String getMessage() {
        return message;
    }

    public Date getDate() {
        return date;
    }

}
