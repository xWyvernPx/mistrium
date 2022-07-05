/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.user._interface;

import helper.pagination.OrderDateFilter;
import helper.pagination.Pagination;
import helper.read_request_body.PostOrderBody;
import java.util.List;
import models.Order;

/**
 *
 * @author WyvernP
 */
public interface IOrderDAO {
  int createOrder(PostOrderBody body , int account_id);
      Order getOrder (int order_id);
  List<Order> getAllOrderByUser(int account_id,Pagination pagination,OrderDateFilter filter,int status);
  int cancelOrder (int order_id);
  int reorder(int order_id);
  List<Order> getAll(Pagination pagination,OrderDateFilter filter,int status);
  int countAll (Pagination pagination,OrderDateFilter filter,int status);
}
