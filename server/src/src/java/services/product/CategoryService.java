/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package services.product;

import DAO.product.CategoryDAO;
import DAO.product._interface.ICategoryDAO;
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
  
}
