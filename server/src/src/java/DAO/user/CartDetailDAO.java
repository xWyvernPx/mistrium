/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.user;

import DAO.AbstractDAO;
import DAO.user._interface.ICartDetailDAO;
import helper.mapper.implement.CartDetailMapper;
import java.util.List;
import models.CartDetail;

/**
 *
 * @author WyvernP
 */
public class CartDetailDAO extends AbstractDAO<CartDetail> implements ICartDetailDAO {

 @Override
  public List<CartDetail> findAllCartDetail(int cartId) {
    try {
      String sql ="select c.* , p.id as [productId] , p.name , p.[desc] , p.price,p.stock,p.thumbnail,p.category_id  from cart_detail c join product p on c.product_id = p.id "
              + "WHERE cart_id = ? AND c.active = 1 ";
      
      return query(sql,new CartDetailMapper(),cartId);
    } catch (Exception e) {
      System.out.println(e);
      return null;
    }
  }

  @Override
  public int getCartDetail(int cart_id, int product_id) {
    try {
      String sql = "select c.* , p.id as [productId] , p.name , p.[desc] , p.price,p.stock,p.thumbnail,p.category_id  from cart_detail c join product p on c.product_id = p.id "
              + "WHERE cart_id = ? AND c.active = 1  AND p.id = ?";
      return query(sql,new CartDetailMapper(),cart_id, product_id ).get(0).getId();
    } catch (Exception e) {
      System.out.println(e);
      return -1;
    }
  }

  @Override
  public int getCartDetail(int cart_detail_id) {
     try {
      String sql = "select c.* , p.id as [productId] , p.name , p.[desc] , p.price,p.stock,p.thumbnail,p.category_id  from cart_detail c join product p on c.product_id = p.id "
              + "WHERE c.id = ? AND c.active = 1  ";
      return query(sql,new CartDetailMapper(),cart_detail_id).get(0).getId();
    } catch (Exception e) {
      System.out.println(e);
      return -1;
    }
  }
}
