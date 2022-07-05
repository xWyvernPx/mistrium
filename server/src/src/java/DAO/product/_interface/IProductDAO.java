/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.product._interface;

import helper.pagination.Pagination;
import java.util.List;
import javax.annotation.ManagedBean;
import models.CartDetail;
import models.Product;

/**
 *
 * @author WyvernP
 */
@ManagedBean
public interface IProductDAO {
    List<Product> findAll(Pagination pagination);
    List<Product> findByCategory(Pagination pagination,int categoryId);
    Product findOneById(int productId);
    List<Product> search(Pagination pagination,String term);
    int countByTerm(String term);
    int countByCategory(int category_id);
    int countByCategoryTerm (String category_slug, String term);
    List<Product> searchWithCategory(Pagination pagination, String term , String category_slug);
    void updateStock(CartDetail cart_detail);
    int addNewProduct (Product product,int account_id);
    boolean updateProduct (Product product,int account_id);
    boolean toggleActive (int product_id);
}
