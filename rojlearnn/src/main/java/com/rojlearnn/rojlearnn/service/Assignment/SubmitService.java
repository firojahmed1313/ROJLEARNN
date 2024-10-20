package com.rojlearnn.rojlearnn.service.Assignment;

import java.util.List;
import org.bson.types.ObjectId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.Marks;
import com.rojlearnn.rojlearnn.model.User;
import com.rojlearnn.rojlearnn.model.Assignment.Questions;
import com.rojlearnn.rojlearnn.model.Assignment.Submit.Submitass;
import com.rojlearnn.rojlearnn.model.Assignment.Submit.Submitexam;
import com.rojlearnn.rojlearnn.model.Assignment.Submit.Submittask;
import com.rojlearnn.rojlearnn.repo.Assignment.AssSubmitRepo;
import com.rojlearnn.rojlearnn.repo.Assignment.AssignmentRepo;
import com.rojlearnn.rojlearnn.repo.Assignment.MarksRepo;
import com.rojlearnn.rojlearnn.repo.Assignment.QuestionsRepo;
import com.rojlearnn.rojlearnn.repo.Assignment.TaskSubmitRepo;
import com.rojlearnn.rojlearnn.service.UserService;

@Service
public class SubmitService {
    @Autowired
    MarksRepo mr;
    @Autowired
    TaskSubmitRepo tsr;
    @Autowired
    AssSubmitRepo asr;
    @Autowired
    QuestionsRepo qr;
    @Autowired
    UserService us;

    public ResponseEntity<?> submitExam(String examId, List<Submitexam> exams) {
        User user = us.getCurrentUserProfile();
        double marks = 0;
        for (Submitexam exam : exams) {
            Questions ex = qr.findById(exam.get_id()).orElse(null);
            if (ex == null) {
                return new ResponseEntity<>("Question Not Found", null, HttpStatus.OK);
            } else {
                if (ex.getAnswer().equals(exam.getAns())) {
                    marks += 4;
                } else {
                    marks -= 1;
                }

            }

        }
        Marks m = new Marks();
        m.setMark(marks);
        String userid = user.get_id();
        String cuid = examId + "_" + userid;
        m.setCuid(cuid);
        m.setContainid(examId);
        m.setUserid(userid);
        mr.save(m);
        return new ResponseEntity<>("Exam Submitted", null, HttpStatus.OK);

    }

    public ResponseEntity<String> submitTask(String taskId, Submittask task) {
        Submittask st = tsr.findById(taskId).orElse(null);
        if (!(st == null)) {
            return new ResponseEntity<>("Task Already Submitted", null, HttpStatus.FOUND);
        } else {
            tsr.save(task);
            return new ResponseEntity<>("Task Submitted", null, HttpStatus.OK);
        }
        //return null;

    }

    public ResponseEntity<?> getMarksByTeacher(String containid, Marks marks) {
        Marks m = mr.findByCuid(marks.getCuid());
        if (!(m == null)) {
            return new ResponseEntity<>("Marks Already Submitted", null, HttpStatus.FOUND);
        } else {
            mr.save(marks);
            return new ResponseEntity<>("Marks Submitted", null, HttpStatus.CREATED);
        }

    }

    public ResponseEntity<?> submitAssignment(String assignmentId, Submitass assignment) {
        Submitass st = asr.findById(assignmentId).orElse(null);
        if (!(st == null)) {
            return new ResponseEntity<>("Task Already Submitted", null, HttpStatus.FOUND);
        } else {
            asr.save(assignment);
            return new ResponseEntity<>("Task Submitted", null, HttpStatus.OK);
        }
    }

    public ResponseEntity<?> getTaskSubmitByUser(String userId) {
        List<Submittask> st = tsr.findByUserid(new ObjectId(userId) );
        if (!(st == null)) {
            return new ResponseEntity<>(st, null, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Task Not Found", null, HttpStatus.OK);
        }
    }

    public ResponseEntity<?> getAssSubmitByUser(String userId) {
        List<Submitass> st = asr.findByUserid(new ObjectId(userId));
        if (!(st == null)) {
            return new ResponseEntity<>(st, null, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Assignment Not Found", null, HttpStatus.OK);
        }
    }

    public ResponseEntity<?> getTaskSubmitByTaskId(String taskId) {
        List<Submittask> st = tsr.findByTaskid(new ObjectId(taskId));
        if (!(st == null)) {
            return new ResponseEntity<>(st, null, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Task Not Found", null, HttpStatus.OK);
        }
    }

    public ResponseEntity<?> getAssSubmitByAssId(String assignmentId) {
        List<Submitass> st = asr.findByAssignmentid(new ObjectId(assignmentId));
        if (!(st == null)) {
            return new ResponseEntity<>(st, null, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Assignment Not Found", null, HttpStatus.OK);
        }
        
    }
}
