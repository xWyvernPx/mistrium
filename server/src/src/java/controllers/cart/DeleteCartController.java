/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controllers.cart;

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
import models.Cart;
import services.user.CartService;
import services.user._interface.ICartService;

/**
 *
 * @author WyvernP
 */
@WebServlet(name = "DeleteCartController", urlPatterns = {"/cart/update"})
public class DeleteCartController extends HttpServlet {

   class PutCartBody {
    private int cart_detail_id;
    private int quantity;
  }
  private ICartService cartService = new CartService();

  protected void processRequest(HttpServletRequest request, HttpServletResponse response)
          throws ServletException, IOException {
    response.setContentType("application/json");
    try ( PrintWriter out = response.getWriter()) {
//      response.addHeader("Access-Control-Allow-Origin", "*");
// response.addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD");
// response.addHeader("Access-Control-Allow-Headers", "X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept");
// response.addHeader("Access-Control-Max-Age", "1728000");
      AuthHelper.checkAuth(request, response);
      int account_id = ((Account)request.getAttribute("user")).getId();
      if (account_id <=0) {
        response.setStatus(403);
        out.print(new JSend(JSendEnum.FAIL, null, "Not authorized!").toJson());
        out.close();
      } else {
         PutCartBody body = GsonAdapter.getInstance().fromJson(request.getReader(), PutCartBody.class);
         System.out.println(body);
            if (body == null) throw new IllegalArgumentException("parameters is invalid or missing.");
    if(body.cart_detail_id <= 0) throw new IllegalArgumentException("cart_detail_id is invalid or missing.");
    if(body.quantity < 0) throw new IllegalArgumentException("quantity is invalid or missing.");
 
        Cart cart = cartService.updateCartItem(body.cart_detail_id,body.quantity,account_id);
        out.print(new JSend(JSendEnum.SUCCESS, cart, "").toJson());
      }
    }
    catch(IllegalArgumentException e) {
       response.addHeader("Access-Control-Allow-Origin", "*");
 response.addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD");
 response.addHeader("Access-Control-Allow-Headers", "X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept");
 response.addHeader("Access-Control-Max-Age", "1728000");
      response.setStatus(400);
      response.getWriter().print(new JSend(JSendEnum.FAIL, null, e.getMessage()).toJson());
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
