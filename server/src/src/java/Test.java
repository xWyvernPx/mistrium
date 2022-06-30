
import DAO.AbstractDAO;
import DAO.product.CategoryDAO;
import DAO.product.ProductDAO;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.logging.Level;
import java.util.logging.Logger;

import helper.ConnectDb;
import DAO.user.AccountDAO;
import DAO.user.CartDAO;
import DAO.user.CartDetailDAO;
import DAO.user.OrderDAO;
import DAO.user.OrderDetailDAO;
import DAO.user._interface.IAccountDAO;
import helper.pagination.OrderDateFilter;
import helper.pagination.Pagination;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import models.Product;
import services.product.ProductService;
import services.user.AccountService;
import services.user.CartService;
import services.user.OrderService;
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
/**
 *
 * @author WyvernP
 */
public class Test {

    public static void main(String[] args) {
        IAccountDAO accountDAO = new AccountDAO();
//        System.out.println(accountDAO.findOne("admin@admin.com").toString());
//           Object i =accountDAO.findOne("admin@admin.com").getId() ;
//           System.out.println(i instanceof Integer);
//  System.out.println(accountDAO.create("admin2@admin.com","123456", 1));
  Pagination pagi = new Pagination(1,10,0,0,"id","ASC");
  OrderDateFilter filter ;
  try {
//   filter = new OrderDateFilter("06/26/2022","06/26/2022");
//         new OrderDAO().getAllOrder(7, pagi, filter,1).forEach(order -> {
//        System.out.println(order);
//      });
    System.out.println(new OrderService().reorder(4));
  }
  catch(Exception e) {
    e.printStackTrace();
  }
  
//      ArrayList<Product> products = (ArrayList<Product>)new ProductDAO().search(pagi,"Red");
//      for(Product product : products){
//        System.out.println(product);
//      }
//      System.out.println(new ProductService().getAll(pagi));
//System.out.println(new AccountService().getMe(7));

      }
    
}
