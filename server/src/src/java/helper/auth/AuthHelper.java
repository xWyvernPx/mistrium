/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package helper.auth;

import helper.Jsend.JSend;
import helper.Jsend.JSendEnum;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import models.Account;

/**
 *
 * @author WyvernP
 */
public class AuthHelper {

    static String get_token_url = "https://oauth2.googleapis.com/token?grant_type=authorization_code&client_id=589640365693-7p2e9n7o5t55abl30itolav861h4c3kv.apps.googleusercontent.com&client_secret=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&redirect_uri=https://mistrium.azurewebsites.net/auth/google/callback&code=";
    static HttpURLConnection connection = null;
    static String get_profile = "https://www.googleapis.com/oauth2/v3/userinfo?alt=json&access_token=";
     public static void checkAuthAdmin (HttpServletRequest req,HttpServletResponse res) {
  try {
        
      new DeserializeUser().deserialize(req);
      Account acc = (Account)req.getAttribute("user");
      
      if(acc!= null && acc.getRole()) return;
      else {
        res.setStatus(403);
        PrintWriter pw = res.getWriter();
        pw.print(new JSend(JSendEnum.FAIL,null,"You are not authorized to access this resource").toJson()); 
        pw.close();
      }
      } catch (Exception e) {
       }     
     }
    static public void checkAuth(HttpServletRequest req,HttpServletResponse res) {
      try {
        
      new DeserializeUser().deserialize(req);
      Account acc = (Account)req.getAttribute("user");
      
      if(acc!= null) return;
      else {
        res.setStatus(403);
        PrintWriter pw = res.getWriter();
        pw.print(new JSend(JSendEnum.FAIL,null,"You are not authorized to access this resource").toJson()); 
        pw.close();
      }
      } catch (Exception e) {
       }
    }
    static public String getToken(String code) {
        try {
            URL url = new URL(get_token_url + code);
            connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setRequestProperty("Content-Type",
                    "application/x-www-form-urlencoded");
            connection.setRequestProperty("Content-Language", "en-US");

            connection.setUseCaches(false);
            connection.setDoOutput(true);

            //Send request
            DataOutputStream wr = new DataOutputStream(
            connection.getOutputStream());
//    wr.writeBytes(urlParameters);
            wr.close();

            //Get Response  
            int status = connection.getResponseCode();
            System.out.println("response code" + status);
            InputStream is = connection.getInputStream();
            BufferedReader rd = new BufferedReader(new InputStreamReader(is));
            StringBuilder response = new StringBuilder(); // or StringBuffer if Java version 5+
            String line;
            while ((line = rd.readLine()) != null) {
                response.append(line);
                response.append('\r');
            }
            rd.close();

            return response.toString();

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    static public String getProfile(String id_token, String access_token) {
        try {
//            System.out.println(id_token +";;;;"+ access_token);
            URL url = new URL(get_profile + access_token);
            connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            connection.setRequestProperty("Host", "www.googleapis.com");
            connection.setRequestProperty("Content-Type",
                    "application/x-www-form-urlencoded");
            connection.setRequestProperty("Accept", "*/*");
            connection.setRequestProperty("Authorization", "Bearer " + id_token);
//    connection.setRequestProperty("Content-Length", 
//        Integer.toString(urlParameters.getBytes().length));
            connection.setRequestProperty("Content-Language", "en-US");
            connection.setUseCaches(false);
            connection.setDoOutput(true);

            //Send request
            DataOutputStream wr = new DataOutputStream(
                    connection.getOutputStream());
//    wr.writeBytes(urlParameters);
            wr.close();

            //Get Response  
            int status = connection.getResponseCode();
            System.out.println("response code" + status);
            InputStream is = connection.getInputStream();
            BufferedReader rd = new BufferedReader(new InputStreamReader(is));
            StringBuilder response = new StringBuilder(); // or StringBuffer if Java version 5+
            String line;
            while ((line = rd.readLine()) != null) {
                response.append(line);
                response.append('\r');
            }
            rd.close();

            return response.toString();
        } catch (Exception e) {
            return null;
        }
    }
}
