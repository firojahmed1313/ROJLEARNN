package com.rojlearnn.rojlearnn.model;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "video")
public class Video {
    private ObjectId _id;
    private ObjectId courseid;
    private String name;
    private String descriptions;
    private String url;
    private String duration;
    private LocalDateTime created_at = LocalDateTime.now();
    public Video() {}
    public Video(ObjectId courseid, String name, String description, String url, String duration) {
        this.courseid = courseid;
        this.name = name;
        this.descriptions = description;
        this.url = url;
        this.duration = duration;
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
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescriptions() {
        return descriptions;
    }
    public void setDescriptions(String description) {
        this.descriptions = description;
    }
    public String getUrl() {
        return url;
    }
    public void setUrl(String url) {
        this.url = url;
    }
    public String getDuration() {
        return duration;
    }
    public void setDuration(String duration) {
        this.duration = duration;
    }
    public LocalDateTime getCreated_at() {
        return created_at;
    }
    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }
    
    
}
