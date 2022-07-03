/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.product._interface;

import java.util.List;
import models.Category;

/**
 *
 * @author WyvernP
 */
public interface ICategoryDAO{
  int getCategoryId(String slug);
  List<Category> getAll();
  int addNewCategory(String name);
  int updateCategory(int category_id, String newName);
  Category getById (int id);
}
