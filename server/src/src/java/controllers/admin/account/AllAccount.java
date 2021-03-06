/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controllers.admin.account;

import helper.Jsend.JSend;
import helper.Jsend.JSendEnum;
import helper.auth.AuthHelper;
import helper.pagination.Pagination;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import models.Account;
import services.user.AccountService;
import services.user._interface.IAccountService;

/**
 *
 * @author WyvernP
 */
@WebServlet(name = "AllAccount", urlPatterns = {"/account/all"})
public class AllAccount extends HttpServlet {

  /**
   * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
   * methods.
   *
   * @param request servlet request
   * @param response servlet response
   * @throws ServletException if a servlet-specific error occurs
   * @throws IOException if an I/O error occurs
   */
  private IAccountService accountService = new AccountService();
  protected void processRequest(HttpServletRequest request, HttpServletResponse response)
          throws ServletException, IOException {
    response.setContentType("application/json");
    try ( PrintWriter out = response.getWriter()) {
      AuthHelper.checkAuth(request, response);
      Account acc = (Account) request.getAttribute("user");
      if(!acc.getRole()) {
        out.print(JSend.create(JSendEnum.FAIL,null,"You are not permitted to access this resource"));
        out.close();
      }
      String term = request.getParameter("term")==null ? "" :request.getParameter("term");
      String order_by =request.getParameter("order_by");
      String order =request.getParameter("order");
      int page =Integer.parseInt(request.getParameter("page"));
      int limit =Integer.parseInt(request.getParameter("limit"));
      Pagination pagi = new Pagination(page,limit,order_by,order);
      out.print(JSend.create(JSendEnum.SUCCESS,accountService.getAll(pagi,term),"").toJson());
      
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
