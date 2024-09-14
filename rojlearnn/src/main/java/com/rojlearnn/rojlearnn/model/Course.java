package com.rojlearnn.rojlearnn.model;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Document(collection = "courses")
public class Course {
    private ObjectId _id;
    private String title;
    private String description;
    private ObjectId instructor;
    private String category;
    private String thumbnail_url;
    private double duration_hours;
    private double price;
    private boolean is_published;
    private LocalDateTime created_at = LocalDateTime.now();

    public Course() {
    }

    public Course(String title, String description, ObjectId instructor_id, String category, String thumbnail_url,
            double duration_hours, double price, boolean is_published) {
        this.title = title;
        this.description = description;
        this.instructor = instructor_id;
        this.category = category;
        this.thumbnail_url = thumbnail_url;
        this.duration_hours = duration_hours;
        this.price = price;
        this.is_published = is_published;
    }

    public String get_id() {
        return _id.toString();
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getInstructor() {
        return instructor.toString();
    }

    public void setInstructor(String instructor_id) {
        this.instructor = new ObjectId(instructor_id);
    }


    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getThumbnail_url() {
        return thumbnail_url;
    }

    public void setThumbnail_url(String thumbnail_url) {
        this.thumbnail_url = thumbnail_url;
    }

    public double getDuration_hours() {
        return duration_hours;
    }

    public void setDuration_hours(double duration_hours) {
        this.duration_hours = duration_hours;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public boolean isIs_published() {
        return is_published;
    }

    public void setIs_published(boolean is_published) {
        this.is_published = is_published;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }



}
