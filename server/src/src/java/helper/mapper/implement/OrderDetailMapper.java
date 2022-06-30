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
import models.CartDetail;
import models.OrderDetail;
import models.Product;

/**
 *
 * @author WyvernP
 */
public class OrderDetailMapper implements RowMapper<OrderDetail> {

  @Override
  public OrderDetail map(ResultSet resultSet) {
    try {
      Product p = new Product(resultSet.getInt("productId"),resultSet.getString("name"),resultSet.getString("desc"),resultSet.getInt("price"),resultSet.getInt("stock"),resultSet.getString("thumbnail"),resultSet.getInt("category_id"));
    return  new OrderDetail(resultSet.getInt("id"),p.getId(),p,resultSet.getInt("quantity"));
    } catch (SQLException ex) {
      Logger.getLogger(CartDetailMapper.class.getName()).log(Level.SEVERE, null, ex);
      return null;
    }
  }
  
}
