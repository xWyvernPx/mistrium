/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO;

import helper.mapper.RowMapper;
import java.sql.PreparedStatement;
import java.util.List;

/**
 *
 * @author WyvernP
 * @param <T>
 */


public interface GenericDAO<T> {
    List<T> query(String sql, RowMapper<T> mapper , Object... params);
    void setParams (PreparedStatement statement, Object... params);
    int update(String sql,Object... params);
    int insert(String sql,Object... params);
    int queryScalar(String sql,Object... params);
    
}
