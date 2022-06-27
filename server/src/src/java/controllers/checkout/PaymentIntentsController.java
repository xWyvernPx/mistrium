/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controllers.checkout;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import helper.Jsend.GsonAdapter;
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
@WebServlet(name = "PaymentIntents", urlPatterns = {"/payment_intents"})
public class PaymentIntentsController extends HttpServlet {

  public PaymentIntentsController() {
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
    response.setContentType("text/html;charset=UTF-8");
    try ( PrintWriter out = response.getWriter()) {
      /* TODO output your page here. You may use following sample code. */
      out.println("<!DOCTYPE html>");
      out.println("<html>");
      out.println("<head>");
      out.println("<title>Servlet PaymentIntents</title>");
      out.println("</head>");
      out.println("<body>");
      out.println("<h1>Servlet PaymentIntents at " + request.getContextPath() + "</h1>");
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
  class PostBody {

    private Long amount;

  }

  @Override
  protected void doPost(HttpServletRequest request, HttpServletResponse response)
          throws ServletException, IOException {
//    processRequest(request, response);
    response.setHeader("Content-Type", "application/json");
    try ( PrintWriter out = response.getWriter()) {
      PostBody body = GsonAdapter.getInstance().fromJson(request.getReader(), PostBody.class);
//    if(body.amount == null ||body.payment_method == null|| body.payment_method.isEmpty()) throw new IllegalArgumentException("Missing parameters");
      System.out.println(body);
      PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
              .setAmount(body.amount)
              .setCurrency("vnd")
              .build();
      PaymentIntent pi = PaymentIntent.create(params);
      out.print(new JSend<>(JSendEnum.SUCCESS, pi.getClientSecret(), "hehe").toJson());
    } catch (StripeException  e) {
      System.out.println(e);
    }
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
