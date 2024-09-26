package com.rojlearnn.rojlearnn.model.Assignment;

import java.time.LocalDateTime;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "exam")
public class Exam {

    private ObjectId _id;
    private ObjectId courseid;
    private String questiontype; //chack this
    private String title;
    private String descriptions;
    private int totalmarks;
    private int totalduration;
    private int totalquestions;
    private List<ObjectId> questions;
    private LocalDateTime created_at = LocalDateTime.now();
    public Exam() {}
    public Exam(ObjectId courseid, String title, String descriptions, int totalmarks, int totalduration,
            int totalquestions, List<ObjectId> questions) {
        this.courseid = courseid;
        this.title = title;
        this.descriptions = descriptions;
        this.totalmarks = totalmarks;
        this.totalduration = totalduration;
        this.totalquestions = totalquestions;
        this.questions = questions;
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
    
    public void setCourseid(ObjectId courseid) {
        this.courseid = courseid;
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
    public List<ObjectId> getQuestions() {
        return questions;
    }
    public void setQuestions(List<ObjectId> questions) {
        this.questions = questions;
    }
    public LocalDateTime getCreated_at() {
        return created_at;
    }
    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }
	public String getQuestiontype() {
		return questiontype;
	}
	public void setQuestiontype(String questiontype) {
		this.questiontype = questiontype;
	}
    

}
