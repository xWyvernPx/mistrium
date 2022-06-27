/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.user._interface;

import DAO.AbstractDAO;
import java.util.List;
import models.CartDetail;
import models.Order;
import models.OrderDetail;

/**
 *
 * @author WyvernP
 */
public interface IOrderDetailDAO  {
    List<OrderDetail>  findAllOrderDetails(int order_id);
    int cloneFromCartDetail (CartDetail cart_detail,int order_id);
}
