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
public class Product extends Timestamp {
    private int id;

  public int getCategory_id() {
    return category_id;
  }

  public void setCategory_id(int category_id) {
    this.category_id = category_id;
  }
    private String name;
    private String desc;
    private int price;
    private int stock;
    private String thumbnail;
    private Category category;
    private int category_id;

  public Product(int id, String name, String desc, int price, int stock, String thumbnail, int category_id) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.stock = stock;
    this.thumbnail = thumbnail;
    this.category_id = category_id;
  }

    public Product(int id, String name, String desc, int price, int stock, String thumbnail, Category category, boolean active, Date created_at, Date modified_at, Date deleted_at, int modified_by) {
        super(active, created_at, modified_at, deleted_at, modified_by);
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.stock = stock;
        this.thumbnail = thumbnail;
        this.category = category;
    }

    public Product(int id, String name, String desc, int price, int stock, String thumbnail, Category category) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.stock = stock;
        this.thumbnail = thumbnail;
        this.category = category;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
  @Override
  public String toString() {
    return "Product{" + "id=" + id + ", name=" + name + ", desc=" + desc + ", price=" + price + ", stock=" + stock + ", thumbnail=" + thumbnail + ", category=" + category + ", category_id=" + category_id + '}';
  }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
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
