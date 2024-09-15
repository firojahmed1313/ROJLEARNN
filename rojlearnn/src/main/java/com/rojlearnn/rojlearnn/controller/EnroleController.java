package com.rojlearnn.rojlearnn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.model.Enrole;
import com.rojlearnn.rojlearnn.service.EnroleService;

@RestController
@RequestMapping(path = "/enroll")
public class EnroleController {
    @Autowired
    EnroleService es;
    @GetMapping("/enrollments/{courseId}")//only for instructor
    public ResponseEntity<?> getEnrollmentsByCourse(@PathVariable String courseId) {
        return es.getEnrollmentsByCourse(courseId);
    }

    @GetMapping("/enrollments/student/{studentId}") //only for student
    public ResponseEntity<?> getEnrollmentsByUser(@PathVariable String studentId) {
        return es.getStudentEnrollments(studentId);
    }

    @PostMapping("/createEnroll")
    public ResponseEntity<?> enrollInCourse(@RequestBody Enrole enrole) {
        return es.enrollStudent(enrole);
    }
    @PutMapping("/update/enrollmentstatus/{enrollmentId}")
    public ResponseEntity<?> updateEnrollmentStatus(@PathVariable String enrollmentId, @RequestBody Enrole enrole) {
        return es.updateEnrollmentStatus(enrollmentId, enrole);
    }
    @DeleteMapping("/delete/{enrollmentId}")
    public ResponseEntity<?> deleteEnrollment(@PathVariable String enrollmentId) {
        return es.deleteEnrollment(enrollmentId);
    }

}
