package com.rojlearnn.rojlearnn.model.Cart;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "carts")
public class Carts {
    private ObjectId _id;
    private ObjectId userid;
    private double totalprice;
    private boolean ischeckedout;
    private LocalDateTime created_at = LocalDateTime.now();
    private LocalDateTime updated_at = LocalDateTime.now();

    public Carts() {

    }

    public Carts(String userid, double totalprice, boolean ischeckedout) {
        this.userid = new ObjectId(userid) ;// userid;
        this.totalprice = totalprice;
        this.ischeckedout = ischeckedout;
    }

    public String get_id() {
        return _id.toString();
    }

    public void set_id(String _id) {
        this._id = new ObjectId(_id) ;// _id;
    }

    public String getUserid() {
        return userid.toString();
    }

    public void setUserid(String userid) {
        this.userid = new ObjectId(userid) ;// userid;
    }

    public double getTotalprice() {
        return totalprice;
    }

    public void setTotalprice(double totalprice) {
        this.totalprice = totalprice;
    }

    public boolean getIscheckedout() {
        return ischeckedout;
    }

    public void setIscheckedout(boolean ischeckedout) {
        this.ischeckedout = ischeckedout;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }

    public LocalDateTime getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(LocalDateTime updated_at) {
        this.updated_at = updated_at;
    }

	@Override
	public String toString() {
		return "Carts [userid=" + userid + ", totalprice=" + totalprice + ", ischeckedout=" + ischeckedout
				+ ", created_at=" + created_at + ", updated_at=" + updated_at + "]";
	}
    

}
