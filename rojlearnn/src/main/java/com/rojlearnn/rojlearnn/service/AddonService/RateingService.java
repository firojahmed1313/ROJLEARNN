package com.rojlearnn.rojlearnn.service.AddonService;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.User;
import com.rojlearnn.rojlearnn.model.Addon.Rateing;
import com.rojlearnn.rojlearnn.repo.AddonRepo.RateingRepo;
import com.rojlearnn.rojlearnn.service.UserService;

@Service
public class RateingService {
    @Autowired
    private RateingRepo rr;

    @Autowired
    private UserService us;

    public ResponseEntity<?> addRateing(Rateing rateing) {
        User user = us.getCurrentUserProfile();
        Rateing r = rr.findByCuid(rateing.getCuid());
        String cuid = rateing.getCuid();
        
        String userid = cuid.substring(cuid.indexOf("_")+1);
        if(! (userid.equals(user.get_id().toString()))) {
            return new ResponseEntity<>("ID MISMATCH",HttpStatus.FORBIDDEN);
        }
        if(r == null) {
            rateing.setCuid(cuid);
            rateing.setContentid(cuid.substring(0, cuid.indexOf("_")));
            Rateing newR=rr.save(rateing);
            return new ResponseEntity<>(newR,HttpStatus.CREATED);
        }
        r.setRating(rateing.getRating());
        rr.save(r);
        return new ResponseEntity<>(r,HttpStatus.OK);
        
        

        
    }

    public ResponseEntity<?> getRateing(String contentid) {
        System.out.println(contentid);
        List <Rateing> l= rr.findAllByContentid(new ObjectId(contentid));
        return new ResponseEntity<>(l,HttpStatus.OK);
    }

    public ResponseEntity<?> getRateingByUser(String userid) {
        List <Rateing> l= rr.findAllByUserid(new ObjectId(userid));
        return new ResponseEntity<>(l,HttpStatus.OK);

    }
}
