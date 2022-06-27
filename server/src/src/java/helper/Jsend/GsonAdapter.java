/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package helper.Jsend;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 *
 * @author WyvernP
 */
public class GsonAdapter {
    static private Gson gson = new Gson();
    
    public static Gson getInstance(){
        return gson!= null ? gson : new GsonBuilder().create();
    }
    
}
