package com.codecool.shop.config;

import com.codecool.shop.dao.ProductCategoryDao;
import com.codecool.shop.dao.ProductDao;
import com.codecool.shop.dao.SupplierDao;
import com.codecool.shop.dao.implementation.ProductCategoryDaoMem;
import com.codecool.shop.dao.implementation.ProductDaoMem;
import com.codecool.shop.dao.implementation.SupplierDaoMem;
import com.codecool.shop.model.Product;
import com.codecool.shop.model.ProductCategory;
import com.codecool.shop.model.Supplier;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;
import java.math.BigDecimal;

@WebListener
public class Initializer implements ServletContextListener {

    @Override
    public void contextInitialized(ServletContextEvent sce) {
        ProductDao productDataStore = ProductDaoMem.getInstance();
        ProductCategoryDao productCategoryDataStore = ProductCategoryDaoMem.getInstance();
        SupplierDao supplierDataStore = SupplierDaoMem.getInstance();

        //setting up a new supplier
        Supplier Lufy = new Supplier("Lufy Kft", "Digital content and services");
        supplierDataStore.add(Lufy);
        Supplier Kozi = new Supplier("Kozi Bt", "Computers");
        supplierDataStore.add(Kozi);
        Supplier Marci = new Supplier("Marci Supplier", "Computers");
        supplierDataStore.add(Marci);

        //setting up a new product category


        ProductCategory Costumes = new ProductCategory("Costumes", "Hardware", "A tablet computer, commonly shortened to tablet, is a thin, flat mobile computer with a touchscreen display.");
        productCategoryDataStore.add(Costumes);

        ProductCategory Gifts = new ProductCategory("Gifts", "Hardware", "A tablet computer, commonly shortened to tablet, is a thin, flat mobile computer with a touchscreen display.");
        productCategoryDataStore.add(Gifts);

        ProductCategory Figures = new ProductCategory("Figures", "Hardware", "A tablet computer, commonly shortened to tablet, is a thin, flat mobile computer with a touchscreen display.");
        productCategoryDataStore.add(Figures);

        //setting up products and printing it
        productDataStore.add(new Product("ajándék", new BigDecimal("49.9"), "USD", "Fantastic price. Large content ecosystem. Good parental controls. Helpful technical support.", Gifts, Marci));
        productDataStore.add(new Product("figurak", new BigDecimal("479"), "USD", "Keyboard cover is included. Fanless Core m5 processor. Full-size USB ports. Adjustable kickstand.", Figures, Lufy));
        productDataStore.add(new Product("ruhák", new BigDecimal("89"), "USD", "Amazon's latest Fire HD 8 tablet is a great value for media consumption.", Figures, Kozi));
        productDataStore.add(new Product("batmanruha", new BigDecimal("89"), "USD", "Amazon's latest Fire HD 8 tablet is a great value for media consumption.", Costumes, Marci));
        productDataStore.add(new Product("Soft toy", new BigDecimal("49.9"), "USD", "Fantastic price. Large content ecosystem. Good parental controls. Helpful technical support.", Gifts, Marci));
        productDataStore.add(new Product("Puppet", new BigDecimal("479"), "USD", "Keyboard cover is included. Fanless Core m5 processor. Full-size USB ports. Adjustable kickstand.", Figures, Marci));
        productDataStore.add(new Product("Batman Suit", new BigDecimal("89"), "USD", "Amazon's latest Fire HD 8 tablet is a great value for media consumption.", Costumes, Lufy));
    }
}
