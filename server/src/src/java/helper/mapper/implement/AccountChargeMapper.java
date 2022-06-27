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
import models.AccountCharge;

/**
 *
 * @author WyvernP
 */
public class AccountChargeMapper implements RowMapper<AccountCharge>{

  @Override
  public AccountCharge map(ResultSet resultSet) {
    try {
      return new AccountCharge(resultSet.getInt("id"),resultSet.getString("customer_id"),resultSet.getString("default_payment"));
    } catch (SQLException ex) {
      Logger.getLogger(AccountChargeMapper.class.getName()).log(Level.SEVERE, null, ex);
      return null;
    }
  }
  
}
