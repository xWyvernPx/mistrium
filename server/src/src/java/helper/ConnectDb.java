package helper;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectDb {
    public static final String username = "server_admin";
    public static final String password = "WyvernP2506";
    public static final String dbname = "mistrium-db";
    public static final String server = "wyvernp.database.windows.net";
    
    public static final String DB_URL = "jdbc:sqlserver://"+server+";databaseName=" + dbname + ";user=" + username
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