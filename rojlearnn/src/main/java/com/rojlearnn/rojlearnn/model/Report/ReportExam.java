package com.rojlearnn.rojlearnn.model.Report;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "reportexam")
public class ReportExam {

	private ObjectId _id;
	private ObjectId examid;
	private ObjectId userid;
	private String euid;
	private Double marks;
	private LocalDateTime created_at = LocalDateTime.now();
	public ReportExam() {}

	public ReportExam(ObjectId examid, ObjectId userid, String euid, Double marks) {
		this.examid = examid;
		this.userid = userid;
		this.euid = euid;
		this.marks = marks;
	}

	public String get_id() {
		return _id.toString();
	}

	public void set_id(String _id) {
		this._id = new ObjectId(_id) ;// _id;
	}

	public String getExamid() {
		return examid.toString();
	}
	
	public void setExamid(String examid) {
		this.examid = new ObjectId(examid) ;// examid;
	}
	
	public String getUserid() {
		return userid.toString();
	}
	
	public void setUserid(String userid) {
		this.userid = new ObjectId(userid) ;// userid;
	}
	
	public String getEuid() {
		return euid;
	}
	
	public void setEuid(String euid) {
		this.euid = euid;
	}
	
	public Double getMarks() {
		return marks;
	}
	
	public void setMarks(Double marks) {
		this.marks = marks;
	}
	
	public LocalDateTime getCreated_at() {
		return created_at;
	}
	
	public void setCreated_at(LocalDateTime created_at) {
		this.created_at = created_at;
	}
	
	

}
