package com.rojlearnn.rojlearnn.controller.AddonController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.model.Addon.Rateing;
import com.rojlearnn.rojlearnn.service.AddonService.RateingService;

@RestController
@RequestMapping("/rateing")
public class RateingController {
    @Autowired
    private RateingService rs;

    @PostMapping("/addRateing")
    public ResponseEntity<?> addRateing(@RequestBody Rateing rateing) {
        return rs.addRateing(rateing);
    }

    @GetMapping("/getRateing/{contentid}")
    public ResponseEntity<?> getRatingsByContent(@PathVariable String contentid) {
        return rs.getRateing(contentid);
    }

    @GetMapping("/getRateingByUser/{userid}")
    public ResponseEntity<?> getRatingsByUser(@PathVariable String userid) {
        return rs.getRateingByUser(userid);
    }
}
