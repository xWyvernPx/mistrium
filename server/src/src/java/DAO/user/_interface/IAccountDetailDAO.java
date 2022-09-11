/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.user._interface;

import models.AccountDetail;

/**
 *
 * @author WyvernP
 */
public interface IAccountDetailDAO {
    AccountDetail getDetail(int account_id);
    int upsert(AccountDetail detail);
}
