/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package models;

import java.util.Date;
import java.util.List;

/**
 *
 * @author WyvernP
 */
public class Order  extends Timestamp{
  private int id;
  private int account_id;
  private Date ship_date;
  private int process;
  private String name;
  private String phone;
  private int province_id;
  private int district_id;
  private int ward_id;
  private String details;
  private String delivery_type;
  private Long delivery_cost;
  private String method_type;
  private String payment_intent_id;
 private List<OrderDetail> order_details;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public int getAccount_id() {
    return account_id;
  }

  public void setAccount_id(int account_id) {
    this.account_id = account_id;
  }

  public Date getShip_date() {
    return ship_date;
  }

  public void setShip_date(Date ship_date) {
    this.ship_date = ship_date;
  }

  public int getProcess() {
    return process;
  }

  public void setProcess(int process) {
    this.process = process;
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

  public Long getDelivery_cost() {
    return delivery_cost;
  }

  public void setDelivery_cost(Long delivery_cost) {
    this.delivery_cost = delivery_cost;
  }

  public String getMethod_type() {
    return method_type;
  }

  @Override
  public String toString() {
    return "Order{" + "id=" + id + ", account_id=" + account_id + ", ship_date=" + ship_date + ", process=" + process + ", name=" + name + ", phone=" + phone + ", province_id=" + province_id + ", district_id=" + district_id + ", ward_id=" + ward_id + ", details=" + details + ", delivery_type=" + delivery_type + ", delivery_cost=" + delivery_cost + ", method_type=" + method_type + ", payment_intent_id=" + payment_intent_id + ", order_details=" + order_details + '}';
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

  public List<OrderDetail> getOrder_details() {
    return order_details;
  }

  public void setOrder_details(List<OrderDetail> order_details) {
    this.order_details = order_details;
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
  public Order(int id, int account_id, Date ship_date, int process, String name, String phone, int province_id, int district_id, int ward_id, String details, String delivery_type, Long delivery_cost, String method_type, String payment_intent_id, boolean active, Date created_at, Date modified_at, Date deleted_at, int modified_by) {
    super(active, created_at, modified_at, deleted_at, modified_by);
    this.id = id;
    this.account_id = account_id;
    this.ship_date = ship_date;
    this.process = process;
    this.name = name;
    this.phone = phone;
    this.province_id = province_id;
    this.district_id = district_id;
    this.ward_id = ward_id;
    this.details = details;
    this.delivery_type = delivery_type;
    this.delivery_cost = delivery_cost;
    this.method_type = method_type;
    this.payment_intent_id = payment_intent_id;
  }

  public Order(int id, int account_id, Date ship_date, int process, String name, String phone, int province_id, int district_id, int ward_id, String details, String delivery_type, Long delivery_cost, String method_type, String payment_intent_id) {
    this.id = id;
    this.account_id = account_id;
    this.ship_date = ship_date;
    this.process = process;
    this.name = name;
    this.phone = phone;
    this.province_id = province_id;
    this.district_id = district_id;
    this.ward_id = ward_id;
    this.details = details;
    this.delivery_type = delivery_type;
    this.delivery_cost = delivery_cost;
    this.method_type = method_type;
    this.payment_intent_id = payment_intent_id;
  }
  
}
