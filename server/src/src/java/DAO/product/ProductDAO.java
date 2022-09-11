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
import helper.mapper.RowMapper;
import helper.mapper.implement.ProductMapper;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.annotation.ManagedBean;
import models.CartDetail;
import models.Category;

/**
 *
 * @author WyvernP
 */
@ManagedBean
public class ProductDAO extends AbstractDAO<Product> implements IProductDAO {

    @Override
    public List<Product> findAll(Pagination pagination) {
        String sql = "SELECT * FROM product ORDER BY " + pagination.getOrder_by() + " " + pagination.getOrder() + " OFFSET ? ROWS FETCH NEXT ? ROWS ONLY";
        int skip = (pagination.getPage() - 1) * pagination.getLimit();
        return query(sql, new ProductMapper(), skip, pagination.getLimit());
    }

    @Override
    public List<Product> findByCategory(Pagination pagination, int categoryId) {
        String sql = "SELECT * FROM product WHERE category_id = ? ORDER BY " + pagination.getOrder_by() + " " + pagination.getOrder() + " OFFSET ? ROWS FETCH NEXT ? ROWS ONLY";
        int skip = (pagination.getPage() - 1) * pagination.getLimit();
        return query(sql, new ProductMapper(), categoryId, skip, pagination.getLimit());
    }

    @Override
    public Product findOneById(int productId) {
        String sql = "SELECT p.* , c.id as [catId] ,c.slug as [catSlug],c.name as [catName]  FROM product p JOIN category c on p.category_id = c.id  WHERE p.id = ?  ";
        List<Product> prods = query(sql, new RowMapper<Product>() {
            @Override
            public Product map(ResultSet resultSet) {
                try {
                    Product product = new ProductMapper().map(resultSet);
                    Category cate = new Category(resultSet.getInt("catId"), resultSet.getString("catName"), resultSet.getString("catName"));
                    product.setCategory(cate);
                  
                    return product;
                } catch (Exception ex) {
                    System.out.println(ex);
                    return null;
                }
            }
        }, productId);
        return prods.get(0);
    }

    @Override
    public List<Product> search(Pagination pagination, String term) {
        String sql = "SELECT * FROM product WHERE name like ? ORDER BY " + pagination.getOrder_by() + " " + pagination.getOrder() + " OFFSET ? ROWS FETCH NEXT ? ROWS ONLY";
        String formatTerm = "%" + term + "%";
        int skip = (pagination.getPage() - 1) * pagination.getLimit();
        return query(sql, new ProductMapper(), formatTerm, skip, pagination.getLimit());
    }

    @Override
    public int countByTerm(String term) {
        String sql = "SELECT COUNT(*) FROM product WHERE name like ? ";
        String formatTerm = "%" + term + "%";
        return queryScalar(sql, formatTerm);
    }

    @Override
    public int countByCategory(int category_id) {
        String sql = "SELECT COUNT(*) FROM product WHERE category_id = ? ";
        return queryScalar(sql, category_id);
    }

    @Override
    public int countByCategoryTerm(String category_slug, String term) {
        String sql = "SELECT COUNT(*) FROM product p JOIN category c on p.category_id = c.id WHERE c.slug = ? AND p.name like ? ";
        String formatTerm = "%" + term + "%";
        return queryScalar(sql, category_slug, formatTerm);
    }

    @Override
    public List<Product> searchWithCategory(Pagination pagination, String term, String category_slug) {
        String sql = "SELECT p.* FROM product p JOIN category c on p.category_id = c.id WHERE c.slug = ? AND p.name like ? ORDER BY " + pagination.getOrder_by() + " " + pagination.getOrder() + " OFFSET ? ROWS FETCH NEXT ? ROWS ONLY";
        String formatTerm = "%" + term + "%";
        int skip = (pagination.getPage() - 1) * pagination.getLimit();
        return query(sql, new ProductMapper(), category_slug, formatTerm, skip, pagination.getLimit());
    }

    @Override
    public void updateStock(CartDetail cart_detail) {
        try {
            String sql = "UPDATE product\n"
                    + "SET stock = stock - ? \n"
                    + "WHERE id = ?";
            update(sql, cart_detail.getQuantity(), cart_detail.getProduct().getId());
        } catch (Exception e) {
            System.out.println("update stock fail");
        }
    }

    @Override
    public int addNewProduct(Product product, int account_id) {
        try {
            String sql = "insert into product (name , stock ,price ,[desc],thumbnail,category_id,modified_by)\n"
                    + "values (?,?,?,?,?,?,?)";
            return insert(sql, product.getName(), product.getStock(), product.getPrice(), product.getDesc(), product.getThumbnail(), product.getCategory_id(), account_id);
        } catch (Exception e) {
            return -1;
        }
    }

    @Override
    public boolean updateProduct(Product prod, int account_id) {
        try {
            String sql = "UPDATE product SET name = ? , stock = ? , price = ? , thumbnail = ? , [desc] =  ?  WHERE id = ?";
            int result = update(sql, prod.getName(), prod.getStock(), prod.getPrice(), prod.getThumbnail(), prod.getDesc(), prod.getId());
            return result > 0;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public boolean toggleActive(int product_id) {
        try {
            Product prod = this.findOneById(product_id);
            int activeSet = prod.isActive() ? 0 : 1;
            System.out.println(activeSet);
            String sql = "UPDATE product SET active = ? WHERE id = ? ";
            int result = update(sql, activeSet, product_id);
            return result > 0;
        } catch (Exception e) {
            return false;
        }
    }

}
