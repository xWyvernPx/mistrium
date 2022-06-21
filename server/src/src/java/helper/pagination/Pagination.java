/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package helper.pagination;

/**
 *
 * @author WyvernP
 */
public class Pagination {
  private int page = 1;
  private int limit = 10;
  private int total = 0;
  private int total_pages = 0;
  private String order_by = "id";
  private String order="ASC";
  
  
  public Pagination(int page, int limit, int total, int total_pages, String order_by, String order) {
    this.page = page;
    this.limit = limit;
    this.total = total;
    this.total_pages = total_pages;
    this.order_by = order_by;
    this.order = order;
  }

  public String getOrder_by() {
    return order_by;
  }

  public void setOrder_by(String order_by) {
    this.order_by = order_by;
  }

  public String getOrder() {
    return order;
  }

  public void setOrder(String order) {
    this.order = order;
  }

  public Pagination() {
    this.limit = 10;
    this.page= 0;
    this.total = 0;
    this.total_pages = 0;
    this.order = "id";
    this.order_by = "ASC";
  }
  public Pagination(int page,int limit,String order_by,String order) {
    this.limit = limit;
    this.page= page;
    this.total = 0;
    this.total_pages = 0;
    this.order = order;
    this.order_by = order_by;
  }

  public int getPage() {
    return page;
  }

  public void setPage(int page) {
    this.page = page;
  }

  public int getLimit() {
    return limit;
  }

  public void setLimit(int limit) {
    this.limit = limit;
  }

  public int getTotal() {
    return total;
  }

  public void setTotal(int total) {
    this.total = total;
  }

  public int getTotal_pages() {
    return total_pages;
  }

  public void setTotal_pages(int total_pages) {
    this.total_pages = total_pages;
  }

  @Override
  public String toString() {
    return "Pagination{" + "page=" + page + ", limit=" + limit + ", total=" + total + ", total_pages=" + total_pages + ", order_by=" + order_by + ", order=" + order + '}';
  }
  
}
