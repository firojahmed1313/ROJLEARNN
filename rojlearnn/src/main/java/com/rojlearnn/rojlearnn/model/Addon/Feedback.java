package com.rojlearnn.rojlearnn.model.Addon;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "feedback")
public class Feedback {
    private ObjectId _id;
    private ObjectId contentid;
    private ObjectId userid;
    private String feedback_text;
    private String feedbacktype;
    private LocalDateTime created_at = LocalDateTime.now();

    public Feedback() {
    }

    public Feedback(String contentid, String userid, String feedback_text, String feedbacktype) {
        this.contentid = new ObjectId(contentid) ;// contentid;
        this.userid =   new ObjectId(userid) ;//userid;
        this.feedback_text = feedback_text;
        this.feedbacktype = feedbacktype;
    }

    public ObjectId get_id() {
        return _id;
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

    public String getFeedback_text() {
        return feedback_text;
    }

    public void setFeedback_text(String feedback_text) {
        this.feedback_text = feedback_text;
    }

    public String getFeedbacktype() {
        return feedbacktype;
    }

    public void setFeedbacktype(String feedbacktype) {
        this.feedbacktype = feedbacktype;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }

    @Override
    public String toString() {
        return "Feedback [_id=" + _id + ", contentid=" + contentid + ", userid=" + userid + ", feedback_text="
                + feedback_text + ", feedbacktype=" + feedbacktype + ", created_at=" + created_at + "]";
    }
    

}
