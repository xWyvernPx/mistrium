/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.user;

import DAO.AbstractDAO;
import DAO.user._interface.IOrderDAO;
import helper.mapper.implement.OrderMapper;
import helper.pagination.OrderDateFilter;
import helper.pagination.Pagination;
import helper.read_request_body.PostOrderBody;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import models.Order;

/**
 *
 * @author WyvernP
 */
public class OrderDAO extends AbstractDAO<Order> implements IOrderDAO {

  @Override
  public int createOrder(PostOrderBody body, int account_id) {
    try {
        System.out.println(body);
      String url = "insert into [order] (account_id,ship_date,name,phone,province_id,district_id,ward_id,details,delivery_type,delivery_cost,method_type,payment_intent_id)\n" +
"VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
      int order_id = insert(url,account_id,new SimpleDateFormat().format(new Date()),body.getName(),body.getPhone(),body.getProvince_id(),body.getDistrict_id(),body.getWard_id(),body.getDetails(),body.getDelivery_type(),body.getDelivery_cost(),body.getMethod_type(),body.getPayment_intent_id());
        System.out.println(order_id);
      return order_id;
    } catch (Exception e) {
      return -1;
    }
  }

  @Override
  public Order getOrder(int order_id) {
    try {
      String sql = "SELECT * FROM [order] WHERE id = ?";
      return query(sql,new OrderMapper(),order_id).get(0);
    } catch (Exception e) {
      return null;
    }
  }

  @Override
  public List<Order> getAllOrderByUser(int account_id, Pagination pagination, OrderDateFilter filter,int status) {
    try {
      String status_range = status == -1 ? "(0,1,2,3)" : status == 0 ? "(0)" :status == 1 ? "(1)" : status == 2 ? "(2)" : "(3)";
      int skip = (pagination.getPage()-1) * pagination.getLimit();
      String sql = "SELECT * FROM [order] WHERE account_id = ?  AND created_at Between ? AND ? AND process in "+status_range+" ORDER BY created_at desc OFFSET ? ROWS FETCH NEXT ? ROWS ONLY";
      
    
      return query(sql,new OrderMapper(),account_id,filter.getFrom(),filter.getTo(),skip,pagination.getLimit());
    } catch (Exception e) {
      return null;
    }
  }

  @Override
  public int cancelOrder(int order_id) {
    try {
      String sql =  "UPDATE [order] SET process = 0 WHERE id = ?";
      return update(sql,order_id);
    } catch (Exception e) {
      System.out.println("loi tai day " +e.getMessage());
      return -1;
    }
  }

  @Override
  public int reorder(int order_id) {
     try {
      String sql =  "UPDATE [order] SET process = 1 , created_at = ? WHERE id = ?";
      return update(sql,new SimpleDateFormat().format(new Date()),order_id);
    } catch (Exception e) {
      return -1;
    }
  }

  @Override
  public List<Order> getAll(Pagination pagination, OrderDateFilter filter, int status) {
try {
      String status_range = status == -1 ? "(0,1,2,3)" : status == 0 ? "(0)" :status == 1 ? "(1)" : status == 2 ? "(2)" : "(3)";
      int skip = (pagination.getPage()-1) * pagination.getLimit();
      String sql = "SELECT * FROM [order] WHERE  created_at Between ? AND ? AND process in "+status_range+" ORDER BY created_at desc OFFSET ? ROWS FETCH NEXT ? ROWS ONLY";
      
    
      return query(sql,new OrderMapper(),filter.getFrom(),filter.getTo(),skip,pagination.getLimit());
    } catch (Exception e) {
      return null;
    }   
  }

  @Override
  public int countAll(Pagination pagination, OrderDateFilter filter, int status) {
    try {
       String status_range = status == -1 ? "(0,1,2,3)" : status == 0 ? "(0)" :status == 1 ? "(1)" : status == 2 ? "(2)" : "(3)";
      int skip = (pagination.getPage()-1) * pagination.getLimit();
      String sql = "SELECT COUNT(*) FROM [order] WHERE  created_at Between ? AND ? AND process in "+status_range+"" ;
      return queryScalar(sql,filter.getFrom(),filter.getTo());
    } catch (Exception e) {
      return -1;
    }
  }
  
}
