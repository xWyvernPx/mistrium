import helper.ConnectDb;
import java.sql.Connection;

public class test {
    public static void main(String[] args) {
        Connection cn = ConnectDb.getConnection();
        System.out.println(cn);
    }
}
