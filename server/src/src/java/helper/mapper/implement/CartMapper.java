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
import models.Cart;

/**
 *
 * @author WyvernP
 */
public class CartMapper implements RowMapper<Cart> {

  @Override
  public Cart map(ResultSet resultSet) {
    try {
      return new Cart(resultSet.getInt("id"),0,resultSet.getInt("account_id"));
    } catch (SQLException ex) {
      System.out.println(ex);
      return null;
    }
  }
  
}
