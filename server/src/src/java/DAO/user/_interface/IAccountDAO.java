/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.user._interface;

import models.Account;

/**
 *
 * @author WyvernP
 */
public interface IAccountDAO {
    Account findOne(String email);
   int create(String email, String password, int role);
   Account findOneById(int id);
}
