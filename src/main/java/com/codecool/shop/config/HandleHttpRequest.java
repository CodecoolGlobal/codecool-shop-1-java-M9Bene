package com.codecool.shop.config;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class HandleHttpRequest {

    public StringBuffer getRequestedData(URL url) throws IOException {
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");

        BufferedReader input = new BufferedReader(new InputStreamReader(connection.getInputStream()));

        String inputString;
        StringBuffer content = new StringBuffer();

        while ((inputString = input.readLine()) != null) {
            content.append(inputString);
        }

        input.close();
        connection.disconnect();
        return content;
    }
}
