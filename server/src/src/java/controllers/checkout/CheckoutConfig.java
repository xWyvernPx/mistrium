/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controllers.checkout;

import com.stripe.Stripe;
import helper.Jsend.JSend;
import helper.Jsend.JSendEnum;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author WyvernP
 */
@WebServlet(name = "CheckoutConfig", urlPatterns = {"/checkout/config"})
public class CheckoutConfig extends HttpServlet {

  public CheckoutConfig() {
    Stripe.apiKey = "sk_test_51KrmUOGni8Rz7mdfrZEMv15EPApRPCuq67WBzQiXRbEA4oN9zHzmRedlUCLYQiUoG50kP4SjtucT2jRp4HlygMfV00Rs2RdHyk";
  }

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
    response.setContentType("application/json");
    try ( PrintWriter out = response.getWriter()) {
      /* TODO output your page here. You may use following sample code. */
     out.print(JSend.create(JSendEnum.SUCCESS,"pk_test_51KrmUOGni8Rz7mdfmTgCgPvwNmTY2AbSgljmNqS7ihysuRVFvPN3SIrfQX6HwLbV7a0bENSTHZKBWJsMEH7suBgj000BykeHO6","").toJson());
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
