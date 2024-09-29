package com.rojlearnn.rojlearnn.model.Assignment.Submit;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

public class Submittask {
    private ObjectId _id;
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

    public Submittask(){}
    public Submittask(ObjectId id,String answer){
        this._id = id;
        this.answer = answer;
    }

}
