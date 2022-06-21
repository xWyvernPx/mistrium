/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package helper.Jsend;
import helper.Jsend.JSendEnum;
import com.google.gson.Gson;
/**
 *
 * @author WyvernP
 */
public class JSend<T> {
    JSendEnum status;
    T data;
    String message;

    public JSend(JSendEnum status, T data, String message) {
        this.status = status;
        this.data = data;
        this.message = message;
    }

    public JSend() {
    }

    public JSendEnum getStatus() {
        return status;
    }

    public void setStatus(JSendEnum status) {
        this.status = status;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
  public  String toJson(){
        return GsonAdapter.getInstance().toJson(this,JSend.class);
    }
}
