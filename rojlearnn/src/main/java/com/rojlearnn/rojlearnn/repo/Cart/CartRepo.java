package com.rojlearnn.rojlearnn.repo.Cart;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rojlearnn.rojlearnn.model.Cart.Carts;

@Repository
public interface CartRepo extends MongoRepository<Carts, String> {

    List<Carts> findAllByUserid(ObjectId objectId);

    Carts findBy_id(String cartid);

    //Optional<Carts> findById(ObjectId objectId);

}
