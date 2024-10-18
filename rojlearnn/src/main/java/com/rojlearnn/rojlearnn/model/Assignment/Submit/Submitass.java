package com.rojlearnn.rojlearnn.model.Assignment.Submit;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "submitass")
public class Submitass {
    private ObjectId _id;
    private ObjectId assignmentid;
    private ObjectId userid;
    private String auid;
    private String github_url;
    private String deploy_url=null;
    private LocalDateTime created_at = LocalDateTime.now();


    public Submitass() {
    }
    public String get_id() {
        return _id.toString();
    }
    public void set_id(String _id) {
        this._id = new ObjectId(_id);
    }
    public String getAssignmentid() {
        return assignmentid.toString();
    }

    public void setAssignmentid(String assignmentid) {
        this.assignmentid = new ObjectId(assignmentid);
    }
    public String getUserid() {
        return userid.toString();
    }

    public void setUserid(String userid) {
        this.userid = new ObjectId(userid);
    }

    public String getAuid() {
        return auid;
    }

    public void setAuid(String auid) {
        this.auid = auid;
    }
    public String getGithub_url() {
        return github_url;
    }
    public void setGithub_url(String github_url) {
        this.github_url = github_url;
    }
    public String getDeploy_url() {
        return deploy_url;
    }
    public void setDeploy_url(String deploy_url) {
        this.deploy_url = deploy_url;
    }   

    public LocalDateTime getCreated_at() {
        return created_at;
    }
    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }

    
}
