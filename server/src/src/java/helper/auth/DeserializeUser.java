/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package helper.auth;

import helper.Jsend.GsonAdapter;
import java.io.IOException;
import java.io.PrintWriter;
import javax.inject.Inject;
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
public class DeserializeUser  {
   public class JWTDecode {
    private int sub;
    @Override
    public String toString() {
      return "JWTDecode{" + "sub=" + sub + '}';
    }
    
  }
  
  private IAccountService accountService = new AccountService();
  
  public void deserialize(HttpServletRequest req){
    try {
      Cookie[] cookies = req.getCookies();
      String token = null;
      for (Cookie cookie : cookies) {
        System.out.println(cookie.getName());
        if(cookie.getName().equals("access_token"))
          token = cookie.getValue();
      }
      String decodedToken = JWT.decode(token);
//      System.out.println(decodedToken);
      JWTDecode tokenObj = GsonAdapter.getInstance().fromJson(decodedToken, JWTDecode.class);
      Account acc = accountService.getMe(tokenObj.sub);
      if(acc!=null)req.setAttribute("user", acc);
      else req.setAttribute("user", null);
    } catch (Exception e) {
      req.setAttribute("user", null);
    }
    
  }
}
