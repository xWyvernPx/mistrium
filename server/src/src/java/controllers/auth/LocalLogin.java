/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controllers.auth;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.annotations.SerializedName;
import helper.Jsend.GsonAdapter;
import helper.Jsend.JSend;
import helper.Jsend.JSendEnum;
import helper.auth.JWT;

import helper.read_request_body.ReadBody;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.stream.Collectors;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import models.Account;
import services.user._interface.IAccountService;
import services.user.AccountService;

/**
 *
 * @author WyvernP
 */
@WebServlet(name = "LocalLogin", urlPatterns = {"/login"})
public class LocalLogin extends HttpServlet {

  /**
   * Processes requests for both HTTP <code>GET</code> and <code>POST</code>u
   * methods.
   *
   * @param request servlet request
   * @param response servlet response
   * @throws ServletException if a servlet-specific error occurs
   * @throws IOException if an I/O error occurs
   */
  private IAccountService accountService;
public class LoginBody {
  private String email;
  private String password;
}

  public LocalLogin() {
    this.accountService = new AccountService();
  }
  
  protected void processRequest(HttpServletRequest request, HttpServletResponse response)
          throws ServletException, IOException {
    response.setContentType("application/json");

    LoginBody body = GsonAdapter.getInstance().fromJson(request.getReader(), LoginBody.class);
    PrintWriter pw = response.getWriter();
    Account acc = accountService.login(body.email, body.password);
    if(acc!= null) {
      String jws = JWT.sign(String.valueOf(acc.getId()));
        String parse = JWT.decode(jws);
        Cookie cookie = new Cookie("access_token",jws);
        cookie.setPath("/");
        response.addCookie(cookie);
pw.print(new JSend<>(JSendEnum.SUCCESS,acc,"Login successfully").toJson());
    }else {
      pw.print(new JSend<Account>(JSendEnum.FAIL,null,"Your email or password was not correct.Try again!").toJson());
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
