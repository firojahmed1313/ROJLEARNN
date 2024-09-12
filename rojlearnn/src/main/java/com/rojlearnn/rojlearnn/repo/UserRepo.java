package com.rojlearnn.rojlearnn.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rojlearnn.rojlearnn.model.User;
@Repository
public interface UserRepo extends MongoRepository<User, String> {

    List<User> findAllByRole(String role);

    User findByEmail(String username);


}
