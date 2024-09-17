package com.rojlearnn.rojlearnn.model.Cart;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cartitems")
public class Cartitems {
  private ObjectId _id;
  private ObjectId cartid;
  private ObjectId courseid;
  private ObjectId userid;
  private double price;
  private LocalDateTime created_at = LocalDateTime.now();

  public Cartitems() {}

  public Cartitems(String cartid, String courseid, String userid, double price) {
    this.cartid = new ObjectId(cartid) ;// cartid;
    this.courseid = new ObjectId(courseid) ;// courseid;
    this.userid = new ObjectId(userid) ;// userid;
    this.price = price;
  }

  public String get_id() {
    return _id.toString();
  } 

  public void set_id(ObjectId _id) {
    this._id = _id;
  }

  public String getCartid() {
    return cartid.toString();
  }

  public void setCartid(String cartid) {
    this.cartid = new ObjectId(cartid) ;// cartid;
  }

  public String getCourseid() {
    return courseid.toString();
  }

  public void setCourseid(String courseid) {
    this.courseid = new ObjectId(courseid) ;// courseid;
  }

  public String getUserid() {
    return userid.toString();
  }

  public void setUserid(String userid) {
    this.userid = new ObjectId(userid) ;// userid;
  }

  public double getPrice() {
    return price;
  } 

  public void setPrice(double price) {
    this.price = price;
  }

  public LocalDateTime getCreated_at() {
    return created_at;
  }

  public void setCreated_at(LocalDateTime created_at) {
    this.created_at = created_at;
  }

  @Override
  public String toString() {
    return "Cartitems [_id=" + _id + ", cartid=" + cartid + ", courseid=" + courseid + ", userid=" + userid
        + ", price=" + price + ", created_at=" + created_at + "]";
  }
}
