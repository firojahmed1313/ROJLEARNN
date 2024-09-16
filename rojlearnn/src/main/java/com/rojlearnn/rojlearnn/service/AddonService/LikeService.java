package com.rojlearnn.rojlearnn.service.AddonService;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.User;
import com.rojlearnn.rojlearnn.model.Addon.Like;
import com.rojlearnn.rojlearnn.repo.AddonRepo.LikeRepo;
import com.rojlearnn.rojlearnn.service.UserService;

@Service
public class LikeService {
    @Autowired
     LikeRepo lr;
    @Autowired
     UserService us;
    public ResponseEntity<?> addLikeToContent(String cuId) {
        User user = us.getCurrentUserProfile();
        Like l= lr.findByCuid(cuId);
        String cid= cuId.substring(0, cuId.indexOf("_"));
        String uid= cuId.substring(cuId.indexOf("_")+1);
        System.out.println(l);
        System.out.println(cid);
        System.out.println(uid);
        if(!(uid.equals(user.get_id().toString()))) {
            return new ResponseEntity<>("ID MISMATCH",HttpStatus.FORBIDDEN);
        }
        if(l==null) {
            Like newL = new Like(cuId,new ObjectId(cid),new ObjectId(uid),"Like");
            lr.save(newL);
            return new ResponseEntity<>(newL,HttpStatus.CREATED);
        }
        else if (!(l.getUserid().toString().equals(user.get_id().toString()))) {
            return new ResponseEntity<>("YOU CAN'T LIKE OTHERS CONTENT",HttpStatus.FORBIDDEN);
        }
        else if (l.getLiketype().equals("Dislike")) {
            l.setLiketype("Like");
            lr.save(l);
            return new ResponseEntity<>(l,HttpStatus.OK);
        }
        return new ResponseEntity<>("Already liked",HttpStatus.CONFLICT);
    }

    public ResponseEntity<?> getAllLike(String contentId) {
        System.out.println(contentId);
        List <Like> l= lr.findAllByContentid(new ObjectId(contentId));
        System.out.println(l); 
        List <Like> newL= l.stream().filter(x->x.getLiketype().equals("Like")).toList();
        return new ResponseEntity<>(newL,HttpStatus.OK);
    }

    public ResponseEntity<?> getAllLikeByUser(String userId) {
        List <Like> l= lr.findAllByUserid(new ObjectId(userId));
        List <Like> newL= l.stream().filter(x->x.getLiketype().equals("Like")).toList();
        return new ResponseEntity<>(newL,HttpStatus.OK);
    }

    public ResponseEntity<?> addDislikeToContent(String contentId) {
        User user = us.getCurrentUserProfile();
        Like l= lr.findByCuid(contentId);
        String cid= contentId.substring(0, contentId.indexOf("_"));
        String uid= contentId.substring(contentId.indexOf("_")+1);
        if(!(uid.equals(user.get_id().toString()))) {
            return new ResponseEntity<>("ID MISMATCH",HttpStatus.FORBIDDEN);
        }
        if(l==null) {
            Like newL = new Like(contentId,new ObjectId(cid),new ObjectId(uid),"Dislike");
            lr.save(newL);
            return new ResponseEntity<>(newL,HttpStatus.CREATED);
        }
        else if (!(l.getUserid().toString().equals(user.get_id().toString()))) {
            return new ResponseEntity<>("YOU CAN'T DISLIKE OTHERS CONTENT",HttpStatus.FORBIDDEN);
        }
        else if (l.getLiketype().equals("Like")) {
            l.setLiketype("Dislike");
            lr.save(l);
            return new ResponseEntity<>(l,HttpStatus.OK);
        }
        return new ResponseEntity<>("Already disliked",HttpStatus.CONFLICT);
    }

    public ResponseEntity<?> getAllDislike(String contentId) {
        List <Like> l= lr.findAllByContentid(new ObjectId(contentId));
        List <Like> newL= l.stream().filter(x->x.getLiketype().equals("Dislike")).toList();
        return new ResponseEntity<>(newL,HttpStatus.OK);
    }

    public ResponseEntity<?> getAllDislikeByUser(String userId) {
        List <Like> l= lr.findAllByUserid(new ObjectId(userId));
        List <Like> newL= l.stream().filter(x->x.getLiketype().equals("Dislike")).toList();
        return new ResponseEntity<>(newL,HttpStatus.OK);
    }

}
