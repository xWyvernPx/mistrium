/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package helper.auth;

/**
 *
 * @author WyvernP
 */
public class Profile {
    String sub ;
    String picture;
    String email;
    boolean email_verified;

    public Profile(String sub, String picture, String email, boolean email_verified) {
        this.sub = sub;
        this.picture = picture;
        this.email = email;
        this.email_verified = email_verified;
    }

    public Profile() {
    }

    public String getSub() {
        return sub;
    }

    public void setSub(String sub) {
        this.sub = sub;
    }

    @Override
    public String toString() {
        return "Profile{" + "sub=" + sub + ", picture=" + picture + ", email=" + email + ", email_verified=" + email_verified + '}';
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isEmail_verified() {
        return email_verified;
    }

    public void setEmail_verified(boolean email_verified) {
        this.email_verified = email_verified;
    }
    
}
