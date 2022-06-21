/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package services.product._interface;

import DAO.product.CategoryDAO;
import DAO.product._interface.ICategoryDAO;

/**
 *
 * @author WyvernP
 */
public interface ICategoryService {
    int getCateId(String slug);
}
