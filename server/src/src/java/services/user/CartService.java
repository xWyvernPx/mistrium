/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package services.user;

import DAO.user.CartDAO;
import DAO.user._interface.ICartDAO;
import models.Cart;
import models.CartDetail;
import services.user._interface.ICartService;

/**
 *
 * @author WyvernP
 */
public class CartService implements ICartService{
private ICartDAO cartDAO = new CartDAO();
  @Override
  public Cart getCart(int account_id) {
    try {
      return cartDAO.getCart(account_id);
    } catch (Exception e) {
      System.out.println(e);
      return null;
    }
  }

  @Override
  public Cart addCartItem(int account_id, int product_id, int quantity) {
     try {
      return cartDAO.insertItem(account_id, product_id, quantity);
    } catch (Exception e) {
       System.out.println(e);
       return null;
    }
  }

  @Override
  public Cart updateCartItem(int cart_detail_id, int quantity, int account_id) {
    try {
      if(quantity <= 0) {
        return this.removeCartItem(cart_detail_id, account_id);
      }else {
        return cartDAO.updateItem(cart_detail_id, quantity, account_id);
      }
    } catch (Exception e) {
      System.out.println(e);
      return null;
    }
  }

  @Override
  public Cart removeCartItem(int cart_detail_id, int account_id) {
    try {
      return cartDAO.removeItem(cart_detail_id, account_id);
    } catch (Exception e) {
      return null;
    }
  }
  
}
