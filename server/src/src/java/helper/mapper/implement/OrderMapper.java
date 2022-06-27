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
import models.Order;

/**
 *
 * @author WyvernP
 */
public class OrderMapper implements RowMapper<Order> {

  @Override
  public Order map(ResultSet rs) {
    try { 
      return new Order(rs.getInt("id"),rs.getInt("account_id"),rs.getDate("ship_date"),rs.getInt("process"),rs.getString("name"),rs.getString("phone"),rs.getInt("province_id"),rs.getInt("district_id"),rs.getInt("ward_id"),rs.getString("details"),rs.getString("delivery_type"),rs.getLong("delivery_cost"),rs.getString("method_type"),rs.getString("payment_intent_id"));
    } catch (SQLException ex) {
      Logger.getLogger(OrderMapper.class.getName()).log(Level.SEVERE, null, ex);
      return null;
    }
  }
  
}
