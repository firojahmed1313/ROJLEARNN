package com.rojlearnn.rojlearnn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.User;
import com.rojlearnn.rojlearnn.model.UserPrincipal;
import com.rojlearnn.rojlearnn.repo.UserRepo;
@Service
public class UserService {
    @Autowired
    UserRepo ur;
    @Autowired
    jwtService jS;
    @Autowired
    AuthenticationManager authManager;
    public ResponseEntity<?> findUserById(String userId) {
        User user = ur.findById(userId).orElse(null);
        if (user == null) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
    
    public List<User> getUser() {
        return ur.findAll();
    }
    public List<User> getUsersByRole(String role) {
        
        return ur.findAllByRole(role);
    }
    public ResponseEntity<?> createUser(User user) {
        //System.out.println(user);
        User existingUser = ur.findByEmail(user.getEmail());
        if (existingUser != null) {
            return new ResponseEntity<>("User already exists", HttpStatus.OK);
        }
        User newUser = ur.save(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }
    public ResponseEntity<?> updateUser(User user) {
        System.out.println(user.get_id());
        System.out.println("user");
        User existingUser = ur.findById(user.get_id()).orElse(null);
        if (existingUser == null) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
        existingUser.setUsername(user.getUsername());
        existingUser.setPassword(user.getPassword());
        existingUser.setRole(user.getRole());
        existingUser.setProfile_picture_url(user.getProfile_picture_url());
        existingUser.setPhone_number(user.getPhone_number());
        existingUser.setAddress(user.getAddress());
        User updatedUser = ur.save(existingUser);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }
    public ResponseEntity<?> deleteUser(String userId) {
        User user = ur.findById(userId).orElse(null);
        if (user == null) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
        ur.deleteById(userId);
        return new ResponseEntity<>("User deleted", HttpStatus.OK);
    }
    public User resetPassword(String email) {
        throw new UnsupportedOperationException("Unimplemented method 'resetPassword'");
    }
    public ResponseEntity<?> verifyUser(User user) {
        Authentication authentication = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
        if (authentication.isAuthenticated()) {
            String token = jS.generateToken(user.getEmail());
            return new ResponseEntity<>(token, HttpStatus.OK);
            //return jS.generateToken(user.getEmail());
        } else {
            System.out.println("Authentication failed");
            return new ResponseEntity<>("Authentication failed", HttpStatus.UNAUTHORIZED);
        }
    }
    public User getCurrentUserProfile() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication instanceof UsernamePasswordAuthenticationToken) {
            UsernamePasswordAuthenticationToken token = (UsernamePasswordAuthenticationToken) authentication;
            Object principal = token.getPrincipal();
    
            if (principal instanceof UserPrincipal) {
                // Cast the principal to your UserPrincipal object
                UserPrincipal userPrincipal = (UserPrincipal) principal;
                
                // Extract user details from UserPrincipal
                System.out.println("Email: " + userPrincipal.getUsername());
                System.out.println("Password: " + userPrincipal.getPassword());
                
                // Return the corresponding Users object from your service
                return ur.findByEmail(userPrincipal.getUsername());
            }else{
                System.out.println("no");
            }
        }
        return null;
    }

}
