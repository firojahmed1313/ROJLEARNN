package com.rojlearnn.rojlearnn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.model.Attendance;
import com.rojlearnn.rojlearnn.service.AttendanceService;

@RestController
@RequestMapping("/attendance")
public class AttendanceController {

    @Autowired
    private AttendanceService aS;

    @PostMapping("/addAttendance")
    public ResponseEntity<?> addAttendance(@RequestBody Attendance a) {
        return aS.addAttendance(a);
    }
    @GetMapping("/getAttendanceByStudentACourse/{scId}")
    public ResponseEntity<?> getAttendanceByStudentACourse(@PathVariable String scId) {
        return aS.getAttendanceByStudentACourse(scId);
    }

    @GetMapping("/getAttendanceByCourse/{course_id}")
    public ResponseEntity<?> getAttendanceByCourse(@PathVariable String course_id) {
        //System.out.println(course_id);
        return aS.getAttendanceByCourse(course_id);
    }

}
