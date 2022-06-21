/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package helper.list_return;

import helper.pagination.Pagination;
import java.util.List;

/**
 *
 * @author WyvernP
 */
public class ReturnList<T> {
  List<T> data;
  Pagination pagination;

  public ReturnList(List<T> data, Pagination pagination) {
    this.data = data;
    this.pagination = pagination;
  }

  public ReturnList() {
  }

  public List<T> getData() {
    return data;
  }

  public void setData(List<T> data) {
    this.data = data;
  }

  public Pagination getPagination() {
    return pagination;
  }

  public void setPagination(Pagination pagination) {
    this.pagination = pagination;
  }

  @Override
  public String toString() {
    return "ReturnList{" + "data=" + data + ", pagination=" + pagination + '}';
  }

  
  
  
}
