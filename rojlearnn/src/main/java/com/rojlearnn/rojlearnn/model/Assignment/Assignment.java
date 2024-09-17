package com.rojlearnn.rojlearnn.model.Assignment;

import java.time.LocalDateTime;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "assignment")
public class Assignment {
    private ObjectId _id;
    private ObjectId courseid;
    private List<ObjectId> task;
    private List<ObjectId> exam;
    private LocalDateTime created_at = LocalDateTime.now();

    public Assignment() {}

    public Assignment(ObjectId courseid, List<ObjectId> task, List<ObjectId> exam) {
        this.courseid = courseid;
        this.task = task;
        this.exam = exam;
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
        this.courseid = new ObjectId(courseid) ;// courseid;
    }

    public List<ObjectId> getTask() {
        return task;
    }

    public void setTask(List<ObjectId> task) {
        this.task = task;
    }

    public List<ObjectId> getExam() {
        return exam;
    }

    public void setExam(List<ObjectId> exam) {
        this.exam = exam;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }

    



}
