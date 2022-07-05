/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package services.product._interface;

import helper.list_return.ReturnList;
import helper.pagination.Pagination;
import models.Product;

/**
 *
 * @author WyvernP
 */
public interface IProductService {
    ReturnList<Product> getAll(Pagination pagination);
    Product getById (int id);
    ReturnList<Product> search(Pagination pagination,String term);
    ReturnList<Product> getByCategory(Pagination pagination,int category_id);
    ReturnList<Product> searchWithCategory(Pagination pagination,String term,String category_slug);
    int addNewProduct (Product product , int account_id);
    boolean updateProduct (Product product,int account_id);
    boolean toggleActive (int product_id);
}
