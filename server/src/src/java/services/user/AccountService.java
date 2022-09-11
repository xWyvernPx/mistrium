/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package services.user;

import DAO.user.AccountChargeDAO;
import DAO.user.AccountDAO;
import DAO.user.AccountDetailDAO;
import DAO.user._interface.IAccountChargeDAO;
import DAO.user._interface.IAccountDAO;
import DAO.user._interface.IAccountDetailDAO;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Customer;
import com.stripe.param.CustomerCreateParams;
import helper.list_return.ReturnList;
import helper.pagination.Pagination;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.annotation.ManagedBean;
import javax.inject.Inject;
import models.Account;
import models.AccountCharge;
import models.AccountDetail;
import services.user._interface.IAccountService;

/**
 *
 * @author WyvernP
 */
@ManagedBean
public class AccountService implements IAccountService {
//  @Inject

  private IAccountDAO accountDAO;
  private IAccountDetailDAO accountDetailDAO = new AccountDetailDAO();
  private IAccountChargeDAO accountChargeDAO = new AccountChargeDAO();

  public AccountService() {
    this.accountDAO = new AccountDAO();
    Stripe.apiKey = "sk_test_51KrmUOGni8Rz7mdfrZEMv15EPApRPCuq67WBzQiXRbEA4oN9zHzmRedlUCLYQiUoG50kP4SjtucT2jRp4HlygMfV00Rs2RdHyk";
  }

  @Override
  public Account login(String email, String password) {
    Account acc = accountDAO.findOne(email);
//    TODO : encrypted password
    if (acc != null && acc.getPassword().equals(password)) {
      return acc;
    } else {
      return null;
    }
  }

  @Override
  public Account register(String email, String password, boolean role) {
    System.out.println("DI successfull");
    int id = accountDAO.create(email, password, role ? 1 : 0);
    System.out.println("id : " + id);
    return accountDAO.findOneById(id);
  }

  @Override
  public Account getMe(int id) {
    try {
      Account account = accountDAO.findOneById(id);
      System.out.println(account);
      AccountDetail detail = accountDetailDAO.getDetail(id);
//      System.out.println(detail);
      AccountCharge charge = accountChargeDAO.getOne(id);
//      System.out.println(charge);
      if (charge == null || charge.getCustomer_id() == null || charge.getCustomer_id().isEmpty()) {
        CustomerCreateParams params = CustomerCreateParams.builder()
                .setEmail(account.getEmail())
                .build();
        Customer customer = Customer.create(params);
        System.out.println(customer);
        int account_charge_id = accountChargeDAO.createAccountCharge(customer.getId(), id);
        charge = accountChargeDAO.getOneById(account_charge_id);
      }
      account.setAccount_charge(charge);
      account.setAccount_detail(detail);
    return account;
      }catch (StripeException ex) {
        System.out.println("oke here");
        System.out.println(ex);
        return null;
      }
    catch(Exception e) {
      System.out.println(e);
      return null;
    }
    }
    @Override
  public Account getMe(String email) {
    return accountDAO.findOne(email);
  }

  @Override
  public ReturnList<Account> getAll(Pagination pagination, String term) {
    List<Account> accounts = accountDAO.getAll(pagination, term);
    accounts.forEach(account -> {
        account.setAccount_charge(accountChargeDAO.getOne(account.getId()));
        account.setAccount_detail(accountDetailDAO.getDetail(account.getId()));
    });
    int count = accountDAO.countAll(pagination, term);
    pagination.setTotal(count);
    pagination.setTotal_pages(count/pagination.getLimit()+1);
    return new ReturnList(accounts,pagination);
  }

  @Override
  public boolean blockUnblockAccount(int account_id) {
    return accountDAO.blockUnblockAccount(account_id);
  }
  public boolean updateProfile(AccountDetail detail) {
      return accountDetailDAO.upsert(detail) > 0 ;
  }
}
 

  


        

