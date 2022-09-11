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
  public int upsert (AccountDetail detail){
      try {
          AccountDetail current = getDetail(detail.getAccount_id());
          if(current==null){
              String sql = "insert into account_detail (name,phone,gender,district,ward,province,account_id)\n" +
"values (?,?,?,?,?,?,?) ";
              return insert(sql,detail.getName(),detail.getPhone(),detail.isGender()?1:0,detail.getDistrict(),detail.getWard(),detail.getProvince(),detail.getAccount_id());
          }
          else {
              String sql = "Update account_detail  set [name] = ? , phone = ? , gender = ? , district = ? ,ward=?,province=? \n" +
"Where account_id = ?";
              return update(sql,detail.getName(),
                      detail.getPhone(),
                      detail.isGender() ? 1 : 0,
                      detail.getDistrict(),detail.getWard(),detail.getProvince(),detail.getAccount_id());
          }
      } catch (Exception e) {
          return -1;
      }
  }
  
}
