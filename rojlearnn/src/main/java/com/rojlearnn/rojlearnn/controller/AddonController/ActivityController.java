package com.rojlearnn.rojlearnn.controller.AddonController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.model.Addon.Comments;
import com.rojlearnn.rojlearnn.model.Addon.Feedback;
import com.rojlearnn.rojlearnn.model.Addon.Like;
import com.rojlearnn.rojlearnn.model.Addon.Rateing;
import com.rojlearnn.rojlearnn.model.Addon.Tacking;
import com.rojlearnn.rojlearnn.service.AddonService.ActivityService;


@RestController()
@RequestMapping("/activity")
public class ActivityController {

    @Autowired
    ActivityService as;

    @PostMapping("/likeDetails")
    public ResponseEntity<?> likeDetails(@RequestBody List<Like> data) {
        return as.likeDetails(data);
    }

    @PostMapping("/commentsDetails")
    public ResponseEntity<?> commentsDetails(@RequestBody List<Comments> data) {
        return as.commentsDetails(data);
    }

    @PostMapping("/ratingDetails")
    public ResponseEntity<?> ratingDetails(@RequestBody List<Rateing> data) {
        return as.ratingDetails(data);
    }

    @PostMapping("/feedbackDetails")
    public ResponseEntity<?> feedbackDetails(@RequestBody List<Feedback> data) {
        return as.feedbackDetails(data);
    }

    @PostMapping("/trackingDetails")
    public ResponseEntity<?> trackingDetails(@RequestBody List<Tacking> data) {
        return as.trackingDetails(data);
    }

}
