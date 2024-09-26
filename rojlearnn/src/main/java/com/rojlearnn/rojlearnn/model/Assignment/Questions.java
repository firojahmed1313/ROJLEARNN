package com.rojlearnn.rojlearnn.model.Assignment;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.annotation.Collation;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "questions")
public class Questions {

    private ObjectId _id;
    private String question;// chack this
    private String questiontype;
    private String option1;
    private String option2;
    private String option3;
    private String option4;
    private String answer;
    private LocalDateTime created_at = LocalDateTime.now();
    public Questions() {}
    
    public Questions(String question, String questiontype, String option1, String option2, String option3,
            String option4, String answer) {
        this.question = question;
        this.questiontype = questiontype;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
        this.answer = answer;
    }

    public String get_id() {
        return _id.toString();
    }
    public void set_id(String _id) {
        this._id = new ObjectId(_id) ;// _id;
    }
    public String getQuestion() {
        return question;
    }
    public void setQuestion(String question) {
        this.question = question;
    }
    public String getQuestiontype() {
        return questiontype;
    }
    public void setQuestiontype(String questiontype) {
        this.questiontype = questiontype;
    }
    public String getOption1() {    
        return option1;
    }
    public void setOption1(String option1) {
        this.option1 = option1;
    }
    public String getOption2() {
        return option2;
    }
    public void setOption2(String option2) {
        this.option2 = option2;
    }
    public String getOption3() {
        return option3;
    }
    public void setOption3(String option3) {
        this.option3 = option3;
    }
    public String getOption4() {
        return option4;
    }
    public void setOption4(String option4) {
        this.option4 = option4;
    }
    public String getAnswer() {
        return answer;
    }
    public void setAnswer(String answer) {
        this.answer = answer;
    }
    public LocalDateTime getCreated_at() {
        return created_at;
    }
    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }
    

}
