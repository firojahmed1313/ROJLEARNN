package com.rojlearnn.rojlearnn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.model.Video;
import com.rojlearnn.rojlearnn.service.VideoService;

@RestController
@RequestMapping("/video")
public class VideoController {
    @Autowired
    private VideoService vs;

    @GetMapping("/getAllVideoByCourseId/{courseId}")
    public ResponseEntity<?> getAllVideoByCourseId(@PathVariable String courseId) {
        return vs.getAllVideoByCourseId(courseId);
    }
    @PostMapping("/addVideo")
    public ResponseEntity<?> addVideo(@RequestBody Video video) {
        return vs.addVideo(video);
    }

    @DeleteMapping("/delete/{videoId}")
    public ResponseEntity<?> deleteVideo(@PathVariable String videoId) {
        return vs.deleteVideo(videoId);
    }
    
}
