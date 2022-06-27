/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package helper.read_request_body;

/**
 *
 * @author WyvernP
 */
public class PostOrderBody {
    String name;
    String phone;
    int province_id;
    int district_id;
    int ward_id;
    String details;
    String delivery_type;
    String delivery_cost;
    String method_type;
    String payment_intent_id;

    @Override
    public String toString() {
      return "PostOrderBody{" + "name=" + name + ", phone=" + phone + ", province_id=" + province_id + ", district_id=" + district_id + ", ward_id=" + ward_id + ", details=" + details + ", delivery_type=" + delivery_type + ", delivery_cost=" + delivery_cost + ", method_type=" + method_type + ", payment_intent_id=" + payment_intent_id + '}';
    }

  public String getName() {
    return name;
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

  public int getProvince_id() {
    return province_id;
  }

  public void setProvince_id(int province_id) {
    this.province_id = province_id;
  }

  public int getDistrict_id() {
    return district_id;
  }

  public void setDistrict_id(int district_id) {
    this.district_id = district_id;
  }

  public int getWard_id() {
    return ward_id;
  }

  public void setWard_id(int ward_id) {
    this.ward_id = ward_id;
  }

  public String getDetails() {
    return details;
  }

  public void setDetails(String details) {
    this.details = details;
  }

  public String getDelivery_type() {
    return delivery_type;
  }

  public void setDelivery_type(String delivery_type) {
    this.delivery_type = delivery_type;
  }

  public String getDelivery_cost() {
    return delivery_cost;
  }

  public void setDelivery_cost(String delivery_cost) {
    this.delivery_cost = delivery_cost;
  }

  public String getMethod_type() {
    return method_type;
  }

  public void setMethod_type(String method_type) {
    this.method_type = method_type;
  }

  public String getPayment_intent_id() {
    return payment_intent_id;
  }

  public void setPayment_intent_id(String payment_intent_id) {
    this.payment_intent_id = payment_intent_id;
  }
    
  }
