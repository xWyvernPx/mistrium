/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package services.user._interface;

import models.Cart;

/**
 *
 * @author WyvernP
 */
public interface ICartService {
    Cart getCart(int account_id);
    Cart addCartItem (int account_id,int product_id,int quantity);
    Cart updateCartItem (int cart_detail_id , int quantity,int account_id);
    Cart removeCartItem (int cart_detail_id,int account_id);
    
}

     
