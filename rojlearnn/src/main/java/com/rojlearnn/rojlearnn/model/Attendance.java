package com.rojlearnn.rojlearnn.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "attendance")
public class Attendance {
    @Id
    private ObjectId id;
    private ObjectId student;
    private ObjectId course;
    private LocalDate date;
    private LocalDateTime created_at = LocalDateTime.now();

    public Attendance() {}

    public Attendance(ObjectId student_id, ObjectId course_id, LocalDate date) {
        this.student = student_id;
        this.course = course_id;
        this.date = date;
    }

    public String getId() {
        return id.toString();
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getStudent() {
        return student.toString();
    }

    public void setStudent(ObjectId student_id) {
        this.student = student_id;
    }

    public String getCourse() {
        return course.toString();
    }

    public void setCourse(ObjectId course_id) {
        this.course = course_id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = LocalDate.parse(date);
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }   

}
