package com.example.myapplication;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class UserDatabaseHelper {
    private static final String SQL_SERVER_IP = "SQL5106.site4now.net";
    private static final String DATABASE_NAME = "db_a9c281_exam";
    private static final String USERNAME = "db_a9c281_exam_admin";
    private static final String PASSWORD = "Qwerty123";

    private static final String TABLE_ACCOUNT = "Account";
    private static final String COLUMN_ID = "id";
    private static final String COLUMN_LOGIN = "Login";
    private static final String COLUMN_PASSWORD = "Password";

    private Connection connection;

    public UserDatabaseHelper() {
        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");

            String connectionString = "jdbc:sqlserver://" + SQL_SERVER_IP + ";databaseName=" + DATABASE_NAME + ";user=" + USERNAME + ";password=" + PASSWORD;

            connection = DriverManager.getConnection(connectionString);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void saveUserData(String username, String password) {
        try {
            String query = "INSERT INTO " + TABLE_ACCOUNT + " (" + COLUMN_LOGIN + ", " + COLUMN_PASSWORD + ") VALUES (?, ?)";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setString(1, username);
            statement.setString(2, password);
            statement.executeUpdate();
            statement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

}

