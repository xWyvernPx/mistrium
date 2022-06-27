/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.user._interface;

import java.util.List;
import models.CartDetail;

/**
 *
 * @author WyvernP
 */
public interface  ICartDetailDAO {
      List<CartDetail> findAllCartDetail(int cartId);
      int getCartDetail(int cart_id,int product_id);
      int getCartDetail (int cart_detail_id);
} 
