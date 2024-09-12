package com.rojlearnn.rojlearnn.service;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.Course;
import com.rojlearnn.rojlearnn.repo.CourseRepo;

@Service
public class CourseService {
    @Autowired
    CourseRepo cr;
    public List<Course> getAllCourses() {
        return cr.findAll();
    }
    public Course getCourseById(String courseId) {
        // TODO Auto-generated method stub

        return cr.findById(courseId).get();
    }
    public List<Course> getCoursesByInstructorId(String istructorId) {
        // TODO Auto-generated method stub
        //return null;
        return cr.findAllByInstructor(new ObjectId(istructorId));
    }
    public List<Course> getCoursesByCategory(String category) {
        // TODO Auto-generated method stub
        //return null; 
        return cr.findAllByCategory(category);       
    }
    public Course createCourse(Course course) {
        // TODO Auto-generated method stub
        return cr.save(course);
    }
    public Course updateCourse(String courseId, Course course) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateCourse'");
    }
    public void deleteCourse(String courseId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteCourse'");
    }


}
