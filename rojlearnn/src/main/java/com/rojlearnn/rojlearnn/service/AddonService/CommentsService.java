package com.rojlearnn.rojlearnn.service.AddonService;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.User;
import com.rojlearnn.rojlearnn.model.Addon.Comments;
import com.rojlearnn.rojlearnn.repo.AddonRepo.CommentsRepo;
import com.rojlearnn.rojlearnn.service.UserService;

@Service
public class CommentsService {
    @Autowired
    private CommentsRepo cr;

    @Autowired
    private UserService us;

    public ResponseEntity<?> getCommentsByContent(String contentid) {
        List<Comments> l = cr.findAllByContentid(new ObjectId(contentid));
        return new ResponseEntity<>(l, HttpStatus.OK);
    }

    public ResponseEntity<?> getCommentsByUser(String userid) {
        User user = us.getCurrentUserProfile();
        if(!(userid.equals(user.get_id().toString()))) {
            return new ResponseEntity<>("ID MISMATCH",HttpStatus.FORBIDDEN);
        }
        List<Comments> l = cr.findAllByUserid(new ObjectId(userid));
        return new ResponseEntity<>(l, HttpStatus.OK);

    }

    public ResponseEntity<?> giveComment(Comments comments) {
        User user = us.getCurrentUserProfile();
        if( !(comments.getUserid().equals(user.get_id().toString()))) {
            return new ResponseEntity<>("ID MISMATCH",HttpStatus.FORBIDDEN);
        }
        Comments c = cr.save(comments);
        return new ResponseEntity<>(c, HttpStatus.CREATED);
        
    }

}
