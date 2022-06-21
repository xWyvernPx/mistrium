/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controllers.products;

import helper.Jsend.JSend;
import helper.Jsend.JSendEnum;
import helper.list_return.ReturnList;
import helper.pagination.Pagination;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import models.Product;
import services.product.ProductService;
import services.product._interface.IProductService;

/**
 *
 * @author WyvernP
 */
@WebServlet(name = "ProductsController", urlPatterns = {"/products"})
public class ProductsController extends HttpServlet {
  private IProductService productService = new ProductService();
  protected void processRequest(HttpServletRequest request, HttpServletResponse response)
          throws ServletException, IOException {
    response.setContentType("application/json");
    try ( PrintWriter out = response.getWriter()) {
          int page =Integer.parseInt(request.getParameter("page"));
          int limit =Integer.parseInt(request.getParameter("limit"));
          String order = request.getParameter("order");
          String order_by = request.getParameter("order_by");
          String category_slug = request.getParameter("category_slug");
          System.out.println("cate slug " + category_slug);
//         if(category_id == null) {
          System.out.println(page+" "+limit+ " " + order + " " + order_by);
          ReturnList<Product> rs = productService.getAll(new Pagination(page,limit,order_by,order));
          out.print(new JSend<ReturnList<Product>>(JSendEnum.SUCCESS,rs,"").toJson());
//          }
  }}

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
