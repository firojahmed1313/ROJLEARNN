package com.rojlearnn.rojlearnn.model.Assignment.Submit;

import org.bson.types.ObjectId;

public class Submitexam {
    private ObjectId _id;
    private String ans;

    public Submitexam(){}
    public Submitexam(ObjectId id, String ans) {
        this._id = id;
        this.ans = ans;
    }
    public String get_id(){
        return _id.toHexString();
    }
    public void set_id(String id){
        this._id = new ObjectId(id);
    }
    public String getAns(){
        return ans;
    }
    public void setAns(String ans){
        this.ans = ans;
    }
}
