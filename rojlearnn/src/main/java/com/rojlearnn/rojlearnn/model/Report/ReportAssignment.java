package com.rojlearnn.rojlearnn.model.Report;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;

public class ReportAssignment {
    private ObjectId _id;
	private ObjectId assignmentid;
	private ObjectId userid;
	private String auid;
	private Double marks;
	private LocalDateTime created_at = LocalDateTime.now();

    public ReportAssignment() {}

    public ReportAssignment(ObjectId assignmentid, ObjectId userid, String auid, Double marks) {
        this.assignmentid = assignmentid;
        this.userid = userid;
        this.auid = auid;
        this.marks = marks;
    }
    public String get_id() {
		return _id.toString();
	}

	public void set_id(String _id) {
		this._id = new ObjectId(_id) ;// _id;
	}

    public String getAssignmentid() {
        return assignmentid.toString();
    }

    public void setAssignmentid(String assignmentid) {
        this.assignmentid = new ObjectId(assignmentid) ;// assignmentid;
    }

    public String getUserid() {
        return userid.toString();
    }

    public void setUserid(String userid) {
        this.userid = new ObjectId(userid) ;// userid;
    }

    public String getAuid() {
        return auid;
    }

    public void setAuid(String auid) {
        this.auid = auid;
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
