/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controllers.products;

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
import services.product.CategoryService;
import services.product._interface.ICategoryService;

/**
 *
 * @author WyvernP
 */
@WebServlet(name = "CategoryUpdate", urlPatterns = {"/category/update"})
public class CategoryUpdate extends HttpServlet {

  /**
   * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
   * methods.
   *
   * @param request servlet request
   * @param response servlet response
   * @throws ServletException if a servlet-specific error occurs
   * @throws IOException if an I/O error occurs
   */
  class PutCategoryBody {
    private int category_id;
    private String newName ;
  }
  private ICategoryService categoryService = new CategoryService();
  protected void processRequest(HttpServletRequest request, HttpServletResponse response)
          throws ServletException, IOException {
    try ( PrintWriter out = response.getWriter()) {
      PutCategoryBody body = GsonAdapter.getInstance().fromJson(request.getReader(), PutCategoryBody.class);
      
      boolean result = categoryService.updateCategory(body.category_id, body.newName);
      if(result)
      out.print(JSend.create(JSendEnum.SUCCESS,result,"UPDATE SUCCESS FULL").toJson());
      else 
      out.print(JSend.create(JSendEnum.FAIL,result,"UPDATE FAILED").toJson());
    }
    catch (Exception e) {
      response.getWriter().print(JSend.create(JSendEnum.FAIL,null,"There was something wrong. Try again later ... ").toJson());    }
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
