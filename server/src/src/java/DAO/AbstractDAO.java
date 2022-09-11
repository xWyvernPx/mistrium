/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO;

import helper.ConnectDb;
import helper.mapper.RowMapper;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 *
 * @author WyvernP
 */
public class AbstractDAO<T> implements GenericDAO<T> {

  @Override
  public List<T> query(String sql, RowMapper<T> mapper, Object... params) {
      
    Connection cn = null;
    PreparedStatement statement = null;
    ResultSet rs = null;
    List<T> list = new ArrayList<T>();
    try {
      cn = ConnectDb.getConnection();
      if (cn != null) {
        statement = cn.prepareStatement(sql);
        setParams(statement, params);
        rs = statement.executeQuery();
        while (rs.next()) {
          list.add(mapper.map(rs));
        }
        return list;
      }
    } catch (Exception e) {
      System.out.println(e);
      return null;
    } finally {
      try {
        if (cn != null) {
          cn.close();
        }
        if (statement != null) {
          statement.close();
        }
        if (rs != null) {
          rs.close();
        }
      } catch (SQLException ex) {
      }
    }
 return null;
   
  }

  @Override
  public void setParams(PreparedStatement statement, Object... params) {
    try {
      for (int i = 1; i <= params.length; i++) {
        Object param = params[i - 1];
        if (param instanceof Integer) {
          statement.setInt(i, (Integer) param);
        } else if (param instanceof Long) {
          statement.setLong(i, (Long) param);
        } else if (param instanceof String) {
          statement.setString(i, (String) param);
        } else if (param instanceof Float) {
          statement.setFloat(i, (Float) param);
        } else if (param instanceof Double) {
          statement.setDouble(i, (Double) param);
        } else if (param instanceof Date) {
          statement.setDate(i, (java.sql.Date) param);
        } else if (param == null) {
          statement.setNull(i, 0);
        }
      }
    } catch (Exception e) {
    }
  }

  @Override
  public int insert(String sql, Object... params) {
    Connection cn = null;
    PreparedStatement statement = null;
    ResultSet rs = null;
    try {
      cn = ConnectDb.getConnection();
      if (cn != null) {
        statement = cn.prepareStatement(sql,PreparedStatement.RETURN_GENERATED_KEYS);
        setParams(statement, params);
        statement.executeUpdate();
        rs = statement.getGeneratedKeys();
        if(rs.next()) return  rs.getInt(1);
      }
    } catch (Exception e) {
      System.out.println(e);
      return -1;
    } finally {
      try {
        if (cn != null) {
          cn.close();
        }
        if (statement != null) {
          statement.close();
        }
        if (rs != null) {
          rs.close();
        }
      } catch (SQLException ex) {
      }
    }
 return -1;
  }

  @Override
  public int update(String sql, Object... params) {
    Connection cn = null;
    PreparedStatement statement = null;
    ResultSet rs = null;
    try {
      cn = ConnectDb.getConnection();
      if (cn != null) {
        statement = cn.prepareStatement(sql);
        setParams(statement, params);
        return statement.executeUpdate() >0 ? 1 : 0;

      }
    } catch (Exception e) {
      System.out.println(e);
      return -1;
    } finally {
      try {
        if (cn != null) {
          cn.close();
        }
        if (statement != null) {
          statement.close();
        }
        if (rs != null) {
          rs.close();
        }
      } catch (SQLException ex) {
      }
    }
 return -1;
  }

  @Override
  public int queryScalar(String sql, Object... params) {
      Connection cn = null;
    PreparedStatement statement = null;
    ResultSet rs = null;
    try {
      cn = ConnectDb.getConnection();
      if (cn != null) {
        statement = cn.prepareStatement(sql);
        setParams(statement, params);
        rs = statement.executeQuery();
        if(rs.next())
          return rs.getInt(1);
        else return -1;
      }
    } catch (Exception e) {
      System.out.println(e);
      return -1;
    } finally {
      try {
        if (cn != null) {
          cn.close();
        }
        if (statement != null) {
          statement.close();
        }
        if (rs != null) {
          rs.close();
        }
      } catch (SQLException ex) {
      }
    }
 return -1;
  }

}
