/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controllers.auth;
import io.jsonwebtoken.Jwts;
import helper.Jsend.GsonAdapter;
import helper.auth.AuthHelper;
import helper.auth.JWT;
import helper.auth.Token;
import helper.auth.Profile;
import java.io.IOException;
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
@WebServlet(name = "GoogleAuthCallback", urlPatterns = {"/auth/google/callback"})
public class GoogleAuthCallback extends HttpServlet {
    private IAccountService accountService;

  public GoogleAuthCallback() {
    this.accountService = new AccountService();
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
        String code = request.getParameter("code");
        String res = AuthHelper.getToken(code);
        // get Token from gg api
        Token tk = GsonAdapter.getInstance().fromJson(res, Token.class);
        //get profile with access token;
        String profile = AuthHelper.getProfile(tk.getId_token(), tk.getAccess_token());
        Profile pf = GsonAdapter.getInstance().fromJson(profile, Profile.class);
        Account acc = accountService.getMe(pf.getEmail());
        if(acc== null) {
          acc = accountService.register(pf.getEmail(),"", false);
        }
        String jws = JWT.sign(String.valueOf(acc.getId()));
        String parse = JWT.decode(jws);
        Cookie cookie = new Cookie("access_token",jws);
        cookie.setPath("/");
        cookie.setMaxAge(60*60*24);
        response.addCookie(cookie);
        response.sendRedirect("http://localhost:3000");
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
