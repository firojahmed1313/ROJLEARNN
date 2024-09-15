package com.rojlearnn.rojlearnn.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.Course;
import com.rojlearnn.rojlearnn.model.Enrole;
import com.rojlearnn.rojlearnn.model.User;
import com.rojlearnn.rojlearnn.repo.CourseRepo;
import com.rojlearnn.rojlearnn.repo.EnroleRepo;
import com.rojlearnn.rojlearnn.repo.UserRepo;
@Service
public class EnroleService {
    @Autowired
    EnroleRepo er;
    @Autowired
    UserRepo ur;
    @Autowired
    UserService us;
    @Autowired
    CourseRepo cr;
    public ResponseEntity<?> getEnrollmentsByCourse(String courseId) {
        User myuser = us.getCurrentUserProfile();
        if (!myuser.getRole().equals("Instructor")) {
            return new ResponseEntity<>("YOU ARE NOT ELIGIBLE TO VIEW.", HttpStatus.FORBIDDEN);
        }
        List<Enrole> e = er.findAllByCourseid(new ObjectId(courseId));
        System.out.println(e);
        if (e.isEmpty()) {
            return new ResponseEntity<>("Course not found", HttpStatus.NOT_FOUND);
            
        }
        List<User> u = new ArrayList<>();
        for(Enrole en : e) {
            User user;
            user= ur.findById(en.getStudentid()).orElse(null);
            if(user!=null) {
                u.add(user);
            }
        }
        System.out.println(u);
        return new ResponseEntity<>(u, HttpStatus.OK);
    }

    public ResponseEntity<?> getStudentEnrollments(String studentId) {

        User myuser = us.getCurrentUserProfile();
        if(!(myuser.get_id().toString().equals(studentId))) {
            return new ResponseEntity<>("YOU ARE NOT ELIGIBLE TO VIEW OTHERS ENROLLMENT.", HttpStatus.FORBIDDEN);
        }
        if (!myuser.getRole().equals("Student")) {
            return new ResponseEntity<>("YOU ARE NOT ELIGIBLE TO VIEW.", HttpStatus.FORBIDDEN);
        }
        List<Enrole> e = er.findAllByStudentid(new ObjectId(studentId));
        System.out.println(e);
        if (e.isEmpty()) {
            return new ResponseEntity<>("Student not found", HttpStatus.NOT_FOUND);
            
        }
        List<Course> u = new ArrayList<>();
        for(Enrole en : e) {
            Course c;
            c= cr.findById(en.getCourseid()).orElse(null);
            if(c!=null) {
                u.add(c);
            }
        }
        System.out.println(u);
        return new ResponseEntity<>(u, HttpStatus.OK);
    }

    public ResponseEntity<?> enrollStudent(Enrole enrole) {
        User myuser = us.getCurrentUserProfile();
        if(!(myuser.get_id().toString().equals(enrole.getStudentid().toString()))) {
            return new ResponseEntity<>("YOU ARE NOT ELIGIBLE TO ENROLL IN OTHERS COURSES.", HttpStatus.FORBIDDEN);
        }
        if (!myuser.getRole().equals("Student")) {
            return new ResponseEntity<>("YOU ARE NOT ELIGIBLE TO ENROLL IN COURSES.", HttpStatus.FORBIDDEN);
        }
        List<Enrole> e = er.findAllByStudentid(new ObjectId(enrole.getStudentid()));
        for(Enrole en : e) {
            if(en.getCourseid().toString().equals(enrole.getCourseid().toString())) {
                return new ResponseEntity<>("ALREADY ENROLLED.", HttpStatus.CONFLICT);
            }
        }
        return new ResponseEntity<>(er.save(enrole),HttpStatus.CREATED);
    }

    public ResponseEntity<?> deleteEnrollment(String enrollmentId) {
        Enrole en = er.findById(enrollmentId).orElse(null);
        if(en == null) {
            return new ResponseEntity<>("Enrollment not found", HttpStatus.NOT_FOUND);
        }
        if(!(en.getStudentid().toString().equals(us.getCurrentUserProfile().get_id().toString()))) {
            return new ResponseEntity<>("YOU ARE NOT ELIGIBLE TO DELETE ENROLLMENT.", HttpStatus.FORBIDDEN);
        }
        if(en.getEnrollmentstatus().equals("Completed")) {
            return new ResponseEntity<>("CANNOT DELETE COMPLETED ENROLLMENT.", HttpStatus.FORBIDDEN);
        }
        er.deleteById(enrollmentId);
        return new ResponseEntity<>("Enrollment deleted successfully", HttpStatus.OK);
        
    }

    public ResponseEntity<?> updateEnrollmentStatus(String enrollmentId, Enrole enrole) {
        Enrole en = er.findById(enrollmentId).orElse(null);
        if(en == null) {
            return new ResponseEntity<>("Enrollment not found", HttpStatus.NOT_FOUND);
        }
        if(!(en.getStudentid().toString().equals(us.getCurrentUserProfile().get_id().toString()))) {
            return new ResponseEntity<>("YOU ARE NOT ELIGIBLE TO UPDATE ENROLLMENT.", HttpStatus.FORBIDDEN);
        }
        if(en.getEnrollmentstatus().equals("Completed")) {
            return new ResponseEntity<>("CANNOT UPDATE COMPLETED ENROLLMENT.", HttpStatus.FORBIDDEN);
        }
        else if(en.getEnrollmentstatus().equals("Enrolled") && enrole.getEnrollmentstatus().equals("Completed")) {
            en.setEnrollmentstatus("completed");
            en.setCompleted_at(LocalDateTime.now());
            return new ResponseEntity<>(er.save(en),HttpStatus.OK);
        }
        else if(en.getEnrollmentstatus().equals("Pending") && enrole.getEnrollmentstatus().equals("Enrolled")) {
            en.setEnrollmentstatus("Enrolled");
            en.setEnrollment_date(LocalDateTime.now());
            return new ResponseEntity<>(er.save(en),HttpStatus.OK);
        }
        return new ResponseEntity<>("Enrollment status not updated",HttpStatus.CONFLICT);
    }

}
