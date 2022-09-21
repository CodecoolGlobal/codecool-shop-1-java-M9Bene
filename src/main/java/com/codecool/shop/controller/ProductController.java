package com.codecool.shop.controller;

import com.codecool.shop.dao.ProductCategoryDao;
import com.codecool.shop.dao.ProductDao;
import com.codecool.shop.dao.SupplierDao;
import com.codecool.shop.dao.implementation.ProductCategoryDaoMem;
import com.codecool.shop.dao.implementation.ProductDaoMem;
import com.codecool.shop.dao.implementation.SupplierDaoMem;
import com.codecool.shop.service.ProductService;
import com.codecool.shop.config.TemplateEngineUtil;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.WebContext;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@WebServlet(urlPatterns = {"/"})
public class ProductController extends HttpServlet {

    ProductDao productDataStore = ProductDaoMem.getInstance();
    ProductCategoryDao productCategoryDataStore = ProductCategoryDaoMem.getInstance();
    SupplierDao supplierDataStore = SupplierDaoMem.getInstance();
    ProductService productService = new ProductService(productDataStore,productCategoryDataStore, supplierDataStore);


    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        TemplateEngine engine = TemplateEngineUtil.getTemplateEngine(req.getServletContext());
        WebContext context = new WebContext(req, resp, req.getServletContext());
        // CHOOSABLE CATEGORIES FOR SORT
        context.setVariable("categories", productService.getAllProductCategory());
        // CHOOSABLE SUPPLIERS FOR SORT
        context.setVariable("suppliers", productService.getAllProductSupplier());
        //  GET ALL PRODUCTS
        context.setVariable("products", productService.getAllProducts());

        // // Alternative setting of the template context
        // Map<String, Object> params = new HashMap<>();
        // params.put("category", productCategoryDataStore.find(1));
        // params.put("products", productDataStore.getBy(productCategoryDataStore.find(1)));
        // context.setVariables(params);
        engine.process("product/index.html", context, resp.getWriter());

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        TemplateEngine engine = TemplateEngineUtil.getTemplateEngine(req.getServletContext());
        WebContext context = new WebContext(req, resp, req.getServletContext());

        //    SORT BY CATEGORY
        if( req.getParameter("categorySelect") != null){
            String StringselectedCategoryID = req.getParameter("categorySelect");
            int selectedCategoryID = Integer.parseInt(StringselectedCategoryID);
            context.setVariable("products", productService.getProductsForCategory(selectedCategoryID));
            //   SELECTED
            context.setVariable("selected_categoryID",selectedCategoryID );

        } else if (req.getParameter("supplierSelect") != null) {
            //        SORT BY SUPPLIER
            String StringselectedSupplierID = req.getParameter("supplierSelect");
            int selectedSupplierID = Integer.parseInt(StringselectedSupplierID);
            context.setVariable("products", productService.getProductsForSupplier(selectedSupplierID));
            //   SELECTED
            context.setVariable("selected_supplierID",selectedSupplierID );

        }


        // CHOOSABLE CATEGORIES FOR SORT
        context.setVariable("categories", productService.getAllProductCategory());
        // CHOOSABLE SUPPLIERS FOR SORT
        context.setVariable("suppliers", productService.getAllProductSupplier());

        engine.process("product/index.html", context, resp.getWriter());
    }

}
