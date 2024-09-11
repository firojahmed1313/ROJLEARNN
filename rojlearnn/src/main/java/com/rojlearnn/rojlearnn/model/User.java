package com.rojlearnn.rojlearnn.model;

import java.time.LocalDateTime;

import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "user")
public class User {
    private String username;
    private String email;
    private String password;
    private String role;
    private String profile_picture_url;
    private String phone_number;
    private String address;
    private boolean is_active;
    private LocalDateTime created_at = LocalDateTime.now();
    public User() {
    }
    public User(String username, String email, String password, String role, String profile_picture_url,
            String phone_number, String address) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.profile_picture_url = profile_picture_url;
        this.phone_number = phone_number;
        this.address = address;
        this.is_active = true;
    }
    
    @Override
    public String toString() {
        return "User [username=" + username + ", email=" + email + ", password=" + password + ", role=" + role
                + ", profile_picture_url=" + profile_picture_url + ", phone_number=" + phone_number + ", address="
                + address + ", is_active=" + is_active + ", created_at=" + created_at + "]";
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
    public String getProfile_picture_url() {
        return profile_picture_url;
    }
    public void setProfile_picture_url(String profile_picture_url) {
        this.profile_picture_url = profile_picture_url;
    }
    public String getPhone_number() {
        return phone_number;
    }
    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public boolean isIs_active() {
        return is_active;
    }
    public void setIs_active(boolean is_active) {
        this.is_active = is_active;
    }
    public LocalDateTime getCreated_at() {
        return created_at;
    }
    



}
