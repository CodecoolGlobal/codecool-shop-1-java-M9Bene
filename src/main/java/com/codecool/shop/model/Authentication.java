package com.codecool.shop.model;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Authentication {

    private Map<String, String> datas = new HashMap<>();


    public Authentication(Map<String, String> datas) {
        this.datas = datas;
    }

    public void addNewAccount(String username, String password){
        datas.put(username,password);
    }

    public String getPasswordForUserName(String username){
        return datas.get(username);
    }

    public boolean isUserNameAlreadyInUse(String username){
        return datas.containsKey(username);
    }


}
