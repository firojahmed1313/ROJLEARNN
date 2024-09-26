package com.rojlearnn.rojlearnn.model;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "notifications")
public class Notifications {
	private ObjectId _id;
	private ObjectId userid;
	private String message;
	private String type;
	private Boolean status;
	private LocalDateTime read_at ;
	private LocalDateTime created_at = LocalDateTime.now();
	public Notifications() {}
	public Notifications(ObjectId userid, String message, String type, Boolean status, LocalDateTime read_at) {
		this.userid = userid;
		this.message = message;
		this.type = type;
		this.status = status;
		this.read_at = read_at;
	}
	public String get_id() {
		return _id.toString();
	}
	public void set_id(String _id) {
		this._id = new ObjectId(_id) ;// _id;
	}
	public String getUserid() {
		return userid.toString();
	}
	public void setUserid(String userid) {
		this.userid = new ObjectId(userid) ;// userid;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Boolean getStatus() {
		return status;
	}
	public void setStatus(Boolean status) {
		this.status = status;
	}
	public LocalDateTime getRead_at() {
		return read_at;
	}
	public void setRead_at(LocalDateTime read_at) {
		this.read_at = read_at;
	}
	public LocalDateTime getCreated_at() {
		return created_at;
	}
	public void setCreated_at(LocalDateTime created_at) {
		this.created_at = created_at;
	}
}
