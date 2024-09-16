package com.rojlearnn.rojlearnn.controller.AddonController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.service.AddonService.LikeService;

@RestController
@RequestMapping("/lrcf")
public class LikeController {
    @Autowired
    LikeService ls;
    
    @PostMapping("/like/{contentId}")
    public ResponseEntity<?> addLikeToContent(@PathVariable String contentId) {

        return ls.addLikeToContent(contentId);
    }
    @GetMapping("content/alllike/{contentId}")
    public ResponseEntity<?> getAllLike(@PathVariable String contentId) {
        return ls.getAllLike(contentId);
    }
    @GetMapping("user/alllike/{userId}")
    public ResponseEntity<?> getAllLikeByUser(@PathVariable String userId) {
        return ls.getAllLikeByUser(userId);
    }

    @PostMapping("/dislike/{contentId}")
    public ResponseEntity<?> dislikeToContent(@PathVariable String contentId) {
        return ls.addDislikeToContent(contentId);
    }

    @GetMapping("content/allDislike/{contentId}")
    public ResponseEntity<?> getAllDislike(@PathVariable String contentId) {
        return ls.getAllDislike(contentId);
    }

    @GetMapping("user/allDislike/{userId}")
    public ResponseEntity<?> getAllDislikeByUser(@PathVariable String userId) {
        return ls.getAllDislikeByUser(userId);
    }
}
