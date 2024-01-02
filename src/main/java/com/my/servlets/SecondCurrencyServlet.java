package com.my.servlets;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import javax.servlet.*;
import java.io.*;

@WebServlet("/SecondCurrencyServlet")

public class SecondCurrencyServlet extends HttpServlet {
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String sign = req.getParameter("sign").trim();
        String result1 = " ", str1 = " ";
        double b;
        GetRussianCurrency ruscur = new GetRussianCurrency(result1);
        result1 = ruscur.getCourse();
        String find1 = "036AUD";
        int j = result1.indexOf(find1);

        if (j > 0) {
            switch (sign) {
                case "8": {
                    str1 = result1.substring(j + 646, j + 653);
                    String str2 = str1.replace(",", ".");
                    b = 1 / Double.parseDouble(str2);
                    b = Math.round(b * 10000);
                    b = b / 10000;
                    str1 = b + " EUR";
                    break;
                }
                case "16": {
                    str1 = result1.substring(j + 624, j + 631);
                    String str2 = str1.replace(",", ".");
                    b = 1 / Double.parseDouble(str2);
                    b = Math.round(b * 10000);
                    b = b / 10000;
                    str1 = b + " USD";
                    break;
                }
                case "24": {
                    str1 = result1.substring(j + 1996, j + 2003);
                   String str2 = str1.replace(",", ".");
                    b = 100 / Double.parseDouble(str2);
                   b = Math.round(b * 10000);
                    b = b / 10000;
                    str1 = b + " JPY";
                    break;
                }
                case "32": {
                    str1 = result1.substring(j + 1777, j + 1785);
                    String str2 = str1.replace(",", ".");
                    b = 1 / Double.parseDouble(str2);
                    b = Math.round(b * 10000);
                    b = b / 10000;
                    str1 = b + " GBP";
                    break;
                }
                case "40": {
                    str1 = result1.substring(j + 1900, j + 1908);
                    String str2 = str1.replace(",", ".");
                    b = 1 / Double.parseDouble(str2);
                    b = Math.round(b * 10000);
                    b = b / 10000;
                    str1 = b + " CHF";
                    break;
                }
                case "48": {
                    str1 = result1.substring(j + 45, j + 52);
                    String str2 = str1.replace(",", ".");
                    b = 1 / Double.parseDouble(str2);
                    b = Math.round(b * 10000);
                    b = b / 10000;
                    str1 = b + " AUD";
                    break;
                }
                case "56": {
                    str1 = result1.substring(j + 887, j + 894);
                    String str2 = str1.replace(",", ".");
                    b = 1 / Double.parseDouble(str2);
                    b = Math.round(b * 10000);
                    b = b / 10000;
                    str1 = b + " CAD";
                    break;
                }
                case "64": {
                    str1 = result1.substring(j + 1012, j + 1019);
                    String str2 = str1.replace(",", ".");
                    b = 1 / Double.parseDouble(str2);
                    b = Math.round(b * 10000);
                    b = b / 10000;
                    str1 = b + " CNY";
                    break;
                }
                case "65": {
                    str1 = result1.substring(j + 646, j + 653);
                    str1 = str1.replace(",", ".") + " RUB";
                    break;
                }
                case "66": {
                    str1 = result1.substring(j + 624, j + 631);
                    str1 = str1.replace(",", ".") + " RUB";
                    break;
                }
                case "67": {
                    str1 = result1.substring(j + 1996, j + 2002);
                    str1 = str1.replace(",", ".") + " RUB";
                    break;
                }
                case "68": {
                    str1 = result1.substring(j + 1777, j + 1784);
                    str1 = str1.replace(",", ".") + " RUB";
                    break;
                }
                case "69": {
                    str1 = result1.substring(j + 1900, j + 1907);
                    str1 = str1.replace(",", ".") + " RUB";
                    break;
                }
                case "70": {
                    str1 = result1.substring(j + 45, j + 52);
                    str1 = str1.replace(",", ".") + " RUB";
                    break;
                }
                case "71": {
                    str1 = result1.substring(j + 887, j + 893);
                    str1 = str1.replace(",", ".") + " RUB";
                    break;
                }
                case "72": {
                    str1 = result1.substring(j + 1012, j + 1018);
                    str1 = str1.replace(",", ".") + " RUB";
                    break;
                }
            }
        }
        resp.getWriter().write(str1);
        resp.setContentType("text/plain");

    }
}
