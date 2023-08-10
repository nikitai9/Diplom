package com.example.myapplication.exit;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.example.myapplication.MainActivity;
import com.example.myapplication.R;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
public class RegisterActivity  extends Activity{
    private EditText editTextNewUsername;
    private EditText editTextNewPassword;
    private Button buttonRegister;

    private static final String SQL_SERVER_IP = "SQL5106.site4now.net";
    private static final String DATABASE_NAME = "db_a9c281_exam";
    private static final String USERNAME = "db_a9c281_exam_admin";
    private static final String PASSWORD = "Qwerty123";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        editTextNewUsername = findViewById(R.id.editTextNewUsername);
        editTextNewPassword = findViewById(R.id.editTextNewPassword);
        buttonRegister = findViewById(R.id.buttonRegister);

        buttonRegister.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String newUsername = editTextNewUsername.getText().toString().trim();
                String newPassword = editTextNewPassword.getText().toString().trim();

                if (saveUser(newUsername, newPassword)) {
                    Intent intent = new Intent(RegisterActivity.this, LoginActivity.class);
                    startActivity(intent);
                    finish();
                } else {

                }
            }
        });
    }

    private boolean saveUser(String Login, String Password) {
        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            String connectionString = "jdbc:sqlserver://" + SQL_SERVER_IP + ";databaseName=" + DATABASE_NAME + ";user=" + USERNAME + ";password=" + PASSWORD;
            Connection connection = DriverManager.getConnection(connectionString);

            String query = "INSERT INTO Account (Login, Password) VALUES (?, ?)";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setString(1, Login);
            statement.setString(2, Password);
            int rowsAffected = statement.executeUpdate();

            statement.close();
            connection.close();

            return rowsAffected > 0;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
