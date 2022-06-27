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
public class OrderDetail extends Timestamp {
      private int id;
     private int product_id;
    private Product product;
    private int quantity;

  public OrderDetail(int id, int product_id, Product product, int quantity, boolean active, Date created_at, Date modified_at, Date deleted_at, int modified_by) {
    super(active, created_at, modified_at, deleted_at, modified_by);
    this.id = id;
    this.product_id = product_id;
    this.product = product;
    this.quantity = quantity;
  }

  public OrderDetail(int id, int product_id, Product product, int quantity) {
    this.id = id;
    this.product_id = product_id;
    this.product = product;
    this.quantity = quantity;
  }

  public OrderDetail(int id, int product_id, int quantity) {
    this.id = id;
    this.product_id = product_id;
    this.quantity = quantity;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public int getProduct_id() {
    return product_id;
  }

  public void setProduct_id(int product_id) {
    this.product_id = product_id;
  }

  public Product getProduct() {
    return product;
  }

  public void setProduct(Product product) {
    this.product = product;
  }

  public int getQuantity() {
    return quantity;
  }

  public void setQuantity(int quantity) {
    this.quantity = quantity;
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

}
