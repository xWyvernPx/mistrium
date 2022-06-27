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
import models.AccountDetail;

/**
 *
 * @author WyvernP
 */
public class AccountDetailMapper implements RowMapper<AccountDetail>{

  @Override
  public AccountDetail map(ResultSet rs) {
    try {
      return new AccountDetail(rs.getInt("id"),rs.getString("name"),rs.getString("phone"),rs.getBoolean("gender"),rs.getInt("province"),rs.getInt("district"),rs.getInt("ward"),rs.getInt("account_id"));
    } catch (SQLException ex) {
      Logger.getLogger(AccountDetailMapper.class.getName()).log(Level.SEVERE, null, ex);
      return null;
    }
  }
  
}
