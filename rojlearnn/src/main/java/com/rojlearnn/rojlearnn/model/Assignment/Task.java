package com.rojlearnn.rojlearnn.model.Assignment;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;

public class Task {

    private ObjectId _id;
    private ObjectId courseid;
    private String title;
    private String descriptions;
    private int totalmarks;
    private int totalduration;
    private int totalquestions;
    private String taskquestions;
    private LocalDateTime created_at = LocalDateTime.now();

    public Task() {}

    public Task(ObjectId courseid, String title, String descriptions, int totalmarks, int totalduration,
            int totalquestions, String taskquestions) {
        this.courseid = courseid;
        this.title = title;
        this.descriptions = descriptions;
        this.totalmarks = totalmarks;
        this.totalduration = totalduration;
        this.totalquestions = totalquestions;
        this.taskquestions = taskquestions;
    }

    public String get_id() {
        return _id.toString();
    }

    public void set_id(String _id) {
        this._id = new ObjectId(_id) ;// _id;
    }

    public String getCourseid() {
        return courseid.toString();
    }

    public void setCourseid(String courseid) {
        this.courseid = new ObjectId(courseid) ;// courseid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(String descriptions) {
        this.descriptions = descriptions;
    }

    public int getTotalmarks() {
        return totalmarks;
    }

    public void setTotalmarks(int totalmarks) {
        this.totalmarks = totalmarks;
    }

    public int getTotalduration() {
        return totalduration;
    }

    public void setTotalduration(int totalduration) {
        this.totalduration = totalduration;
    }

    public int getTotalquestions() {
        return totalquestions;
    }

    public void setTotalquestions(int totalquestions) {
        this.totalquestions = totalquestions;
    }

    public String getTaskquestions() {
        return taskquestions;
    }

    public void setTaskquestions(String taskquestions) {
        this.taskquestions = taskquestions;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }

    @Override
    public String toString() {
        return "Task [_id=" + _id + ", courseid=" + courseid + ", title=" + title + ", descriptions=" + descriptions
                + ", totalmarks=" + totalmarks + ", totalduration=" + totalduration + ", totalquestions="
                + totalquestions + ", taskquestions=" + taskquestions + ", created_at=" + created_at + "]";
    }
    
}
