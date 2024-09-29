package com.rojlearnn.rojlearnn.repo.Assignment;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.rojlearnn.rojlearnn.model.Marks;
@Repository
public interface MarksRepo extends MongoRepository<Marks, String> {

}
