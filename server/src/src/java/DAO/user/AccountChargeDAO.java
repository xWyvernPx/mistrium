/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.user;

import DAO.AbstractDAO;
import DAO.user._interface.IAccountChargeDAO;
import helper.mapper.implement.AccountChargeMapper;
import models.AccountCharge;

/**
 *
 * @author WyvernP
 */
public class AccountChargeDAO extends AbstractDAO<AccountCharge> implements IAccountChargeDAO {

  @Override
  public AccountCharge getOne(int account_id) {
    try {
      String sql ="SELECT * FROM account_charge WHERE account_id = ?";
      AccountCharge chargeInfo = query(sql,new AccountChargeMapper(),account_id).get(0);
      return chargeInfo;
    } catch (Exception e) {
      return null;
    }
  }

  @Override
  public AccountCharge getOneById(int account_charge_id) {
     try {
      String sql ="SELECT * FROM account_charge WHERE id = ?";
      AccountCharge chargeInfo = query(sql,new AccountChargeMapper(),account_charge_id).get(0);
      return chargeInfo;
    } catch (Exception e) {
      return null;
    }
  }

  @Override
  public int createAccountCharge(String customer_id, int account_id) {
    try {
        String sql = "INSERT INTO account_charge(account_id,default_payment,customer_id)\n" +
"VALUES (? , ? , ?)";
        return insert(sql,account_id,null,customer_id);
    } catch (Exception e) {
      return -1;
    }
  }

  @Override
  public int updateDefaultPaymentMethod(String default_payment, int account_id) {
    try {
        String sql = "UPDATE account_charge SET default_payment= ? WHERE account_id = ? ";
        return update(sql,default_payment,account_id);
    } catch (Exception e) {
      return -1;
    }
  }
  
}
