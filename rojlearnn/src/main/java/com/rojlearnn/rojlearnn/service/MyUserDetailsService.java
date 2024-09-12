package com.rojlearnn.rojlearnn.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.User;
import com.rojlearnn.rojlearnn.model.UserPrincipal;
import com.rojlearnn.rojlearnn.repo.UserRepo;
@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepo ur;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = ur.findByEmail(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
            return new UserPrincipal(user);
    }
    
}
