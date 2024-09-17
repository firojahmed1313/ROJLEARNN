package com.rojlearnn.rojlearnn.service.AddonService;

import java.time.LocalDateTime;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.User;
import com.rojlearnn.rojlearnn.model.Addon.Tacking;
import com.rojlearnn.rojlearnn.repo.AddonRepo.TackingRepo;
import com.rojlearnn.rojlearnn.service.UserService;

@Service
public class TackingService {
    @Autowired
    private TackingRepo tr;
    @Autowired
    private UserService us;
    public ResponseEntity<?> updateTacking(String cuid, Tacking tacking) {
        User user = us.getCurrentUserProfile();
        if(!(tacking.getUserid().equals(user.get_id()))) {
            return new ResponseEntity<>("ID MISMATCH",HttpStatus.FORBIDDEN);
        }
        Tacking t = tr.findByCuid(cuid);
        if(t == null) {
            if(tacking.getProgress_percentage() == 100.0) {
                tacking.setStatus("COMPLETED");
            }
            else if(tacking.getProgress_percentage() == 0.0) {
                tacking.setStatus("INCOMPLETE");
            }
            else {
                tacking.setStatus("INPROGRESS");
            }
            Tacking newT=tr.save(tacking);
            return new ResponseEntity<>(newT, HttpStatus.CREATED);
        }
        t.setProgress_percentage(tacking.getProgress_percentage());
        if(tacking.getProgress_percentage() == 100.0) {
            t.setStatus("COMPLETED");
        }
        else if(tacking.getProgress_percentage() == 0.0) {
            t.setStatus("INCOMPLETE");
        }
        else {
            t.setStatus("INPROGRESS");
        }
        t.setLast_updated(LocalDateTime.now());
        Tacking newT=tr.save(t);
        return new ResponseEntity<>(newT, HttpStatus.OK);
    }

    public ResponseEntity<?> getTackingContent(String contentid) {
        List<Tacking> tacking = tr.findAllByContentid(new ObjectId(contentid));
        return new ResponseEntity<>(tacking, HttpStatus.OK);
    }

    public ResponseEntity<?> getTackingByUser(String userid) {
        User user = us.getCurrentUserProfile();
        if(!(userid.equals(user.get_id().toString()))) {
            return new ResponseEntity<>("ID MISMATCH",HttpStatus.FORBIDDEN);
        }
        List<Tacking> tacking = tr.findAllByUserid(new ObjectId(userid));
        return new ResponseEntity<>(tacking, HttpStatus.OK);
        
    }
}
