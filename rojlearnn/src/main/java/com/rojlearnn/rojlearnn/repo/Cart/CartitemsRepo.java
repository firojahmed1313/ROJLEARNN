package com.rojlearnn.rojlearnn.repo.Cart;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rojlearnn.rojlearnn.model.Cart.Cartitems;

@Repository
public interface CartitemsRepo extends MongoRepository<Cartitems, String> {

    List<Cartitems> findAllByUserid(ObjectId objectId);

    List<Cartitems> findAllByCartid(ObjectId objectId);

    //Optional<Cartitems> findById(ObjectId objectId);

    //void deleteById(ObjectId objectId);
    //List<Cartitems> findAllByCart_id(ObjectId objectId);

    Cartitems findBy_id(ObjectId objectId);

    void deleteBy_id(ObjectId objectId);

}
