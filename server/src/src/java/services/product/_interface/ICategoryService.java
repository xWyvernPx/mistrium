/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package services.product._interface;

import DAO.product.CategoryDAO;
import DAO.product._interface.ICategoryDAO;
import java.util.List;
import models.Category;

/**
 *
 * @author WyvernP
 */
public interface ICategoryService {
    int getCateId(String slug);
    List<Category> getAll();
     int addNewCategory(String name);
  boolean updateCategory(int category_id, String newName);
  Category getById (int id); 
}
