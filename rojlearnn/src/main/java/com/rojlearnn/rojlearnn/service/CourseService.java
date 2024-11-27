package com.rojlearnn.rojlearnn.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
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

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Course> getAllCourses() {
        return cr.findAll();
    }

    public ResponseEntity<?> getCourseById(String courseId) {
        Course course = cr.findById(courseId).orElse(null);
        if (course == null) {
            return new ResponseEntity<>("Course not found", HttpStatus.OK);
        }
        return new ResponseEntity<>(course, HttpStatus.OK);
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
        if ((user.get_id().toString().equals(course.getInstructor().toString()))
                && (user.getRole().equals("Instructor"))) {
            Course newCourse = cr.save(course);
            return new ResponseEntity<>(newCourse, HttpStatus.CREATED);
        }
        return new ResponseEntity<>("YOU ARE NOT ELIGIBLE TO CREATE THIS COURSE", HttpStatus.FORBIDDEN);
    }

    public ResponseEntity<?> updateCourse(Course course) {
        Course existingCourse = cr.findById(course.get_id()).orElse(null);
        if (existingCourse == null) {
            return new ResponseEntity<>("Course not found", HttpStatus.OK);
        }
        if (existingCourse.getInstructor().toString().equals(course.getInstructor().toString())) {
            existingCourse.setTitle(course.getTitle());
            existingCourse.setDescription(course.getDescription());
            existingCourse.setCategory(course.getCategory());
            existingCourse.setThumbnail_url(course.getThumbnail_url());
            existingCourse.setIs_published(course.isIs_published());
            existingCourse.setPrice(course.getPrice());
            existingCourse.setDuration_hours(course.getDuration_hours());
            existingCourse.setInstructor(course.getInstructor());

            Course updatedCourse = cr.save(existingCourse);
            return new ResponseEntity<>(updatedCourse, HttpStatus.OK);
        }
        return new ResponseEntity<>("YOU ARE NOT ELIGIBLE TO UPDATE THIS COURSE", HttpStatus.FORBIDDEN);
    }

    public ResponseEntity<?> deleteCourse(String courseId) {
        User user = us.getCurrentUserProfile();
        String userId = user.get_id().toString();
        Course course = cr.findById(courseId).get();
        if (course.getInstructor().toString().equals(userId)) {
            cr.deleteById(courseId);
            return new ResponseEntity<>("Course deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("YOU ARE NOT ELIGIBLE TO DELETE THIS COURSE", HttpStatus.FORBIDDEN);
        }

    }

    public ResponseEntity<?> getCoursesByFilter(String filter) {
        System.out.println(filter);
        Map<String, String> filters = new HashMap<>();

        // Remove leading "/?" if present
        filter = filter.startsWith("/?") ? filter.substring(2) : filter;

        // Split the query string by '&' and parse key-value pairs
        String[] params = filter.split("&");
        for (String param : params) {
            String[] keyValue = param.split("=");
            if (keyValue.length == 2) {
                filters.put(keyValue[0], keyValue[1]);
            }
        }

        // Apply filters
        // String searchKeyword = filters.get("searchKeyword");
        // String availability = filters.get("availability");
        // String category = filters.get("category");
        // String minPrice = filters.get("minPrice");
        // String maxPrice = filters.get("maxPrice");
        // String sortByField = filters.get("sortBy");
        // String sortByOrder = filters.get("order");
        System.out.println(filters.get("category"));
        System.out.println(filters.get("availability"));

        // Implement the filtering logic based on the parsed filters
        //System.out.println(searchKeyword+" "+ availability+" "+ category+" "+ minPrice+" "+ maxPrice+" "+ sortByField+" "+ sortByOrder);
        Query query = new Query();

        // Apply filters dynamically
        if (filters.containsKey("searchKeyword")) {
            String keyword = filters.get("searchKeyword");
            query.addCriteria(Criteria.where("title").regex(keyword, "i"));
            query.addCriteria(Criteria.where("description").regex(keyword, "i"));
        }

        if (filters.containsKey("category")) {
            query.addCriteria(Criteria.where("category").is(filters.get("category").toLowerCase()));
        }

        if (filters.containsKey("availability")) {
            String availability = filters.get("availability");
            Boolean availabilityStr = (availability.equals ("in-stock")) ? true : false;
            query.addCriteria(Criteria.where("is_published").is(availabilityStr));
        }

        if (filters.containsKey("minPrice") || filters.containsKey("maxPrice")) {
            Criteria priceCriteria = new Criteria("price");
            if (filters.containsKey("minPrice")) {
                double minPrice = Double.parseDouble(filters.get("minPrice"));
                priceCriteria.gte(minPrice);
            }
            if (filters.containsKey("maxPrice")) {
                double maxPrice = Double.parseDouble(filters.get("maxPrice"));
                priceCriteria.lte(maxPrice);
            }
            query.addCriteria(priceCriteria);
        }
        

        // Apply sorting
        if (filters.containsKey("sortBy")) {
            String sortByField = filters.get("sortBy");
            String sortOrder = filters.getOrDefault("order", "asc");
            query.with(
                    sortOrder.equalsIgnoreCase("asc") ? org.springframework.data.domain.Sort.by(sortByField).ascending()
                            : org.springframework.data.domain.Sort.by(sortByField).descending());
        }
        System.out.println(query.toString());
        List<Course> coursesF = mongoTemplate.find(query, Course.class);
        // for (Course course : coursesF) {
        //     System.out.println("course: " + course);
        // }

        // Execute the query
        return new ResponseEntity<>(coursesF , HttpStatus.OK);
    }

}
