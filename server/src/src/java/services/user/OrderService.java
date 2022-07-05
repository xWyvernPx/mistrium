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
import helper.list_return.ReturnList;
import helper.pagination.OrderDateFilter;
import helper.pagination.Pagination;
import helper.read_request_body.PostOrderBody;
import java.util.List;
import models.Cart;
import models.Order;
import models.OrderDetail;
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
    int order_id = orderDAO.createOrder(payload, account_id);
    System.out.println(order_id + " this is order _id");
    Cart cart = cartDAO.getCart(account_id);
    cart.getDetails().forEach((cart_detail) -> {
      System.out.println(cart_detail.getId());
      orderDetailDAO.cloneFromCartDetail(cart_detail, order_id);
      productDAO.updateStock(cart_detail);
    });
    cartDAO.clearCart(cart.getId());
    return orderDAO.getOrder(order_id);

  }

  @Override
  public List<Order> getAllOrder(int account_id, Pagination pagination, OrderDateFilter filter, int status) {
    try {
      List<Order> orders = orderDAO.getAllOrderByUser(account_id, pagination, filter, status);
      orders.forEach(order->{
        List<OrderDetail> details = orderDetailDAO.findAllOrderDetails(order.getId());
        order.setOrder_details(details);
      });
      return orders;
    } catch (Exception e) {
      System.out.println(e);
      return null;
    }
  }

  @Override
  public ReturnList<Order> getAllOrderAdmin(Pagination pagination, OrderDateFilter filter, int status) {
   try {
      List<Order> orders = orderDAO.getAll(pagination, filter, status);
      orders.forEach(order->{
        List<OrderDetail> details = orderDetailDAO.findAllOrderDetails(order.getId());
        order.setOrder_details(details);
      });
      int count = orderDAO.countAll(pagination, filter, status);
      pagination.setTotal(count);
      return new ReturnList(orders,pagination);
    } catch (Exception e) {
      System.out.println(e);
      return null;
    }
  }

  @Override
  public int cancelOrder(int order_id) {
    try {
       int response = orderDAO.cancelOrder(order_id);
       return response;
    } catch (Exception e) {
      return -1;
    }
  }

  @Override
  public int reorder(int order_id) {
    try {
      return orderDAO.reorder(order_id);
    } catch (Exception e) {
      return -1;
    }
  }
}
