package com.rojlearnn.rojlearnn.service;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rojlearnn.rojlearnn.model.Course;
import com.rojlearnn.rojlearnn.model.User;
import com.rojlearnn.rojlearnn.model.Cart.Cartitems;
import com.rojlearnn.rojlearnn.model.Cart.Carts;
import com.rojlearnn.rojlearnn.repo.CourseRepo;
import com.rojlearnn.rojlearnn.repo.Cart.CartRepo;
import com.rojlearnn.rojlearnn.repo.Cart.CartitemsRepo;

@Service
public class CartService {
    @Autowired
    private CartRepo cr;
    @Autowired
    private CartitemsRepo cri;
    @Autowired
	private CourseRepo cor;
    @Autowired
    private UserService us;
    
    public ResponseEntity<?> addItemToCart(Cartitems cartitems) {
        User user = us.getCurrentUserProfile();
        if(!(cartitems.getUserid().equals(user.get_id().toString()))) {
            return new ResponseEntity<>("ID MISMATCH",HttpStatus.FORBIDDEN);
        }
       List<Carts> c = cr.findAllByUserid(new ObjectId(user.get_id().toString()));
       for (Carts cart : c) {
           if(!cart.getIscheckedout()) {
               cart.setTotalprice(cart.getTotalprice()+cartitems.getPrice());
               cartitems.setCartid(cart.get_id());
               Cartitems ci = cri.save(cartitems);
               cr.save(cart);
               return new ResponseEntity<>(ci,HttpStatus.OK);
           }
        
       }

       Carts cart = new Carts(user.get_id().toString(),cartitems.getPrice(),false);
       Carts c2 = cr.save(cart);
       cartitems.setCartid(c2.get_id());
       Cartitems ci = cri.save(cartitems); 
       return new ResponseEntity<>(ci,HttpStatus.OK);
    }
    public ResponseEntity<?> getCart(String userid) {
        User user = us.getCurrentUserProfile();
        if(!(userid.equals(user.get_id().toString()))) {
            return new ResponseEntity<>("ID MISMATCH",HttpStatus.FORBIDDEN);
        }
        List<Carts> l = cr.findAllByUserid(new ObjectId(userid));
        return new ResponseEntity<>(l, HttpStatus.OK);
    }
    public ResponseEntity<?> getCartitemsbycartsid(String cartid) {
        User user = us.getCurrentUserProfile();
        if(!(cartid.equals(user.get_id().toString()))) {
            return new ResponseEntity<>("ID MISMATCH",HttpStatus.FORBIDDEN);
        }
        List<Cartitems> l = cri.findAllByCartid(new ObjectId(cartid));
        return new ResponseEntity<>(l, HttpStatus.OK);
    }
    public ResponseEntity<?> getCartitems(String userid) {
        User user = us.getCurrentUserProfile();
        if(!(userid.equals(user.get_id().toString()))) {
            return new ResponseEntity<>("ID MISMATCH",HttpStatus.FORBIDDEN);
        }
        List<Cartitems> l = cri.findAllByUserid(new ObjectId(userid));
        return new ResponseEntity<>(l, HttpStatus.OK);
        
    }
    public ResponseEntity<?> deleteCartitems(String cartitemsid) {
        User user = us.getCurrentUserProfile();
        Cartitems c = cri.findBy_id(new ObjectId(cartitemsid));
        if(c==null) {
            return new ResponseEntity<>("Cartitems not found",HttpStatus.OK);
        }
        if(!(user.get_id().toString().equals(c.getUserid()))) {
            return new ResponseEntity<>("ID MISMATCH",HttpStatus.FORBIDDEN);
        }
        Carts cart = cr.findBy_id(c.getCartid());
        cart.setTotalprice(cart.getTotalprice()-c.getPrice());
        cr.save(cart);
        cri.deleteBy_id(new ObjectId(cartitemsid));
        return new ResponseEntity<>("Cartitems Deleted",HttpStatus.OK);
    }
	public ResponseEntity<?> getCartitemsNow(String userid) {
		User user = us.getCurrentUserProfile();
       List<Carts> c = cr.findAllByUserid(new ObjectId(user.get_id().toString()));
       for (Carts cart : c) {
           if(!cart.getIscheckedout()) {
			   System.out.println(cart);
        	   List<Cartitems> l = cri.findAllByCartid(new ObjectId(cart.get_id().toString()));//cart.get_id());
//        	   List<Course> course =new ArrayList<>();
//        	   for(Cartitems ci : l) {
//	        	   Course p= cor.findById(ci.getCourseid()).get();
//	        	   course.add(p);
//        	   }
//        	   System.out.println(l);
               return new ResponseEntity<>(l,HttpStatus.OK);
           }
        
       }
       return new ResponseEntity<>("No items in cart",HttpStatus.OK);
	}
    

}
