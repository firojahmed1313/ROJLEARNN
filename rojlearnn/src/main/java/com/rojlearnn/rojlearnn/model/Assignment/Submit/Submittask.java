package com.rojlearnn.rojlearnn.model.Assignment.Submit;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "submittask")
public class Submittask {
    private ObjectId _id;
    private ObjectId taskid;
    private ObjectId userid;
    private String tuid;
    private String answer;

    // Getters and Setters
    public String getAnswer() {
        return answer;
    }
    public void setAnswer(String answer) {
        this.answer = answer;
    }
    public String get_id() {
        return _id.toString();
    }
    public void set_id(String _id) {
        this._id = new ObjectId(_id);
    }

    public String getTaskid() {
        return taskid.toString();
    }

    public void setTaskid(String taskid) {
        this.taskid = new ObjectId(taskid);
    }

    public String getUserid() {
        return userid.toString();
    }

    public void setUserid(String userid) {
        this.userid = new ObjectId(userid);
    }

    public String getTuid() {
        return tuid;
    }

    public void setTuid(String tuid) {
        this.tuid = tuid;
    }

    public Submittask(){}

    public Submittask(ObjectId _id, ObjectId taskid, ObjectId userid, String tuid, String answer) {
        this._id = _id;
        this.taskid = taskid;
        this.userid = userid;
        this.tuid = tuid;
        this.answer = answer;
    }

}
