package com.rojlearnn.rojlearnn.controller.AddonController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.model.Addon.Tacking;
import com.rojlearnn.rojlearnn.service.AddonService.TackingService;

@RestController
@RequestMapping("/tracking")
public class TackingController {
    @Autowired
    private TackingService ts;

    @PostMapping("/updatetacking/{cuid}")
    public ResponseEntity<?> updateTacking(@PathVariable String cuid,@RequestBody Tacking tacking) {
        return ts.updateTacking(cuid,tacking);
    }

    @GetMapping("/gettackingContent/{contentid}")
    public ResponseEntity<?> getTackingContent(@PathVariable String contentid) {
        return ts.getTackingContent(contentid);
    }

    @GetMapping("/gettackingByUser/{userid}")
    public ResponseEntity<?> getTackingByUser(@PathVariable String userid) {
        return ts.getTackingByUser(userid);
    }
}
