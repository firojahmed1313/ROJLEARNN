package com.rojlearnn.rojlearnn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.model.Course;
import com.rojlearnn.rojlearnn.service.CourseService;

import java.util.List;

@RestController
@RequestMapping(path = "/course")
@CrossOrigin(origins = "https://8080-firojahmed131-rojlearnn-yx462bjcym9.ws-us116.gitpod.io")
public class CourseController {
    @Autowired
    CourseService cs;
    @GetMapping("/all")
    public List<Course> getAllCourses() {
        return cs.getAllCourses();
    }
    @GetMapping("/{courseId}")
    public ResponseEntity<?> getCourseById(@PathVariable String courseId) {
        return cs.getCourseById(courseId);
    }

    @GetMapping("/{istructorId}/courses")
    public List<Course> getCoursesByInstructorId(@PathVariable String istructorId) {
        return cs.getCoursesByInstructorId(istructorId);
    }
    @GetMapping("/category/{category}")
    public List<Course> getCoursesByCategory(@PathVariable String category) {
        return cs.getCoursesByCategory(category);
    }
    @PostMapping("/create")
    public ResponseEntity<?> createCourse(@RequestBody Course course) {
        return cs.createCourse(course);
    }
    @PutMapping("/update")
    public ResponseEntity<?> updateCourse( @RequestBody Course course) {
        return cs.updateCourse( course);
    }
    @DeleteMapping("/delete/{courseId}")
    public ResponseEntity<?> deleteCourse(@PathVariable String courseId) {
        
        return cs.deleteCourse(courseId);
    }

}
