package com.rojlearnn.rojlearnn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
    public User findUserById(String userId) {
        return ur.findById(userId).get();
        
    }
    public List<User> getUser() {
        return ur.findAll();
    }
    public List<User> getUsersByRole(String role) {
        
        return ur.findAllByRole(role);
    }
    public User createUser(User user) {
        //System.out.println(user);
        User existingUser = ur.findByEmail(user.getEmail());
        if (existingUser != null) {
            return null;
        }
        return ur.save(user);
    }
    public User updateUser(User user) {
        User existingUser = ur.findById(user.get_id().toString()).get();
        if (existingUser == null) {
            return null;
        }
        existingUser.setUsername(user.getUsername());
        existingUser.setPassword(user.getPassword());
        existingUser.setRole(user.getRole());
        existingUser.setProfile_picture_url(user.getProfile_picture_url());
        existingUser.setPhone_number(user.getPhone_number());
        existingUser.setAddress(user.getAddress());
        existingUser.setIs_active(user.isIs_active());
        return ur.save(existingUser);
    }
    public void deleteUser(String userId) {
        ur.deleteById(userId);
    }
    public User resetPassword(String email) {
        throw new UnsupportedOperationException("Unimplemented method 'resetPassword'");
    }
    public String verifyUser(User user) {
        Authentication authentication = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
        if (authentication.isAuthenticated()) {
            return jS.generateToken(user.getEmail());
        } else {
            return "fail";
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
