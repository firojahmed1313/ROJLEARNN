package com.rojlearnn.rojlearnn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.User;
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
        return ur.save(user);
    }
    public User updateUser(User user) {
        throw new UnsupportedOperationException("Unimplemented method 'updateUser'");
    }
    public void deleteUser(String userId) {
        throw new UnsupportedOperationException("Unimplemented method 'deleteUser'");
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

}
