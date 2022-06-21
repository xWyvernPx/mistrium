/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package services.user;

import DAO.user.AccountDAO;
import DAO.user._interface.IAccountDAO;
import javax.annotation.ManagedBean;
import javax.inject.Inject;
import models.Account;
import services.user._interface.IAccountService;

/**
 *
 * @author WyvernP
 */
@ManagedBean
public class AccountService implements IAccountService {
//  @Inject
  private IAccountDAO accountDAO ;

  public AccountService() {
    this.accountDAO = new AccountDAO();
  }
  
  
  @Override
  public Account login(String email, String password) {
    Account acc = accountDAO.findOne(email);
//    TODO : encrypted password
    if(acc!=null && acc.getPassword().equals(password)) return acc;
    else return null;
  }

  @Override
  public Account register(String email, String password, boolean role) {
    System.out.println("DI successfull");
    int id = accountDAO.create(email, password, role ? 1 : 0);
    System.out.println("id : "+id);
    return accountDAO.findOneById(id);
  }

  @Override
  public Account getMe(int id) {
    return accountDAO.findOneById(id);
  }
  @Override
  public Account getMe(String email){
    return accountDAO.findOne(email);
  }
  
}
