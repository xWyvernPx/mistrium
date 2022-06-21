/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.user;

import DAO.AbstractDAO;
import DAO.user._interface.ICartDAO;
import DAO.user._interface.ICartDetailDAO;
import helper.mapper.implement.CartDetailMapper;
import helper.mapper.implement.CartMapper;
import java.util.ArrayList;
import java.util.List;
import models.Cart;
import models.CartDetail;

/**
 *
 * @author WyvernP
 */
public class CartDAO extends AbstractDAO<Cart> implements ICartDAO {

  private ICartDetailDAO cartDetailDAO = new CartDetailDAO();

  @Override
  public Cart getCart(int account_id) {
    try {
      String sql = "SELECT * FROM cart WHERE account_id = ?";
      List<Cart> carts = query(sql, new CartMapper(), account_id);
      int cartId;
      if (carts.isEmpty()) {
        String sql2 = "INSERT INTO cart (account_id,total) "
                + "VALUES ( ? , 0 ) ";
        cartId = insert(sql2, account_id);
        carts = query(sql, new CartMapper(), account_id);
      } else {
        cartId = carts.get(0).getId();
      }
      carts.get(0).setDetails((ArrayList<CartDetail>) cartDetailDAO.findAllCartDetail(cartId));
      return carts.get(0);
    } catch (Exception e) {
      System.out.println(e);
      return null;
    }
  }

  @Override
  public Cart insertItem(int account_id, int product_id, int quantity) {
    try {
      int cart_id = this.getCartId(account_id);

      int cart_detail_id = cartDetailDAO.getCartDetail(cart_id, product_id);
      System.out.println("cart" + cart_detail_id);
      if (cart_detail_id <= 0) {
        String sql = "INSERT INTO cart_detail (cart_id,product_id,quantity) values( ? , ? , ? )";
        int cartdetail_id = insert(sql, cart_id, product_id, quantity);
        if (cartdetail_id <= 0) {
          return null;
        }
      } else {
        String sql = "update  cart_detail set quantity = quantity + ? where id = ? ";
        int rs = update(sql, quantity, cart_detail_id);
        if (rs <= 0) {
          return null;
        }
      }

      return this.getCart(account_id);
    } catch (Exception e) {
      System.out.println(e);
      return null;
    }
  }

  @Override
  public Cart removeItem(int cartDetailId,int account_id) {
   try {
        int cart_detail_id = cartDetailDAO.getCartDetail(cartDetailId);
        if(cart_detail_id > 0) {
             String sql = "update  cart_detail set active = 0 where id = ? ";
        int rs = update(sql, cart_detail_id);
        if(rs <= 0) return null;
        return this.getCart(account_id);
        } 
        else return null;
    } catch (Exception e) {
      System.out.println(e);
      return null;
    }
  }

  @Override
  public Cart updateItem(int cartDetailId, int quantity,int account_id) {
    try {
        int cart_detail_id = cartDetailDAO.getCartDetail(cartDetailId);
        if(cart_detail_id > 0) {
             String sql = "update  cart_detail set quantity = ? where id = ? ";
        int rs = update(sql, quantity, cart_detail_id);
        if(rs <= 0) return null;
        return this.getCart(account_id);
        } 
        else return null;
    } catch (Exception e) {
      System.out.println(e);
      return null;
    }
  }

  @Override
  public int getCartId(int account_id) {
    try {
      String sql = "SELECT * FROM cart WHERE account_id = ?";
      return query(sql, new CartMapper(), account_id).get(0).getId();
    } catch (Exception e) {
      System.out.println(e);
      return -1;
    }
  }

}
