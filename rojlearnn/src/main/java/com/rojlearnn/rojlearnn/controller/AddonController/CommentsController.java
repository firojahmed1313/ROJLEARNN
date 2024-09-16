package com.rojlearnn.rojlearnn.controller.AddonController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.model.Addon.Comments;
import com.rojlearnn.rojlearnn.service.AddonService.CommentsService;

@RestController
@RequestMapping("/comments")
public class CommentsController {
    @Autowired
    private CommentsService Cs;

    @GetMapping("/content/{contentid}")
    public ResponseEntity<?> getCommentsByContent(@PathVariable String contentid) {
        return Cs.getCommentsByContent(contentid);
    }

    @GetMapping("/user/{userid}")
    public ResponseEntity<?> getCommentsByUser(@PathVariable String userid) {
        return Cs.getCommentsByUser(userid);
    }

    @PostMapping("/givecomment")
    public ResponseEntity<?> giveComment(@RequestBody Comments comments) {
        return Cs.giveComment(comments);
    }

}
