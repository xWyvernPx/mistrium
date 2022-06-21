/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.user;

import DAO.AbstractDAO;
import helper.ConnectDb;
import java.lang.annotation.Target;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import javax.inject.Inject;
import DAO.user._interface.IAccountDAO;
import helper.mapper.implement.AccountMapper;
import models.Account;

/**
 *
 *
 *
 * @author WyvernP
 */
public class AccountDAO extends AbstractDAO<Account> implements IAccountDAO {

  public AccountDAO() {
    super();
  }

  public ArrayList<Object> findAll() {
    Connection cn = null;
    PreparedStatement ps = null;
    ResultSet rs = null;

    try {
      cn = ConnectDb.getConnection();
    } catch (Exception e) {
      //TODO: handle exception
    }
    return null;
  }

  @Override
  public Account findOne(String email) {
    try {
      return query("SELECT * FROM account WHERE email = ? ", new AccountMapper(), email).get(0);
    } catch (Exception e) {
      //TODO: handle exception
      return null;
    }
  }

  @Override
  public int create(String email, String password, int role) {
    try {
      return insert("  INSERT INTO	account (email,password,role)\n"
              + "  values (?,?,?)", email, password, role);
    } catch (Exception e) {
      return -1;
    }
  }

  @Override
  public Account findOneById(int id) {
    try {
      return query("SELECT * FROM account WHERE id = ? ", new AccountMapper(), id).get(0);
    } catch (Exception e) {
      //TODO: handle exception
      return null;
    }
  }
  
  
}
