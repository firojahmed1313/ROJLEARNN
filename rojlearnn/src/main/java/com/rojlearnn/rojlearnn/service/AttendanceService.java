package com.rojlearnn.rojlearnn.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.Attendance;
import com.rojlearnn.rojlearnn.model.User;
import com.rojlearnn.rojlearnn.repo.AttendanceRepo;
import com.rojlearnn.rojlearnn.repo.UserRepo;

@Service
public class AttendanceService {

    @Autowired
    private AttendanceRepo aR;

    @Autowired
    private UserRepo ur;

    public ResponseEntity<?> addAttendance(Attendance a) {
        List<Attendance> existingAttendance = aR.findByStudentAndCourseAndDate(
                new ObjectId(a.getStudent()), new ObjectId(a.getCourse()), a.getDate());
        
        if (!existingAttendance.isEmpty()) {
            return ResponseEntity.badRequest().body("Attendance for the given date already exists.");
        }

        // Save the new attendance
        Attendance savedAttendance = aR.save(a);
        return new ResponseEntity<>(savedAttendance, HttpStatus.CREATED);
    }

    

    public ResponseEntity<?> getAttendanceByCourse(String course_id) {
        System.out.println(course_id);
        List<Attendance> l = aR.findAllByCourseAndDate(new ObjectId(course_id), LocalDate.now()); //aR.findAllByCourse(course_id);
        List<User> u = new ArrayList<>();
        if (l.isEmpty()) {
            return new ResponseEntity<>("Data not found", HttpStatus.OK);
        }
        else {
            for (Attendance a : l) {
                //LocalDate attendanceDate = LocalDate.parse(date);
                // LocalDate attendanceDate = LocalDate.now();
                // System.out.println(attendanceDate);
                
                // LocalDate courseDate = a.getDate();
                // System.out.println(courseDate);
                // if (attendanceDate.equals(courseDate)) {
                    User user = ur.findById(a.getStudent()).get();
                    u.add(user);
                //}
            }
            return new ResponseEntity<>(u, HttpStatus.OK);
        }


        
    }

    public ResponseEntity<?> getAttendanceByStudentACourse(String scId) {
        String[] scIdParts = scId.split("_");
        if (scIdParts.length != 2) {
            return new ResponseEntity<>("Invalid scId format.", HttpStatus.OK);
        }

        String studentId = scIdParts[0];
        String courseId = scIdParts[1];
        System.out.println(studentId);
        System.out.println(courseId);

        List<Attendance> attendanceList = aR.findByStudentAndCourse(new ObjectId(studentId), new ObjectId(courseId));

        if (attendanceList.isEmpty()) {
            return new ResponseEntity<>("No attendance found for the student in the course.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>(attendanceList, HttpStatus.OK);
        }
    }

}
