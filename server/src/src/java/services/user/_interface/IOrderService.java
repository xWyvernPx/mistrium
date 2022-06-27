/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package services.user._interface;

import helper.read_request_body.PostOrderBody;
import models.Order;

/**
 *
 * @author WyvernP
 */
public interface IOrderService {
  Order createOrder(PostOrderBody payload,int account_id);
  
}
