/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package helper.mapper.implement;

import helper.mapper.RowMapper;
import java.sql.ResultSet;
import models.Product;

/**
 *
 * @author WyvernP
 */
public class ProductMapper implements RowMapper<Product> {

  @Override
  public Product map(ResultSet resultSet) {
    try {
      Product product= new Product(resultSet.getInt("id"), resultSet.getString("name"), resultSet.getString("desc"), resultSet.getInt("price"), resultSet.getInt("stock"), resultSet.getString("thumbnail"), resultSet.getInt("category_id"));
      product.setActive(resultSet.getBoolean("active"));
      return product;
    } catch (Exception e) {
      return null;
    }
  }

}
