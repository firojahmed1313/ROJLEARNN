package com.rojlearnn.rojlearnn.service;

import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.nio.charset.StandardCharsets;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import org.bson.types.ObjectId;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.rojlearnn.rojlearnn.model.Course;
import com.rojlearnn.rojlearnn.model.Enrole;
import com.rojlearnn.rojlearnn.model.User;
import com.rojlearnn.rojlearnn.model.Cart.Cartitems;
import com.rojlearnn.rojlearnn.model.Cart.Carts;
import com.rojlearnn.rojlearnn.model.Cart.PaymentData;
import com.rojlearnn.rojlearnn.repo.CourseRepo;
import com.rojlearnn.rojlearnn.repo.Cart.CartRepo;
import com.rojlearnn.rojlearnn.repo.Cart.CartitemsRepo;

@Service
public class CartService {
    @Autowired
    private CartRepo cr;
    @Autowired
    private CartitemsRepo cri;
    // @Autowired
    // private CourseRepo cor;
    @Autowired
    private UserService us;

    public ResponseEntity<?> addItemToCart(Cartitems cartitems) {
        User user = us.getCurrentUserProfile();
        if (!(cartitems.getUserid().equals(user.get_id().toString()))) {
            return new ResponseEntity<>("ID MISMATCH", HttpStatus.FORBIDDEN);
        }
        List<Carts> c = cr.findAllByUserid(new ObjectId(user.get_id().toString()));
        for (Carts cart : c) {
            if (!cart.getIscheckedout()) {
                cart.setTotalprice(cart.getTotalprice() + cartitems.getPrice());
                cartitems.setCartid(cart.get_id());
                Cartitems ci = cri.save(cartitems);
                cr.save(cart);
                return new ResponseEntity<>(ci, HttpStatus.OK);
            }

        }

        Carts cart = new Carts(user.get_id().toString(), cartitems.getPrice(), false);
        Carts c2 = cr.save(cart);
        cartitems.setCartid(c2.get_id());
        Cartitems ci = cri.save(cartitems);
        return new ResponseEntity<>(ci, HttpStatus.OK);
    }

    public ResponseEntity<?> getCart(String userid) {
        User user = us.getCurrentUserProfile();
        if (!(userid.equals(user.get_id().toString()))) {
            return new ResponseEntity<>("ID MISMATCH", HttpStatus.FORBIDDEN);
        }
        List<Carts> l = cr.findAllByUserid(new ObjectId(userid));
        return new ResponseEntity<>(l, HttpStatus.OK);
    }

    public ResponseEntity<?> getCartitemsbycartsid(String cartid) {
        User user = us.getCurrentUserProfile();
        if (!(cartid.equals(user.get_id().toString()))) {
            return new ResponseEntity<>("ID MISMATCH", HttpStatus.FORBIDDEN);
        }
        List<Cartitems> l = cri.findAllByCartid(new ObjectId(cartid));
        return new ResponseEntity<>(l, HttpStatus.OK);
    }

    public ResponseEntity<?> getCartitems(String userid) {
        User user = us.getCurrentUserProfile();
        if (!(userid.equals(user.get_id().toString()))) {
            return new ResponseEntity<>("ID MISMATCH", HttpStatus.FORBIDDEN);
        }
        List<Cartitems> l = cri.findAllByUserid(new ObjectId(userid));
        return new ResponseEntity<>(l, HttpStatus.OK);

    }

    public ResponseEntity<?> deleteCartitems(String cartitemsid) {

        User user = us.getCurrentUserProfile();
        Cartitems c = cri.findBy_id(new ObjectId(cartitemsid));
        if (c == null) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        if (!(user.get_id().toString().equals(c.getUserid()))) {
            return new ResponseEntity<>("ID MISMATCH", HttpStatus.FORBIDDEN);
        }
        Carts cart = cr.findBy_id(c.getCartid());
        cart.setTotalprice(cart.getTotalprice() - c.getPrice());
        cr.save(cart);
        cri.deleteBy_id(new ObjectId(cartitemsid));
        return new ResponseEntity<>("Cartitems Deleted", HttpStatus.OK);
    }

