/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.user;

import DAO.AbstractDAO;
import DAO.user._interface.IAccountDetailDAO;
import helper.mapper.implement.AccountDetailMapper;
import models.AccountDetail;

/**
 *
 * @author WyvernP
 */
public class AccountDetailDAO extends AbstractDAO<AccountDetail> implements IAccountDetailDAO{

  @Override
  public AccountDetail getDetail(int account_id) {
    try {
      String sql = "SELECT * FROM account_detail WHERE account_id = ?";
      return query(sql,new AccountDetailMapper(),account_id).get(0);
    } catch (Exception e) {
      return null;
    }
  }
  
}
