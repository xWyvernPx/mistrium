/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package services.user;

import DAO.product.ProductDAO;
import DAO.product._interface.IProductDAO;
import DAO.user.CartDAO;
import DAO.user.OrderDAO;
import DAO.user.OrderDetailDAO;
import DAO.user._interface.ICartDAO;
import DAO.user._interface.IOrderDAO;
import DAO.user._interface.IOrderDetailDAO;
import helper.read_request_body.PostOrderBody;
import models.Cart;
import models.Order;
import services.user._interface.IOrderService;

/**
 *
 * @author WyvernP
 */
public class OrderService implements IOrderService {

  private IProductDAO productDAO = new ProductDAO(); 
  private ICartDAO cartDAO = new CartDAO();
  private IOrderDAO orderDAO = new OrderDAO();
  private IOrderDetailDAO orderDetailDAO = new OrderDetailDAO();
  
  
  @Override
  public Order createOrder(PostOrderBody payload, int account_id) {
    System.out.println(payload);
    int order_id =orderDAO.createOrder(payload, account_id);
    System.out.println(order_id + " this is order _id");
    Cart cart = cartDAO.getCart(account_id);
    cart.getDetails().forEach(cart_detail -> {
      System.out.println(cart_detail.getId());
      orderDetailDAO.cloneFromCartDetail(cart_detail, order_id);
      productDAO.updateStock(cart_detail);
    });
    cartDAO.clearCart(cart.getId());
    return orderDAO.getOrder(order_id);
    
  }
  
}
