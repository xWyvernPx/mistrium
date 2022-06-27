/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.user;

import DAO.AbstractDAO;
import DAO.user._interface.IOrderDetailDAO;
import java.util.List;
import models.CartDetail;
import models.OrderDetail;

/**
 *
 * @author WyvernP
 */
public class OrderDetailDAO extends AbstractDAO<OrderDetail> implements IOrderDetailDAO{

  @Override
  public List<OrderDetail> findAllOrderDetails(int order_id) {
    return null;
  }

  @Override
  public int cloneFromCartDetail(CartDetail cart_detail,int order_id) {
    try {
      String url = "INSERT INTO [order_detail] (order_id,product_id,quantity)\n" +
"VALUES (?,?,?)";
      return insert(url,order_id,cart_detail.getProduct().getId(),cart_detail.getQuantity());
    } catch (Exception e) {
      return -1;
    }
  }

  
  
}
