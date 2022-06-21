/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package models;

import java.util.ArrayList;
import java.util.Date;

/**
 *
 * @author WyvernP
 */
public class Cart extends Timestamp {
    private int id ;
    private int total;
    private int accound_id;
    private ArrayList<CartDetail> details;

  public int getAccound_id() {
    return accound_id;
  }

  public void setAccound_id(int accound_id) {
    this.accound_id = accound_id;
  }

  public Cart(int id, int total, int accound_id) {
    this.id = id;
    this.total = total;
    this.accound_id = accound_id;
  }
    
  public Cart(int id, int total, int accound_id, ArrayList<CartDetail> details) {
    this.id = id;
    this.total = total;
    this.accound_id = accound_id;
    this.details = details;
  }

    public Cart(int id, int total, ArrayList<CartDetail> details, boolean active, Date created_at, Date modified_at, Date deleted_at, int modified_by) {
        super(active, created_at, modified_at, deleted_at, modified_by);
        this.id = id;
        this.total = total;
        this.details = details;
    }

    public Cart(int id, int total, ArrayList<CartDetail> details) {
        this.id = id;
        this.total = total;
        this.details = details;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public ArrayList<CartDetail> getDetails() {
        return details;
    }

    public void setDetails(ArrayList<CartDetail> details) {
        this.details = details;
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

  @Override
  public String toString() {
    return "Cart{" + "id=" + id + ", total=" + total + ", accound_id=" + accound_id + ", details=" + details + '}';
  }
    
}

