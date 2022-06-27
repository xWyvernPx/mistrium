/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package models;

import java.util.Date;

/**
 *
 * @author WyvernP
 */
public class AccountDetail extends Timestamp {
    private int id;
     private String name;
     private String phone;
     private boolean gender;
     private int province;
     private int district;
     private int ward;
     private int account_id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

  @Override
  public String toString() {
    return "AccountDetail{" + "id=" + id + ", name=" + name + ", phone=" + phone + ", gender=" + gender + ", province=" + province + ", district=" + district + ", ward=" + ward + ", account_id=" + account_id + '}';
  }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public boolean isGender() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    public int getProvince() {
        return province;
    }

    public void setProvince(int province) {
        this.province = province;
    }

    public int getDistrict() {
        return district;
    }

    public void setDistrict(int district) {
        this.district = district;
    }

    public int getWard() {
        return ward;
    }

    public void setWard(int ward) {
        this.ward = ward;
    }

    public int getAccount_id() {
        return account_id;
    }

    public void setAccount_id(int account_id) {
        this.account_id = account_id;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public Date getModified_at() {
        return modified_at;
    }

    public void setModified_at(Date modified_at) {
        this.modified_at = modified_at;
    }

    public Date getDeleted_at() {
        return deleted_at;
    }

    public void setDeleted_at(Date deleted_at) {
        this.deleted_at = deleted_at;
    }

    public int getModified_by() {
        return modified_by;
    }

    public void setModified_by(int modified_by) {
        this.modified_by = modified_by;
    }

    public AccountDetail(int id, String name, String phone, boolean gender, int province, int district, int ward, int account_id, boolean active, Date created_at, Date modified_at, Date deleted_at, int modified_by) {
        super(active, created_at, modified_at, deleted_at, modified_by);
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.gender = gender;
        this.province = province;
        this.district = district;
        this.ward = ward;
        this.account_id = account_id;
    }

    public AccountDetail(int id, String name, String phone, boolean gender, int province, int district, int ward, int account_id) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.gender = gender;
        this.province = province;
        this.district = district;
        this.ward = ward;
        this.account_id = account_id;
    }
     
}
