package com.example.demo3;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {


        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");

        String email = request.getParameter("email");
        String senha = request.getParameter("senha");

        String url = "jdbc:oracle:thin:@localhost:1521:xe";
        String user = "seu_usuario";
        String pass = "sua_senha";

        try (Connection conn = DriverManager.getConnection(url, user, pass)) {
            String sql = "SELECT tipo_usuario FROM usuarios WHERE email = ? AND senha = ?";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, email);
            stmt.setString(2, senha);

            ResultSet rs = stmt.executeQuery();

            response.setContentType("text/plain");
            if (rs.next()) {
                String tipo = rs.getString("tipo_usuario");
                response.getWriter().write(tipo);
            } else {
                response.getWriter().write("nao_encontrado");
            }

        } catch (SQLException e) {
            e.printStackTrace();
            response.sendError(500, "Erro no servidor");
        }
    }
}
