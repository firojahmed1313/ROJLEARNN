package com.rojlearnn.rojlearnn.service;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
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
    public Course getCourseById(String courseId) {
        return cr.findById(courseId).get();
    }
    public List<Course> getCoursesByInstructorId(String istructorId) {
        return cr.findAllByInstructor(new ObjectId(istructorId));
    }
    public List<Course> getCoursesByCategory(String category) {
        return cr.findAllByCategory(category);       
    }
    public Course createCourse(Course course) {
        User user = us.getCurrentUserProfile();
        if(user.get_id().toString().equals(course.getInstructor().toString())) {
            return cr.save(course);
        }
        return null;
    }
    public Course updateCourse(String courseId, Course course) {
        Course existingCourse = cr.findById(courseId).get();
        if(existingCourse==null) {
            return null;
        }
        if(existingCourse.getInstructor().toString().equals(course.getInstructor().toString())) {
            existingCourse.setTitle(course.getTitle());
            existingCourse.setDescription(course.getDescription());
            existingCourse.setCategory(course.getCategory());
            existingCourse.setThumbnail_url(course.getThumbnail_url());
            existingCourse.setIs_published(course.isIs_published());
            existingCourse.setPrice(course.getPrice());
            existingCourse.setDuration_hours(course.getDuration_hours());
            return cr.save(existingCourse);
        }
        return null;
    }
    public String deleteCourse(String courseId) {
        User user = us.getCurrentUserProfile();
        String userId = user.get_id().toString();
        Course course = cr.findById(courseId).get();
        if (course.getInstructor().toString().equals(userId)) {
            cr.deleteById(courseId);
            return "success";
        } else {
            return "fail";
        }

    }


}
