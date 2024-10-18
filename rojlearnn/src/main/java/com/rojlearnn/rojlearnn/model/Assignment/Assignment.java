package com.rojlearnn.rojlearnn.model.Assignment;

import java.time.LocalDateTime;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "assignment")
public class Assignment {
    private ObjectId _id;
    private ObjectId courseid;
    private String title;
    private String descriptions;
    private int totalmarks;
    private int totalduration;
    private String codequestions;
    private LocalDateTime created_at = LocalDateTime.now();

    public Assignment() {}

    public Assignment(ObjectId courseid, String title, String descriptions, int totalmarks, int totalduration,
            String codequestions) {
        this.courseid = courseid;
        this.title = title;
        this.descriptions = descriptions;
        this.totalmarks = totalmarks;
        this.totalduration = totalduration;
        this.codequestions = codequestions;
    }   

    public String get_id() {
        return _id.toString();
    }

    public void set_id(String _id) {
        this._id = new ObjectId(_id);
    }   

    public String getCourseid() {
        return courseid.toString();
    }

    public void setCourseid(String courseid) {
        this.courseid = new ObjectId(courseid);
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

    public String getCodequestions() {
        return codequestions;
    }

    public void setCodequestions(String codequestions) {
        this.codequestions = codequestions;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }

    


}
