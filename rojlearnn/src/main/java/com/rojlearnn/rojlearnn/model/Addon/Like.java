package com.rojlearnn.rojlearnn.model.Addon;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Document(collection = "like")
public class Like {
    private ObjectId _id;
    private String cuid;
    private ObjectId contentid;
    private ObjectId userid;
    private String liketype;
    private LocalDateTime created_at = LocalDateTime.now();

    public Like() {
    }

    public String get_id() {
        return _id.toString();
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public String getCuid() {
        return cuid;
    }

    public void setCuid(String cuid) {
        this.cuid = cuid;
    }

    public String getLiketype() {
        return liketype;
    }

    public void setLiketype(String liketype) {
        this.liketype = liketype;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }

    @Override
    public String toString() {
        return "Like [_id=" + _id + ", cuid=" + cuid + ", liketype=" + liketype + ", created_at=" + created_at + "]";
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }

    public String getContentid() {
        return contentid.toString();
    }

    public void setContentid(String contentid) {
        this.contentid = new ObjectId (contentid) ;// contentid;
    }

    public String getUserid() {
        return userid.toString();
    }

    public void setUserid(String userid) {
        this.userid = new ObjectId (userid) ;//userid;
    }

    public Like(String cuid, ObjectId contentid, ObjectId userid, String liketype) {
        this.cuid = cuid;
        this.contentid = contentid;
        this.userid = userid;
        this.liketype = liketype;
    }

    
    

}
