package com.rojlearnn.rojlearnn.model;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "enroll")
public class Enrole {
    private ObjectId _id;
    private ObjectId courseid;
    private ObjectId studentid;
    private String enrollmentstatus;
    private LocalDateTime enrollment_date = LocalDateTime.now();
    private LocalDateTime completed_at = null;

    public Enrole() {
    }

    public Enrole(ObjectId courseid, ObjectId studentid, String enrollmentstatus) {
        this.courseid = courseid;
        this.studentid = studentid;
        this.enrollmentstatus = enrollmentstatus;
    }

    public String get_id() {
        return _id.toString();
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public String getCourseid() {
        return courseid.toString();
    }

    public void setCourseid(String courseid) {
        this.courseid = new ObjectId(courseid);
    }

    public String getStudentid() {
        return studentid.toString();
    }

    public void setStudentid(String studentid) {
        this.studentid = new ObjectId(studentid) ;
    }

    public String getEnrollmentstatus() {
        return enrollmentstatus;
    }

    public void setEnrollmentstatus(String enrollmentstatus) {
        this.enrollmentstatus = enrollmentstatus;
    }

    public LocalDateTime getEnrollment_date() {
        return enrollment_date;
    }

    public void setEnrollment_date(LocalDateTime enrollment_date) {
        this.enrollment_date = enrollment_date;
    }

    public LocalDateTime getCompleted_at() {
        return completed_at;
    }

    public void setCompleted_at(LocalDateTime completed_at) {
        this.completed_at = completed_at;
    }

    @Override
    public String toString() {
        return "Enrole [_id=" + _id + ", courseid=" + courseid + ", studentid=" + studentid + ", enrollmentstatus="
                + enrollmentstatus + ", enrollment_date=" + enrollment_date + ", completed_at=" + completed_at + "]";
    }

    // public void setCompleted_at(LocalDateTime completed_at) {
    //     this.completed_at = completed_at;
    // }
    
}
