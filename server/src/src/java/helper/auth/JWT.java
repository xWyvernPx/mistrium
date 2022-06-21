/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package helper.auth;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/**
 *
 * @author WyvernP
 */
public class JWT {
    private final static String SECRET_KEY = "MISTRIUM_ACCESS_TOKEN";
    static public  String sign(String payload) {
        return Jwts.builder().setSubject(payload).signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
    }
    static public String decode(String jwt) {
       return Jwts.parser().setSigningKey(SECRET_KEY).parse(jwt).getBody().toString();
    }
}
