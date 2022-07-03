/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.product;

import DAO.AbstractDAO;
import DAO.product._interface.ICategoryDAO;
import helper.mapper.implement.CategoryMapper;
import java.util.List;
import models.Category;

/**
 *
 * @author WyvernP
 */
public class CategoryDAO extends AbstractDAO<Category> implements ICategoryDAO {

  @Override
  public int getCategoryId(String slug) {
   
    try {
      String sql = "SELECT * FROM category where slug = ?";
      return query(sql,new CategoryMapper(),slug).get(0).getId();
    } catch (Exception e) {
      System.out.println(e);
      return -1;

    }
 
  }

  @Override
  public List<Category> getAll() {
    try {
      String sql = "SELECT * FROM category";
      return query(sql,new CategoryMapper());
    } catch (Exception e) {
      return null;
    }
  }

  @Override
  public int addNewCategory(String name) {
    try {
      String slug = name.toLowerCase().replace(" ","_");
      String sql = "INSERT INTO category (name,slug) VALUES (?,?)";
      return insert(sql,name,slug);
    } catch (Exception e) {
      return -1;
    }
  }

  @Override
  public int updateCategory(int category_id, String newName) {
    try {
      String slug = newName.toLowerCase().replace(" ", "_");
      String sql = "UPDATE category SET name = ? , slug = ? WHERE id = ?";
      return update(sql,newName,slug,category_id);
    } catch (Exception e) {
      return -1;
    }
  }

  @Override
  public Category getById(int id) {
    try {
      String sql = "SELECT * FROM category WHERE id = ?";
      return query(sql,new CategoryMapper(),id).get(0);
    } catch (Exception e) {
      return null;
      }
  }
  
}
