package com.example.myapplication.exit;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.example.myapplication.MainActivity;
import com.example.myapplication.R;

public class LoginActivity extends Activity {
    private EditText editTextUsername;
    private EditText editTextPassword;
    private Button buttonLogin;
    private TextView textViewRegisterLink;

    private static final String SQL_SERVER_IP = "SQL5106.site4now.net";
    private static final String DATABASE_NAME = "db_a9c281_exam";
    private static final String USERNAME = "db_a9c281_exam_admin";
    private static final String PASSWORD = "Qwerty123";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        editTextUsername = findViewById(R.id.editTextUsername);
        editTextPassword = findViewById(R.id.editTextPassword);
        buttonLogin = findViewById(R.id.buttonLogin);
        textViewRegisterLink = findViewById(R.id.textViewRegisterLink);

        buttonLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String username = editTextUsername.getText().toString().trim();
                String password = editTextPassword.getText().toString().trim();

                if (authenticateUser(username, password)) {
                    Intent intent = new Intent(LoginActivity.this, MainActivity.class);
                    startActivity(intent);
                    finish();
                } else {
                }
            }
        });
       textViewRegisterLink.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            Intent intent = new Intent(LoginActivity.this, RegisterActivity.class);
            startActivity(intent);
        }
    });
}
    private boolean authenticateUser(String Login, String Password) {
        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            String connectionString = "jdbc:sqlserver://" + SQL_SERVER_IP + ";databaseName=" + DATABASE_NAME + ";user=" + USERNAME + ";password=" + PASSWORD;
            Connection connection = DriverManager.getConnection(connectionString);

            String query = "SELECT * FROM Account WHERE Login = ? AND Password = ?";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setString(1, Login);
            statement.setString(2, Password);
            ResultSet resultSet = statement.executeQuery();

            boolean userExists = resultSet.next();

            resultSet.close();
            statement.close();
            connection.close();

            return userExists;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
