/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO.product;

import DAO.product._interface.IProductDAO;
import helper.pagination.Pagination;
import java.util.List;
import models.Product;
import DAO.AbstractDAO;
import helper.mapper.implement.ProductMapper;
import javax.annotation.ManagedBean;

/**
 *
 * @author WyvernP
 */
@ManagedBean
public class ProductDAO extends AbstractDAO<Product>  implements IProductDAO {

  @Override
  public List<Product> findAll(Pagination pagination) {
    String sql = "SELECT * FROM product ORDER BY "+pagination.getOrder_by()+" "+pagination.getOrder()+" OFFSET ? ROWS FETCH NEXT ? ROWS ONLY";
    int skip = (pagination.getPage()-1)*pagination.getLimit();   
    return query(sql, new ProductMapper(),skip,pagination.getLimit());
  }

  @Override
  public List<Product> findByCategory(Pagination pagination, int categoryId) {
    String sql = "SELECT * FROM product WHERE category_id = ? ORDER BY "+pagination.getOrder_by()+" "+pagination.getOrder()+" OFFSET ? ROWS FETCH NEXT ? ROWS ONLY";
    int skip = (pagination.getPage()-1)*pagination.getLimit();   
    return query(sql, new ProductMapper(),categoryId,skip,pagination.getLimit());
  }

  @Override
  public Product findOneById(int productId) {
     String sql = "SELECT * FROM product WHERE id = ?  ";
    return query(sql, new ProductMapper(),productId).get(0);
  }

  @Override
  public List<Product> search(Pagination pagination,String term) {
     String sql = "SELECT * FROM product WHERE name like ? ORDER BY "+pagination.getOrder_by()+" "+pagination.getOrder()+" OFFSET ? ROWS FETCH NEXT ? ROWS ONLY";
     String formatTerm = "%"+term+"%";
    int skip = (pagination.getPage()-1)*pagination.getLimit();   
    return query(sql, new ProductMapper(),formatTerm,skip,pagination.getLimit());
  }

  @Override
  public int countByTerm(String term) {
    String sql = "SELECT COUNT(*) FROM product WHERE name like ? ";
     String formatTerm = "%"+term+"%";  
    return queryScalar(sql,formatTerm);
  }

  @Override
  public int countByCategory(int category_id) {
    String sql = "SELECT COUNT(*) FROM product WHERE category_id = ? ";
    return queryScalar(sql,category_id);
  }

  @Override
  public int countByCategoryTerm(String category_slug, String term) {
   String sql = "SELECT COUNT(*) FROM product p JOIN category c on p.category_id = c.id WHERE c.slug = ? AND p.name like ? ";
   String formatTerm = "%"+term+"%";  
    return queryScalar(sql,category_slug,formatTerm);
  }

  @Override
  public List<Product> searchWithCategory(Pagination pagination, String term, String category_slug) {
    String sql = "SELECT p.* FROM product p JOIN category c on p.category_id = c.id WHERE c.slug = ? AND p.name like ? ORDER BY "+pagination.getOrder_by()+" "+pagination.getOrder()+" OFFSET ? ROWS FETCH NEXT ? ROWS ONLY";
     String formatTerm = "%"+term+"%";
    int skip = (pagination.getPage()-1)*pagination.getLimit();   
    return query(sql, new ProductMapper(),category_slug,formatTerm,skip,pagination.getLimit());
  }
}
