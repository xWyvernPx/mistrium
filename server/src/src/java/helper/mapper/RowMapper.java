/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package helper.mapper;

import java.sql.ResultSet;

/**
 *
 * @author WyvernP
 */
public interface RowMapper<T> {
    T map(ResultSet resultSet);
}
