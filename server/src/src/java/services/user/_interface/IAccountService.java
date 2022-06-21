/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package services.user._interface;

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
}
