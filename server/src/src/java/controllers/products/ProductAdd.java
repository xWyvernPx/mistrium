/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controllers.products;

import helper.Jsend.GsonAdapter;
import helper.Jsend.JSend;
import helper.Jsend.JSendEnum;
import helper.auth.AuthHelper;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import models.Account;
import models.Product;
import services.product.ProductService;
import services.product._interface.IProductService;

/**
 *
 * @author WyvernP
 */
@WebServlet(name = "ProductAdd", urlPatterns = {"/product/add"})
public class ProductAdd extends HttpServlet {

  /**
   * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
   * methods.
   *
   * @param request servlet request
   * @param response servlet response
   * @throws ServletException if a servlet-specific error occurs
   * @throws IOException if an I/O error occurs
   */
  private IProductService productService = new ProductService();
  
  protected void processRequest(HttpServletRequest request, HttpServletResponse response)
          throws ServletException, IOException {
    response.setContentType("application/json");
    try ( PrintWriter out = response.getWriter()) {
      AuthHelper.checkAuth(request, response);
      Product body = GsonAdapter.getInstance().fromJson(request.getReader(), Product.class);
      System.out.println(body);
      Account acc = (Account)request.getAttribute("user");
       int result = productService.addNewProduct(body, acc.getId());
       if(result >= 0) out.print(JSend.create(JSendEnum.SUCCESS,result ,"Add new product successfully"));
       
       else{ 
         response.setStatus(400);
         out.print(JSend.create(JSendEnum.FAIL,null,"Add Fail"));
        
       }
       
       }
    catch(Exception e) {
      System.out.println(e);
    }
  }

  // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
  /**
   * Handles the HTTP <code>GET</code> method.
   *
   * @param request servlet request
   * @param response servlet response
   * @throws ServletException if a servlet-specific error occurs
   * @throws IOException if an I/O error occurs
   */
  @Override
  protected void doGet(HttpServletRequest request, HttpServletResponse response)
          throws ServletException, IOException {
    processRequest(request, response);
  }

  /**
   * Handles the HTTP <code>POST</code> method.
   *
   * @param request servlet request
   * @param response servlet response
   * @throws ServletException if a servlet-specific error occurs
   * @throws IOException if an I/O error occurs
   */
  @Override
  protected void doPost(HttpServletRequest request, HttpServletResponse response)
          throws ServletException, IOException {
    processRequest(request, response);
  }

  /**
   * Returns a short description of the servlet.
   *
   * @return a String containing servlet description
   */
  @Override
  public String getServletInfo() {
    return "Short description";
  }// </editor-fold>

}