    public ResponseEntity<?> getCartitemsNow(String userid) {
        List<Carts> ans = new ArrayList<>();
        User user = us.getCurrentUserProfile();
        List<Carts> c = cr.findAllByUserid(new ObjectId(user.get_id().toString()));
        for (Carts cart : c) {
            if (!cart.getIscheckedout()) {
                System.out.println(cart);
                List<Cartitems> l = cri.findAllByCartid(new ObjectId(cart.get_id().toString()));// cart.get_id());
                // List<Course> course =new ArrayList<>();
                // for(Cartitems ci : l) {
                // Course p= cor.findById(ci.getCourseid()).get();
                // course.add(p);
                // }
                // System.out.println(l);
                return new ResponseEntity<>(l, HttpStatus.OK);
            }

        }
        return new ResponseEntity<>(ans, HttpStatus.OK);
    }

    public ResponseEntity<?> paymentint(String userid) {

        User user = us.getCurrentUserProfile();
        System.out.println(user.get_id().toString());
        System.out.println(userid);
        if (!(userid.equals(user.get_id().toString()))) {
            return new ResponseEntity<>("ID MISMATCH", HttpStatus.FORBIDDEN);
        }
        String cardid = "";
        List<Carts> c = cr.findAllByUserid(new ObjectId(user.get_id().toString()));
        double totalprice = 0;
        for (Carts cart : c) {
            if (!cart.getIscheckedout()) {
                totalprice = cart.getTotalprice();
                cardid = cart.get_id().toString();
            }
        }
        totalprice = totalprice * 100;
        System.out.println(totalprice);
        System.out.println(cardid);
        RazorpayClient razorpay;
        try {
            razorpay = new RazorpayClient("rzp_test_DYwio7wiUjR6Q9", "CXbLU9wIlNoThgqYxqVdTweU");
        } catch (RazorpayException e) {

            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }

        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", totalprice);
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", cardid);
        System.out.println(orderRequest);
        Order order;
        try {
            order = razorpay.orders.create(orderRequest);
            System.out.println(order);
        } catch (RazorpayException e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        Map<String, Object> response = new HashMap<>();
        response.put("id", order.get("id"));
        response.put("amount", order.get("amount"));
        response.put("currency", order.get("currency"));
        response.put("receipt", order.get("receipt"));
        return new ResponseEntity<>(response, HttpStatus.OK);

    }

    public ResponseEntity<?> verifyPayment(PaymentData data) {
        String secret = "CXbLU9wIlNoThgqYxqVdTweU";
        System.out.println(data.getOrderid() + "|" + data.getPaymentid());
        try {
            // Generate the signature
            String dataToHash = data.getOrderid() + "|" + data.getPaymentid();
            Mac hmacSHA256 = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKeySpec = new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
            hmacSHA256.init(secretKeySpec);

            // Compute the hash
            byte[] hash = hmacSHA256.doFinal(dataToHash.getBytes(StandardCharsets.UTF_8));
            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) {
                    hexString.append('0');
                }
                hexString.append(hex);
            }
            String generatedSignature = hexString.toString();
            System.out.println("Generated Signature: " + generatedSignature);
            System.out.println("Received Signature: " + data.getSignature());
            // Verify the signature
            if (generatedSignature.equals(data.getSignature())) {
                addEnroleToCourse();
                updateStatustoCarts();
                return new ResponseEntity<>("Payment Verification Successful", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Payment Verification Failed: Signature Mismatch", HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Error during Payment Verification", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Autowired
    EnroleService es;
    private void addEnroleToCourse() {
        User user = us.getCurrentUserProfile();
        System.out.println(user.get_id().toString());
        List<Cartitems> l= new ArrayList<>();
        List<Carts> c = cr.findAllByUserid(new ObjectId(user.get_id().toString()));
        for (Carts cart : c) {
            if (!cart.getIscheckedout()) {
                l = cri.findAllByCartid(new ObjectId(cart.get_id().toString()));
                for (Cartitems ci : l) {
                    Enrole enrole = new Enrole();
                    enrole.setCourseid(ci.getCourseid().toString());
                    enrole.setStudentid(user.get_id().toString());
                    enrole.setEnrollmentstatus("Enrolled");
                    System.out.println("enrole");
                    es.enrollStudent(enrole);
                }
            }
        }
    }
    private void updateStatustoCarts() {
        User user = us.getCurrentUserProfile();
        System.out.println(user.get_id().toString());
        List<Carts> c = cr.findAllByUserid(new ObjectId(user.get_id().toString()));
        for (Carts cart : c) {
            if (!cart.getIscheckedout()) {
                cart.setIscheckedout(true);
                System.out.println("true");
                cr.save(cart);
            }
        }
    }

}
