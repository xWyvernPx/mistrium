/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package helper.mapper.implement;

import helper.mapper.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import models.Category;

/**
 *
 * @author WyvernP
 */
public class CategoryMapper implements RowMapper<Category> {

  @Override
  public Category map(ResultSet resultSet) {
    try {
      return new Category(resultSet.getInt("id"),resultSet.getString("name"),resultSet.getString("slug"));
    } catch (SQLException ex) {
      System.out.println(ex);
      return null;
    }
  }
  
}
