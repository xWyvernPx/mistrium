/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.user;

import DAO.AbstractDAO;
import DAO.user._interface.IOrderDAO;
import helper.mapper.implement.OrderMapper;
import helper.read_request_body.PostOrderBody;
import java.text.SimpleDateFormat;
import java.util.Date;
import models.Order;

/**
 *
 * @author WyvernP
 */
public class OrderDAO extends AbstractDAO<Order> implements IOrderDAO {

  @Override
  public int createOrder(PostOrderBody body, int account_id) {
    try {
      String url = "insert into [order] (account_id,ship_date,name,phone,province_id,district_id,ward_id,details,delivery_type,delivery_cost,method_type,payment_intent_id)\n" +
"VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
      int order_id = insert(url,account_id,new SimpleDateFormat().format(new Date()),body.getName(),body.getPhone(),body.getProvince_id(),body.getDistrict_id(),body.getWard_id(),body.getDetails(),body.getDelivery_type(),body.getDelivery_cost(),body.getMethod_type(),body.getPayment_intent_id());
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
  
}
