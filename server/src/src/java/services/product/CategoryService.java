/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package services.product;

import DAO.product.CategoryDAO;
import DAO.product._interface.ICategoryDAO;
import java.util.List;
import models.Category;
import services.product._interface.ICategoryService;

/**
 *
 * @author WyvernP
 */
public class CategoryService implements ICategoryService {
  private ICategoryDAO categoryDAO = new CategoryDAO();

  @Override
  public int getCateId(String slug) {
    try {
       return categoryDAO.getCategoryId(slug);
    } catch (Exception e) {
      return -1;
    }
  }

  @Override
  public List<Category> getAll() {
    try {
       return categoryDAO.getAll();
    } catch (Exception e) {
    return null;
    }
  }

  @Override
  public int addNewCategory(String name) {
    try {
        return categoryDAO.addNewCategory(name);
    } catch (Exception e) {
    
    return -1;}
  }

  @Override
  public boolean updateCategory(int category_id, String newName) {
      try {
      return categoryDAO.updateCategory(category_id, newName) > 0;    } catch (Exception e) {
      return false;
    }
  }

  @Override
  public Category getById(int id) {
    try {
      return categoryDAO.getById(id);
    } catch (Exception e) {
      return null;
    }
  }
  
}
