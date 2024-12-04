package com.rojlearnn.rojlearnn.model.Addon;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "tacking")
public class Tacking {

    private ObjectId _id;
    private ObjectId contentid;
    private ObjectId userid;
    private String cuid;  
    private String type;
    private Double progress_percentage;
    private String status;
    private LocalDateTime last_updated = LocalDateTime.now();

    public Tacking() {
    }

    public Tacking(String contentid, String userid, Double progress_percentage, String status) {
        this.contentid = new ObjectId(contentid) ;// contentid;
        this.userid =   new ObjectId(userid) ;//userid;
        this.progress_percentage = progress_percentage;
        this.status = status;
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
    public String getCuid() {
        return cuid;
    }

    public void setCuid(String cuid) {
        this.cuid = cuid;
    }

    public Double getProgress_percentage() {
        return progress_percentage;
    }

    public void setProgress_percentage(Double progress_percentage) {
        this.progress_percentage = progress_percentage;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    public String getType(){
        return type;
    }
    public void setType(String type){
        this.type=type;
    }
    public LocalDateTime getLast_updated() {
        return last_updated;
    }

    public void setLast_updated(LocalDateTime last_updated) {
        this.last_updated = last_updated;
    }

      
    

}
