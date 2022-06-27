/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.user._interface;

import helper.read_request_body.PostOrderBody;
import models.Order;

/**
 *
 * @author WyvernP
 */
public interface IOrderDAO {
  int createOrder(PostOrderBody body , int account_id);
      Order getOrder (int order_id);

}
