/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package services.product;

import DAO.product.ProductDAO;
import DAO.product._interface.IProductDAO;
import helper.list_return.ReturnList;
import helper.pagination.Pagination;
import java.util.List;
import javax.inject.Inject;
import models.Product;
import services.product._interface.IProductService;

/**
 *
 * @author WyvernP
 */
public class ProductService implements IProductService {
//  @Inject 
  private IProductDAO productDAO = new ProductDAO();

  @Override
  public ReturnList<Product> getAll(Pagination pagination) {
    try {
      List<Product> products = productDAO.findAll(pagination);
      System.out.println(products + "products");
      int count = productDAO.countByTerm("");
      pagination.setTotal(count);
      pagination.setTotal_pages((int)(count/pagination.getLimit()+1));
      return new ReturnList<Product>(products,pagination);
    } catch (Exception e) {
      System.out.println(e);
      return null;
    }
  }

  @Override
  public Product getById(int id) {
    Product prod = productDAO.findOneById(id);
      System.out.println("service " + prod);
      return prod;
  }

  @Override
  public ReturnList<Product> search(Pagination pagination, String term) {
 try {
      List<Product> products = productDAO.search(pagination,term);
      System.out.println(products + "products");
      int count = productDAO.countByTerm(term);
      pagination.setTotal(count);
      pagination.setTotal_pages((int)(count/pagination.getLimit()+1));
      return new ReturnList<Product>(products,pagination);
    } catch (Exception e) {
      System.out.println(e);
      return null;
    }
  }

  @Override
  public ReturnList<Product> getByCategory(Pagination pagination, int category_id) {
//    try {
//      List<Product> products = productDAO.search(pagination,term);
//      System.out.println(products + "products");
//      int count = productDAO.countByTerm(term);
//      pagination.setTotal(count);
//      pagination.setTotal_pages((int)(count/pagination.getLimit()+1));
//      return new ReturnList<Product>(products,pagination);
//    } catch (Exception e) {
//      System.out.println(e);
//      return null;
//    }
return null;
  }

  @Override
  public ReturnList<Product> searchWithCategory(Pagination pagination, String term,String category_slug) {
    try {
      List<Product> products = productDAO.searchWithCategory(pagination,term,category_slug);
      int count = productDAO.countByCategoryTerm(category_slug,term);
      pagination.setTotal(count);
      pagination.setTotal_pages((int)(count/pagination.getLimit()+1));
      return new ReturnList<Product>(products,pagination);
    } catch (Exception e) {
      System.out.println(e);
      return null;
    }
  }

  @Override
  public int addNewProduct(Product product, int account_id) {
    return productDAO.addNewProduct(product, account_id);
  }

  @Override
  public boolean updateProduct(Product product, int account_id) {
  return productDAO.updateProduct(product, account_id);
  }

  @Override
  public boolean toggleActive(int product_id) {
    return productDAO.toggleActive(product_id);
  }
  
}
