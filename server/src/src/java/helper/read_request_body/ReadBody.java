/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package helper.read_request_body;

import java.io.BufferedReader;
import java.util.stream.Collectors;
import javax.servlet.http.HttpServletRequest;

/**
 *
 * @author WyvernP
 */
public class ReadBody {
  public static String get(HttpServletRequest request){
    try {
     return request.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
    } catch (Exception e) {
      return null;
    }
    
  }
}
