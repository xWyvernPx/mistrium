/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package helper.mapper.implement;

import helper.mapper.RowMapper;
import java.sql.ResultSet;
import models.Account;
/**
 *
 * @author WyvernP
 */
public class AccountMapper implements RowMapper<Account> {
    @Override
    public Account map(ResultSet resultSet) {
        try {
            Account rs = new Account();
            rs.setId(resultSet.getInt("id"));
            rs.setEmail(resultSet.getString("email"));
            rs.setPassword(resultSet.getString("password"));
            rs.setRole(resultSet.getBoolean("role"));
            rs.setActive(resultSet.getBoolean("active"));
            return rs;
        } catch (Exception e) {
            return null;
        }
    }
    
}
