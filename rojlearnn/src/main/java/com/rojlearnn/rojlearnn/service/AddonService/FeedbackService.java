package com.rojlearnn.rojlearnn.service.AddonService;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.User;
import com.rojlearnn.rojlearnn.model.Addon.Feedback;
import com.rojlearnn.rojlearnn.repo.AddonRepo.FeedbackRepo;
import com.rojlearnn.rojlearnn.service.UserService;

@Service
public class FeedbackService {
    @Autowired
    private FeedbackRepo fr;
    @Autowired
    private UserService us;
    public ResponseEntity<?> getFeedbackByContent(String contentid) {
        System.out.println(contentid);
        List<Feedback> feedback = fr.findAllByContentid(new ObjectId(contentid));
        return new ResponseEntity<>(feedback, HttpStatus.OK);
    }

    public ResponseEntity<?> getFeedbackByUser(String userid) {
        
        User user = us.getCurrentUserProfile();
        if(!(userid.equals(user.get_id().toString()))) {
            return new ResponseEntity<>("ID MISMATCH",HttpStatus.FORBIDDEN);
        }
        List<Feedback> feedback = fr.findAllByUserid(new ObjectId(userid));
        return new ResponseEntity<>(feedback, HttpStatus.OK);
    }
    public ResponseEntity<?> giveFeedback(Feedback feedback) {
        User user = us.getCurrentUserProfile();
        if( !(feedback.getUserid().equals(user.get_id()))) {
            return new ResponseEntity<>("ID MISMATCH",HttpStatus.FORBIDDEN);
        }
        Feedback f = fr.save(feedback);
        return new ResponseEntity<>(f, HttpStatus.CREATED);
    }

    public ResponseEntity<?> getFeedbackByType(String feedbacktype) {
        System.out.println(feedbacktype);
        List<Feedback> feedback = fr.findAllByFeedbacktype(feedbacktype);
        return new ResponseEntity<>(feedback, HttpStatus.OK);
    }
}
