/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.user._interface;

import java.util.List;
import models.Cart;
import models.CartDetail;

/**
 *
 * @author WyvernP
 */
public interface ICartDAO {
    Cart getCart(int account_id);
    Cart insertItem(int account_id,int product_id, int quantity);
    Cart removeItem(int cartDetailId,int account_id);
    Cart updateItem(int cartDetailId, int quantity,int account_id);
    int getCartId (int account_id);
    void clearCart(int cart_id);
}
