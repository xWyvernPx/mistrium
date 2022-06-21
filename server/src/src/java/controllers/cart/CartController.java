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
@WebServlet(name = "GetCart", urlPatterns = {"/cart"})

public class CartController extends HttpServlet {

  class PostCartBody {
    private int quantity;
    private int product_id;
  }
  class PutCartBody {
    private int cart_detail_id;
    private int quantity;
  }
  private ICartService cartService = new CartService();

  protected void processRequest(HttpServletRequest request, HttpServletResponse response)
          throws ServletException, IOException {
    
    response.setContentType("application/json");
    try ( PrintWriter out = response.getWriter()) {
      AuthHelper.checkAuth(request, response);
//      TODO : get id from body not query params
     int account_id = ((Account)request.getAttribute("user")).getId();
      if (account_id <=0) {
        response.setStatus(403);
        out.print(new JSend(JSendEnum.FAIL, null, "Not authorized!").toJson());
        out.close();
      } else {
        Cart cart = cartService.getCart(account_id);
        out.print(new JSend(JSendEnum.SUCCESS, cart, "").toJson());
      }

    }
  }

  @Override
  protected void doGet(HttpServletRequest request, HttpServletResponse response)
          throws ServletException, IOException {
    processRequest(request, response);
  }

  @Override
  protected void doPost(HttpServletRequest request, HttpServletResponse response)
          throws ServletException, IOException {
    response.setContentType("application/json");
    try ( PrintWriter out = response.getWriter()) {
      AuthHelper.checkAuth(request, response);
      int account_id = ((Account)request.getAttribute("user")).getId();
      if (account_id <=0) {
        response.setStatus(403);
        out.print(new JSend(JSendEnum.FAIL, null, "Not authorized!").toJson());
        out.close();
      } else {
        System.out.println(account_id);
         PostCartBody body = GsonAdapter.getInstance().fromJson(request.getReader(), PostCartBody.class);
    
        Cart cart = cartService.addCartItem(account_id,body.product_id, body.quantity);
        out.print(new JSend(JSendEnum.SUCCESS, cart, "").toJson());
      }
     
    }
  }

  @Override
  protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    response.setContentType("application/json");
    try {
      PrintWriter out = response.getWriter();
      AuthHelper.checkAuth(request, response);
      int account_id = ((Account)request.getAttribute("user")).getId();
      if (account_id <=0) {
        response.setStatus(403);
        out.print(new JSend(JSendEnum.FAIL, null, "Not authorized!").toJson());
        out.close();
      } else {
       String cart_detail_id = request.getParameter("cart_detail_id");
            if (cart_detail_id == null || cart_detail_id.isEmpty()|| !cart_detail_id.matches("\\d+")) throw new IllegalArgumentException("cart_detail_id is invalid or missing.");
        Cart cart = cartService.removeCartItem(Integer.parseInt(cart_detail_id), account_id);
        out.print(new JSend(JSendEnum.SUCCESS, cart, "").toJson());
      }
    }
    catch(IllegalArgumentException e) {
      response.setStatus(400);
      response.getWriter().print(new JSend(JSendEnum.FAIL, null, e.getMessage()).toJson());;
    }
  }

  @Override
  protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    response.setContentType("application/json");
    try {
  response.addHeader("Access-Control-Allow-Origin", "*");
 response.addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD");
 response.addHeader("Access-Control-Allow-Headers", "X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept");
 response.addHeader("Access-Control-Max-Age", "1728000");
      PrintWriter out = response.getWriter();
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
  
  @Override
  public String getServletInfo() {
    return "Short description";
  }// </editor-fold>

}
