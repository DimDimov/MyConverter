package com.my.servlets;

import java.io.IOException;
import java.net.URL;
import java.util.Scanner;

class GetRussianCurrency {

    private String course;

    GetRussianCurrency(String course) {
        this.course = course;
    }

    private String getRuscur () throws IOException {

        URL url = new URL("https://www.cbr.ru/currency_base/daily/");
        Scanner sc = new Scanner(url.openStream());
        StringBuilder sb = new StringBuilder();
        while (sc.hasNext()) {
            sb.append(sc.next());
        }
        course = sb.toString();

        course = course.replaceAll("<[^>]*>", "");

        return course;
    }

    String getCourse() throws IOException {
        return getRuscur();
    }
}
