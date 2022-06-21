package helper;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectDb {
    public static final String username = "sa";
    public static final String password = "123456";
    public static final String dbname = "mistrium";
    public static final String DB_URL = "jdbc:sqlserver://localhost:1433;databaseName=" + dbname + ";user=" + username
            + ";password=" + password;
    static String driver = "com.microsoft.sqlserver.jdbc.SQLServerDriver";

    private static Connection cn = null;

    public static Connection getConnection() {
        try {
            Class.forName(driver);
            cn = DriverManager.getConnection(DB_URL);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return cn;
    }
}