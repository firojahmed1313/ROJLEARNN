package com.rojlearnn.rojlearnn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rojlearnn.rojlearnn.model.Cart.Cartitems;
import com.rojlearnn.rojlearnn.service.CartService;

@RestController
@RequestMapping("/cart")
public class Cartcontroller {
    @Autowired
    private CartService cs;

    @PostMapping("/addItemToCart")
    public ResponseEntity<?> addItemToCart(@RequestBody Cartitems cartitems) {
        return cs.addItemToCart(cartitems);
    }
    @GetMapping("/getCarts/{userid}")
    public ResponseEntity<?> getCart(@PathVariable String userid) {
        return cs.getCart(userid);
    }

    @GetMapping("/getCartitems/{userid}")
    public ResponseEntity<?> getCartitemsbyuserid(@PathVariable String userid) {
        return cs.getCartitems(userid);
    }
    @GetMapping("/getCartitemsNow/{userid}")
    public ResponseEntity<?> getCartitemsNowbyuserid(@PathVariable String userid) {
        return cs.getCartitemsNow(userid);
    }
    @GetMapping("/getCartitem/{cartid}")
    public ResponseEntity<?> getCartitemsbycartsid(@PathVariable String cartid) {
        return cs.getCartitemsbycartsid(cartid);
    }

    @DeleteMapping("/delete/{cartitemsid}")
    public ResponseEntity<?> deleteCartitems(@PathVariable String cartitemsid) {
        return cs.deleteCartitems(cartitemsid);
    }


}
