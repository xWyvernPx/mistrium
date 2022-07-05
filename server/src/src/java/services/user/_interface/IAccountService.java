/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package services.user._interface;

import helper.list_return.ReturnList;
import helper.pagination.Pagination;
import java.util.List;
import javax.annotation.ManagedBean;
import models.Account;

/**
 *
 * @author WyvernP
 */

public interface IAccountService {
    Account login(String email,String password);
    Account register(String email,String password,boolean role);
    Account getMe(int id);
    Account getMe(String email);
 ReturnList<Account> getAll(Pagination pagination,String term);
   boolean blockUnblockAccount(int account_id);
}
