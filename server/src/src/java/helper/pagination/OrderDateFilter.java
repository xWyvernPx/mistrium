/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package helper.pagination;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 *
 * @author WyvernP
 */
public class OrderDateFilter {
   private String from;
   private String to;

  public String getFrom() {
    return from + " 00:00:00";
  }

  public void setFrom(String from) {
    this.from = from;
  }

  public OrderDateFilter() {
  }

  public String getTo() {
    return to + " 23:59:59";
  }

  public void setTo(String to) {
    this.to = to;
  }

  public OrderDateFilter(String from, String to) {
    this.from = from;
    this.to = to;
  }

  
}
