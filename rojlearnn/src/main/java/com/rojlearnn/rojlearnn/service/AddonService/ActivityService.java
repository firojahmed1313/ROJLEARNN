package com.rojlearnn.rojlearnn.service.AddonService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.Addon.Comments;
import com.rojlearnn.rojlearnn.model.Addon.Feedback;
import com.rojlearnn.rojlearnn.model.Addon.Like;
import com.rojlearnn.rojlearnn.model.Addon.Rateing;
import com.rojlearnn.rojlearnn.model.Addon.Tacking;
import com.rojlearnn.rojlearnn.repo.CourseRepo;
import com.rojlearnn.rojlearnn.repo.Assignment.AssignmentRepo;
import com.rojlearnn.rojlearnn.repo.Assignment.ExamRepo;
import com.rojlearnn.rojlearnn.repo.Assignment.TaskRepo;
@Service
public class ActivityService {
    @Autowired
    CourseRepo cr;
    @Autowired
    AssignmentRepo ar;
    @Autowired
    ExamRepo er;
    @Autowired
    TaskRepo tr;

    public ResponseEntity<?> likeDetails(List<Like> data) {
        //System.out.println("likeDetails : "+data);
        List<Map<String, Object>> ans = new ArrayList<>();

        for (Like like : data) {
            Map<String, Object> response = new HashMap<>();
            String contentid = like.getContentid();
            //System.out.println(contentid);
            String type = like.getType();
            if(type.equals("courses")) {
                response.put("contain", cr.findBy_id(new ObjectId(contentid)));
            } else if(type.equals("assignments")) {
                response.put("contain", ar.findBy_id(new ObjectId(contentid)));
            } else if(type.equals("exams")) {
                response.put("contain", er.findBy_id(new ObjectId(contentid)));
            } else if(type.equals("tasks")) {
                response.put("contain", tr.findBy_id(new ObjectId(contentid)));
            }
            
            response.put("data", like);
            ans.add(response);
        }

        // TODO Auto-generated method stub
        return new ResponseEntity<>(ans,HttpStatus.OK);
    }

    public ResponseEntity<?> commentsDetails(List<Comments> data) {
        //System.out.println("commentsDetails : "+data);
        List<Map<String, Object>> ans = new ArrayList<>();

        for (Comments comment : data) {
            Map<String, Object> response = new HashMap<>();
            String contentid = comment.getContentid();
            //System.out.println(contentid);
            String type = comment.getType();
            if(type.equals("courses")) {
                response.put("contain", cr.findBy_id(new ObjectId(contentid)));
            } else if(type.equals("assignments")) {
                response.put("contain", ar.findBy_id(new ObjectId(contentid)));
            } else if(type.equals("exams")) {
                response.put("contain", er.findBy_id(new ObjectId(contentid)));
            } else if(type.equals("tasks")) {
                response.put("contain", tr.findBy_id(new ObjectId(contentid)));
            }
            
            response.put("data", comment);
            ans.add(response);
        }

        // TODO Auto-generated method stub
        return new ResponseEntity<>(ans,HttpStatus.OK);
        
    }

    public ResponseEntity<?> ratingDetails(List<Rateing> data) {
        //System.out.println("ratingDetails : "+data);
        List<Map<String, Object>> ans = new ArrayList<>();

        for (Rateing rate : data) {
            Map<String, Object> response = new HashMap<>();
            String contentid = rate.getContentid();
            //System.out.println(contentid);
            String type = rate.getType();
            if(type.equals("courses")) {
                response.put("contain", cr.findBy_id(new ObjectId(contentid)));
            } else if(type.equals("assignments")) {
                response.put("contain", ar.findBy_id(new ObjectId(contentid)));
            } else if(type.equals("exams")) {
                response.put("contain", er.findBy_id(new ObjectId(contentid)));
            } else if(type.equals("tasks")) {
                response.put("contain", tr.findBy_id(new ObjectId(contentid)));
            }
            
            response.put("data", rate);
            ans.add(response);
        }

        // TODO Auto-generated method stub
        return new ResponseEntity<>(ans,HttpStatus.OK);
    
    }

    public ResponseEntity<?> feedbackDetails(List<Feedback> data) {
        //System.out.println("feedbackDetails : "+data);
        List<Map<String, Object>> ans = new ArrayList<>();

        for (Feedback feedback : data) {
            Map<String, Object> response = new HashMap<>();
            String contentid = feedback.getContentid();
           // System.out.println(contentid);
            String type = feedback.getType();
            if(type.equals("courses")) {
                response.put("contain", cr.findBy_id(new ObjectId(contentid)));
            } else if(type.equals("assignments")) {
                response.put("contain", ar.findBy_id(new ObjectId(contentid)));
            } else if(type.equals("exams")) {
                response.put("contain", er.findBy_id(new ObjectId(contentid)));
            } else if(type.equals("tasks")) {
                response.put("contain", tr.findBy_id(new ObjectId(contentid)));
            }
            
            response.put("data", feedback);
            ans.add(response);
        }

        // TODO Auto-generated method stub
        return new ResponseEntity<>(ans,HttpStatus.OK);
    }

    public ResponseEntity<?> trackingDetails(List<Tacking> data) {
        //System.out.println("trackingDetails : "+data);
        List<Map<String, Object>> ans = new ArrayList<>();

        for (Tacking tacking : data) {
            Map<String, Object> response = new HashMap<>();
            String contentid = tacking.getContentid();
            //System.out.println(contentid);
            String type = tacking.getType();
            if(type.equals("courses")) {
                response.put("contain", cr.findBy_id(new ObjectId(contentid)));
            } else if(type.equals("assignments")) {
                response.put("contain", ar.findBy_id(new ObjectId(contentid)));
            } else if(type.equals("exams")) {
                response.put("contain", er.findBy_id(new ObjectId(contentid)));
            } else if(type.equals("tasks")) {
                response.put("contain", tr.findBy_id(new ObjectId(contentid)));
            }
            
            response.put("data", tacking);
            ans.add(response);
        }

        // TODO Auto-generated method stub
        return new ResponseEntity<>(ans,HttpStatus.OK);
        
    }

}
