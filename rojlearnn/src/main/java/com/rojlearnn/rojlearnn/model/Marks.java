package com.rojlearnn.rojlearnn.model;
import java.time.LocalDateTime;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotNull;

import org.bson.types.ObjectId;

@Document("marks")
public class Marks {

    private ObjectId _id;
    private ObjectId containid;
	private ObjectId userid;
    @NotNull
	private String cuid;
	private Double mark;
    @NotNull
    private String type;
	private LocalDateTime created_at = LocalDateTime.now();

    public Marks() {}

    public Marks(ObjectId containid, ObjectId userid, String cuid, Double mark, String type) {
        this.containid = containid;
        this.userid = userid;
        this.cuid = cuid;
        this.mark = mark;
        this.type = type;
    }

    public String getId() {
        return _id.toString();
    }

    public void setId(String _id) {
        this._id = new ObjectId(_id);
    }

    public String getContainid() {
        return containid.toString();
    }

    public void setContainid(String containid) {
        this.containid = new ObjectId(containid);
    }

    public String getUserid() {
        return userid.toString();
    }

    public void setUserid(String userid) {
        this.userid = new ObjectId(userid);
    }

    public String getCuid() {
        return cuid;    
    }    

    public void setCuid(String cuid) {
        this.cuid = cuid;   
    }

    public Double getMark() {
        return mark;
    }

    public void setMark(Double mark) {  
        this.mark = mark;
    } 

    public String getType() {
        return type;
    } 

    public void setType(String type) {
        this.type = type;
    } 

    public LocalDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }   

    @Override
    public String toString() {
        return "Marks [_id=" + _id + ", containid=" + containid + ", userid=" + userid + ", cuid=" + cuid + ", mark=" + mark + ", type=" + type + ", created_at=" + created_at + "]";
    }
}
