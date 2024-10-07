package com.rojlearnn.rojlearnn.controller;

import java.util.List;

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

import com.rojlearnn.rojlearnn.model.User;
import com.rojlearnn.rojlearnn.service.UserService;


@CrossOrigin
@RestController
@RequestMapping(path = "/user")
public class UserController {
    @Autowired
    UserService us;
    @GetMapping("/users")
    public List<User> getUser() {
        return us.getUser();
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> getUserById(@PathVariable String userId) {
        return us.findUserById(userId);
    }

    @GetMapping("/role/{role}")
    public List<User> getUsersByRole( @PathVariable String role) {
        return us.getUsersByRole(role);
    }
    
    @GetMapping("/me")
    public User getCurrentUserProfile(){

        return us.getCurrentUserProfile();
    }
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        System.out.println(user);
        return us.createUser(user);
    }
    @PostMapping("/logIn")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        return us.verifyUser(user);
    }
    @PutMapping("/update")
    public ResponseEntity<?> updateUser(@RequestBody User user) {
        System.out.println("user.get_id()");
        return us.updateUser(user);
    }

    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable String userId) {
        return us.deleteUser(userId);
    }
    @PostMapping("/resetPassword")
    public User resetPassword(@PathVariable String email) {
        return us.resetPassword(email);
    }
}
