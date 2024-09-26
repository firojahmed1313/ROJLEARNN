package com.rojlearnn.rojlearnn.model.Report;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "reporttask")
public class ReportTask {
	private ObjectId _id;
	private ObjectId taskid;
	private ObjectId userid;
	private String tuid;
	private Double marks;
	private LocalDateTime created_at = LocalDateTime.now();
	public ReportTask() {}

	public ReportTask(ObjectId taskid, ObjectId userid, String tuid, Double marks) {
		this.taskid = taskid;
		this.userid = userid;
		this.tuid = tuid;
		this.marks = marks;
	}

	public String get_id() {
		return _id.toString();
	}

	public void set_id(String _id) {
		this._id = new ObjectId(_id) ;// _id;
	}

	public String getTaskid() {
		return taskid.toString();
	}
	
	public void setTaskid(String taskid) {
		this.taskid = new ObjectId(taskid) ;// taskid;
	}
	
	public String getUserid() {
		return userid.toString();
	}
	
	public void setUserid(String userid) {
		this.userid = new ObjectId(userid) ;// userid;
	}
	
	public String getTuid() {
		return tuid;
	}
	
	public void setTuid(String tuid) {
		this.tuid = tuid;
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
