package com.rojlearnn.rojlearnn.repo;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rojlearnn.rojlearnn.model.Attendance;
@Repository
public interface AttendanceRepo extends MongoRepository<Attendance, ObjectId> {


    List<Attendance> findByStudentAndCourseAndDate(ObjectId student_id, ObjectId course_id, LocalDate date);



    List<Attendance> findByStudentAndCourse(ObjectId studentId, ObjectId courseId);



    List<Attendance> findAllByCourse(ObjectId course_id);



    List<Attendance> findAllByCourseAndDate(ObjectId objectId, LocalDate now);



}
