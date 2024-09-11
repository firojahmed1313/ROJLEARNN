package com.rojlearnn.rojlearnn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.User;
import com.rojlearnn.rojlearnn.repo.UserRepo;
@Service
public class UserService {
    @Autowired
    UserRepo ur;
    public User findUserById(String userId) {
        return ur.findById(userId).get();
        
    }
    public List<User> getUser() {
        // TODO Auto-generated method stub
        return ur.findAll();
    }
    public List<User> getUsersByRole(String role) {
        
        return ur.findAllByRole(role);
    }
    public User createUser(User user) {
        // TODO Auto-generated method stub
        return ur.save(user);
    }
    public User updateUser(User user) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateUser'");
    }
    public void deleteUser(String userId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteUser'");
    }
    public User resetPassword(String email) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'resetPassword'");
    }

}
