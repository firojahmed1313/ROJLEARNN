package com.rojlearnn.rojlearnn.model.Cart;

public class PaymentData {
    private String orderid;
    private String paymentid;
    private String signature;

    public PaymentData(String orderid, String paymentid, String signature) {
        this.orderid = orderid;
        this.paymentid = paymentid;
        this.signature = signature;
    }

    public String getOrderid() {
        return orderid;
    }

    public String getPaymentid() {
        return paymentid;
    }

    public String getSignature() {        
        return signature;
    }   

    public void setSignature(String signature) {
        this.signature = signature;
    }

    public void setOrderid(String orderid) {
        this.orderid = orderid;
    }

    public void setPaymentid(String paymentid) {
        this.paymentid = paymentid;
    }
}
