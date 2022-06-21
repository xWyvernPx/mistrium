/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.product;

import DAO.AbstractDAO;
import DAO.product._interface.ICategoryDAO;
import helper.mapper.implement.CategoryMapper;
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
  
}
