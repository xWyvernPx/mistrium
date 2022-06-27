/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.user._interface;

import models.AccountCharge;

/**
 *
 * @author WyvernP
 */
public interface IAccountChargeDAO {
  AccountCharge getOne(int account_id);
  AccountCharge getOneById(int account_charge_id);
  int createAccountCharge(String customer_id,int account_id);
  int updateDefaultPaymentMethod(String default_payment,int account_id);
  
}
