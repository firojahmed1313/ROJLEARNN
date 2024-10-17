package com.rojlearnn.rojlearnn.service;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.Video;
import com.rojlearnn.rojlearnn.repo.VideoRepo;

@Service
public class VideoService {

    @Autowired
    VideoRepo vr;
    public ResponseEntity<?> getAllVideoByCourseId(String courseId) {
        List <Video> l= vr.findAllByCourseid(new ObjectId(courseId));
        if(l==null) {
            return new ResponseEntity<>("Data not found",HttpStatus.OK);
        }
        return new ResponseEntity<>(l,HttpStatus.OK);
        
    }
    public ResponseEntity<?> addVideo(Video video) {
        vr.save(video);
        return new ResponseEntity<>("Video added",HttpStatus.OK);
    }
    public ResponseEntity<?> deleteVideo(String videoId) {
        Video v = vr.findById(videoId).orElse(null);
        if(v==null) {
            return new ResponseEntity<>("Video not found",HttpStatus.NOT_FOUND);
        }
        vr.deleteById(videoId);
        return new ResponseEntity<>("Video deleted",HttpStatus.OK);
    }
    
}
