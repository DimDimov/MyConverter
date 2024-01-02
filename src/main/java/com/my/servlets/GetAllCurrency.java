package com.my.servlets;

import java.io.IOException;
import java.net.URL;
import java.util.Scanner;

class GetAllCurrency {

    private String result;

    GetAllCurrency(String result) {
        this.result = result;
    }

    private String getCurrency() throws IOException {

        URL url = new URL("https://www.onvista.de/devisen");
        Scanner sc = new Scanner(url.openStream());
        StringBuilder sb = new StringBuilder();
        while (sc.hasNext()) {
            sb.append(sc.next());
        }
        result = sb.toString();

        result = result.replaceAll("<[^>]*>", "");
        return result;
    }

    String getStr() throws IOException {
        return getCurrency();
    }
}
