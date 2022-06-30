/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controllers.order;

import helper.Jsend.JSend;
import helper.Jsend.JSendEnum;
import helper.auth.AuthHelper;
import helper.pagination.OrderDateFilter;
import helper.pagination.Pagination;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import models.Account;
import models.Order;
import services.user.OrderService;
import services.user._interface.IOrderService;

/**
 *
 * @author WyvernP
 */
@WebServlet(name = "OrderAllController", urlPatterns = {"/order/all"})
public class OrderAllController extends HttpServlet {
  
  /**
   * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
   * methods.
   *
   * @param request servlet request
   * @param response servlet response
   * @throws ServletException if a servlet-specific error occurs
   * @throws IOException if an I/O error occurs
   */
  protected void processRequest(HttpServletRequest request, HttpServletResponse response)
          throws ServletException, IOException {
    response.setContentType("text/html;charset=UTF-8");
    try ( PrintWriter out = response.getWriter()) {
      /* TODO output your page here. You may use following sample code. */
      out.println("<!DOCTYPE html>");
      out.println("<html>");
      out.println("<head>");
      out.println("<title>Servlet OrderAllController</title>");      
      out.println("</head>");
      out.println("<body>");
      out.println("<h1>Servlet OrderAllController at " + request.getContextPath() + "</h1>");
      out.println("</body>");
      out.println("</html>");
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
  private IOrderService orderService = new OrderService();
  @Override
  protected void doGet(HttpServletRequest request, HttpServletResponse response)
          throws ServletException, IOException {
    try {
      response.addHeader("Content-Type", "application/json");
      AuthHelper.checkAuth(request, response);
      int page = Integer.parseInt(request.getParameter("page"));
      int limit = Integer.parseInt(request.getParameter("limit"));
      String order_by = request.getParameter("order_by");
      String order = request.getParameter("order");
      String from = request.getParameter("from");
      String to = request.getParameter("to");
      int status = Integer.parseInt(request.getParameter("status"));
      Pagination pagi = new Pagination(page,limit,order_by,order);
      OrderDateFilter filter = new OrderDateFilter(from,to);
      Account acc =(Account) request.getAttribute("user");
      List<Order> orders = orderService.getAllOrder(acc.getId(), pagi, filter, status);
      response.getWriter().print(new JSend(JSendEnum.SUCCESS,orders,"fetch list successfully").toJson());
    } catch (Exception ex) {
      response.setStatus(400);
     response.getWriter().print(new JSend<>(JSendEnum.FAIL,"invalid date format","").toJson());
    }
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
