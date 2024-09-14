package com.rojlearnn.rojlearnn.service;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.Course;
import com.rojlearnn.rojlearnn.model.User;
import com.rojlearnn.rojlearnn.repo.CourseRepo;

@Service
public class CourseService {
    @Autowired
    CourseRepo cr;
    @Autowired
    UserService us;
    public List<Course> getAllCourses() {
        return cr.findAll();
    }
    public ResponseEntity<?> getCourseById(String courseId) {
        Course course = cr.findById(courseId).orElse(null);
        if(course==null) {
            return new ResponseEntity<>("Course not found",HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(course,HttpStatus.OK);
    }
    public List<Course> getCoursesByInstructorId(String istructorId) {
        return cr.findAllByInstructor(new ObjectId(istructorId));
    }
    public List<Course> getCoursesByCategory(String category) {
        return cr.findAllByCategory(category);       
    }
    public ResponseEntity<?> createCourse(Course course) {
        User user = us.getCurrentUserProfile();
        System.out.println(user.getRole());
        if((user.get_id().toString().equals(course.getInstructor().toString()))&&(user.getRole().equals("Instructor"))) {
            Course newCourse = cr.save(course);
            return new ResponseEntity<>(newCourse,HttpStatus.CREATED);
        }
        return new ResponseEntity<>("YOU ARE NOT ELIGIBLE TO CREATE THIS COURSE",HttpStatus.FORBIDDEN);
    }
    public ResponseEntity<?> updateCourse(Course course) {
        Course existingCourse = cr.findById(course.get_id()).orElse(null);
        if(existingCourse==null) {
            return new ResponseEntity<>("Course not found",HttpStatus.NOT_FOUND);
        }
        if(existingCourse.getInstructor().toString().equals(course.getInstructor().toString())) {
            existingCourse.setTitle(course.getTitle());
            existingCourse.setDescription(course.getDescription());
            existingCourse.setCategory(course.getCategory());
            existingCourse.setThumbnail_url(course.getThumbnail_url());
            existingCourse.setIs_published(course.isIs_published());
            existingCourse.setPrice(course.getPrice());
            existingCourse.setDuration_hours(course.getDuration_hours());
            existingCourse.setInstructor(course.getInstructor());

            Course updatedCourse = cr.save(existingCourse);
            return new ResponseEntity<>(updatedCourse,HttpStatus.OK);
        }        
        return new ResponseEntity<>("YOU ARE NOT ELIGIBLE TO UPDATE THIS COURSE",HttpStatus.FORBIDDEN);
    }
    public ResponseEntity<?> deleteCourse(String courseId) {
        User user = us.getCurrentUserProfile();
        String userId = user.get_id().toString();
        Course course = cr.findById(courseId).get();
        if (course.getInstructor().toString().equals(userId)) {
            cr.deleteById(courseId);
            return new ResponseEntity<>("Course deleted successfully",HttpStatus.OK);
        } else {
            return new ResponseEntity<>("YOU ARE NOT ELIGIBLE TO DELETE THIS COURSE",HttpStatus.FORBIDDEN);
        }

    }


}
