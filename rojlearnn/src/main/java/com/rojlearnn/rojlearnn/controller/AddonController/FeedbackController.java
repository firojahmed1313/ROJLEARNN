package com.rojlearnn.rojlearnn.controller.AddonController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.model.Addon.Feedback;
import com.rojlearnn.rojlearnn.service.AddonService.FeedbackService;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {
    @Autowired
    private FeedbackService fs;

    @GetMapping("/content/{contentid}")
    public ResponseEntity<?> getFeedbackByContent(@PathVariable String contentid) {
        System.out.println(contentid);
        return fs.getFeedbackByContent(contentid);
    }

    @GetMapping("/user/{userid}")
    public ResponseEntity<?> getFeedbackByUser(@PathVariable String userid) {
        return fs.getFeedbackByUser(userid);
    }

    @PostMapping("/givefeedback")
    public ResponseEntity<?> giveFeedback(@RequestBody Feedback feedback) {
        return fs.giveFeedback(feedback);
    }

    @GetMapping("/feedbacktype/{feedbacktype}")
    public ResponseEntity<?> getFeedbackByType(@PathVariable String feedbacktype) {
        return fs.getFeedbackByType(feedbacktype);
    }
}
