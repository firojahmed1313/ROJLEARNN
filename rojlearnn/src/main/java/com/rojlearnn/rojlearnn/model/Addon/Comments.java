package com.rojlearnn.rojlearnn.model.Addon;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "comments")
public class Comments {

    private ObjectId _id;
    private ObjectId contentid;
    private ObjectId userid;
    private String comment_text;
    private String type;
    private LocalDateTime created_at = LocalDateTime.now();

    public Comments() {
    }

    public Comments(String contentid, String userid, String comment_text) {
        this.contentid = new ObjectId(contentid) ;// contentid;
        this.userid =   new ObjectId(userid) ;//userid;
        this.comment_text = comment_text;
    }

    public String get_id() {
        return _id.toString();
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public String getContentid() {
        return contentid.toString();
    }

    public void setContentid(String contentid) {
        this.contentid = new ObjectId(contentid) ;// contentid;
    }

    public String getUserid() {
        return userid.toString();
    }

    public void setUserid(String userid) {
        this.userid = new ObjectId(userid) ;// userid;
    }

    public String getComment_text() {
        return comment_text;
    }

    public void setComment_text(String comment_text) {
        this.comment_text = comment_text;
    }
    public String getType(){
        return type;
    }
    public void setType(String type){
        this.type=type;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }

    @Override
    public String toString() {
        return "Comments [_id=" + _id + ", contentid=" + contentid + ", userid=" + userid + ", comment_text="
                + comment_text + ", created_at=" + created_at + "]";
    }
    
}
