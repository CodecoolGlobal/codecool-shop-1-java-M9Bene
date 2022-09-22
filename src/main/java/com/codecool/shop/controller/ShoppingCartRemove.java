package com.codecool.shop.controller;

import com.codecool.shop.dao.ShoppingCartDao;
import com.codecool.shop.dao.implementation.ShoppingCartDaoMem;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "shoppingCartRemove", urlPatterns = {"/shopping-cart-remove"})
public class ShoppingCartRemove extends HttpServlet {

    ShoppingCartDao shoppingCart = ShoppingCartDaoMem.getInstance();

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        int productId = Integer.parseInt(request.getParameter("id"));

        shoppingCart.remove(productId);
    }
}
