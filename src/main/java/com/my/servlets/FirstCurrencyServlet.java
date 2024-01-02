package com.my.servlets;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import javax.servlet.*;
import java.io.*;

@WebServlet("/FirstCurrencyServlet")
public class FirstCurrencyServlet extends HttpServlet {

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) {

    }


    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {


        String sign = req.getParameter("sign").trim();
        String result = " ", str = " ";


        GetAllCurrency wholePage = new GetAllCurrency(result);

        result = wholePage.getStr();

        String find = "=CNY1EUR";

        int i = result.indexOf(find);

        if (i > 0) {
            if (sign.equals("1")) {
                str = result.substring(i + 63, i + 69);
                str = str.replace(",", ".") + " EUR";

            }
            if (sign.equals("2")) {
                str = result.substring(i + 118, i + 124);
                str = str.replace(",", ".") + " EUR";
            }
            if (sign.equals("3")) {
                str = result.substring(i + 171, i + 177);
                str = str.replace(",", ".") + " EUR";
            }
            if (sign.equals("4")) {
                str = result.substring(i + 226, i + 232);
                str = str.replace(",", ".") + " EUR";
            }
            if (sign.equals("5")) {
                str = result.substring(i + 281, i + 287);
                str = str.replace(",", ".") + " EUR";
            }
            if (sign.equals("6")) {
                str = result.substring(i + 335, i + 341);
                str = str.replace(",", ".") + " EUR";
            }
            if (sign.equals("7")) {
                str = result.substring(i + 444, i + 450);
                str = str.replace(",", ".") + " EUR";
            }
            if (sign.equals("9")) {
                str = result.substring(i + 9, i + 15);
                str = str.replace(",", ".") + " USD";
            }
            if (sign.equals("10")) {
                str = result.substring(i + 124, i + 130);
                str = str.replace(",", ".") + " USD";
            }
            if (sign.equals("11")) {
                str = result.substring(i + 177, i + 183);
                str = str.replace(",", ".") + " USD";
            }
            if (sign.equals("12")) {
                str = result.substring(i + 232, i + 238);
                str = str.replace(",", ".") + " USD";
            }
            if (sign.equals("13")) {
                str = result.substring(i + 287, i + 293);
                str = str.replace(",", ".") + " USD";
            }
            if (sign.equals("14")) {
                str = result.substring(i + 341, i + 347);
                str = str.replace(",", ".") + " UAD";
            }
            if (sign.equals("15")) {
                str = result.substring(i + 450, i + 456);
                str = str.replace(",", ".") + " UAD";
            }
            if (sign.equals("17")) {
                str = result.substring(i + 15, i + 23);
                str = str.replace(",", ".") + " JPY";
            }
            if (sign.equals("18")) {
                str = result.substring(i + 70, i + 78);
                str = str.replace(",", ".") + " JPY";
            }
            if (sign.equals("19")) {
                str = result.substring(i + 183, i + 191);
                str = str.replace(",", ".") + " JPY";
            }
            if (sign.equals("20")) {
                str = result.substring(i + 238, i + 246);
                str = str.replace(",", ".") + " JPY";
            }
            if (sign.equals("21")) {
                str = result.substring(i + 293, i + 300);
                str = str.replace(",", ".") + " JPY";
            }
            if (sign.equals("22")) {
                str = result.substring(i + 347, i + 355);
                str = str.replace(",", ".") + " JPY";
            }
            if (sign.equals("23")) {
                str = result.substring(i + 456, i + 463);
                str = str.replace(",", ".") + " JPY";
            }
            if (sign.equals("25")) {
                str = result.substring(i + 23, i + 29);
                str = str.replace(",", ".") + " GBP";
            }
            if (sign.equals("26")) {
                str = result.substring(i + 78, i + 84);
                str = str.replace(",", ".") + " GBP";
            }
            if (sign.equals("27")) {
                str = result.substring(i + 131, i + 137);
                str = str.replace(",", ".") + " GBP";
            }
            if (sign.equals("28")) {
                str = result.substring(i + 246, i + 252);
                str = str.replace(",", ".") + " GBP";
            }
            if (sign.equals("29")) {
                str = result.substring(i + 300, i + 306);
                str = str.replace(",", ".") + " GBP";
            }
            if (sign.equals("30")) {
                str = result.substring(i + 355, i + 361);
                str = str.replace(",", ".") + " GBP";
            }
            if (sign.equals("31")) {
                str = result.substring(i + 463, i + 469);
                str = str.replace(",", ".") + " GBP";
            }
            if (sign.equals("33")) {
                str = result.substring(i + 29, i + 35);
                str = str.replace(",", ".") + " CHF";
            }
            if (sign.equals("34")) {
                str = result.substring(i + 84, i + 90);
                str = str.replace(",", ".") + " CHF";
            }
            if (sign.equals("35")) {
                str = result.substring(i + 137, i + 143);
                str = str.replace(",", ".") + " CHF";
            }
            if (sign.equals("36")) {
                str = result.substring(i + 192, i + 198);
                str = str.replace(",", ".") + " CHF";
            }
            if (sign.equals("37")) {
                str = result.substring(i + 306, i + 312);
                str = str.replace(",", ".") + " CHF";
            }
            if (sign.equals("38")) {
                str = result.substring(i + 361, i + 367);
                str = str.replace(",", ".") + " CHF";
            }
            if (sign.equals("39")) {
                str = result.substring(i + 469, i + 475);
                str = str.replace(",", ".") + " CHF";
            }
            if (sign.equals("41")) {
                str = result.substring(i + 35, i + 41);
                str = str.replace(",", ".") + " AUD";
            }
            if (sign.equals("42")) {
                str = result.substring(i + 90, i + 96);
                str = str.replace(",", ".") + " AUD";
            }
            if (sign.equals("43")) {
                str = result.substring(i + 143, i + 149);
                str = str.replace(",", ".") + " AUD";
            }
            if (sign.equals("44")) {
                str = result.substring(i + 198, i + 204);
                str = str.replace(",", ".") + " AUD";
            }
            if (sign.equals("45")) {
                str = result.substring(i + 253, i + 259);
                str = str.replace(",", ".") + " AUD";
            }
            if (sign.equals("46")) {
                str = result.substring(i + 367, i + 373);
                str = str.replace(",", ".") + " AUD";
            }
            if (sign.equals("47")) {
                str = result.substring(i + 475, i + 481);
                str = str.replace(",", ".") + " AUD";
            }
            if (sign.equals("49")) {
                str = result.substring(i + 41, i + 47);
                str = str.replace(",", ".") + " CAD";
            }
            if (sign.equals("50")) {
                str = result.substring(i + 96, i + 102);
                str = str.replace(",", ".") + " CAD";
            }
            if (sign.equals("51")) {
                str = result.substring(i + 149, i + 155);
                str = str.replace(",", ".") + " CAD";
            }
            if (sign.equals("52")) {
                str = result.substring(i + 204, i + 210);
                str = str.replace(",", ".") + " CAD";
            }
            if (sign.equals("53")) {
                str = result.substring(i + 259, i + 265);
                str = str.replace(",", ".") + " CAD";
            }
            if (sign.equals("54")) {
                str = result.substring(i + 313, i + 319);
                str = str.replace(",", ".") + " CAD";
            }
            if (sign.equals("55")) {
                str = result.substring(i + 481, i + 487);
                str = str.replace(",", ".") + " CAD";
            }
            if (sign.equals("57")) {
                str = result.substring(i + 53, i + 59);
                str = str.replace(",", ".") + " CNY";
            }
            if (sign.equals("58")) {
                str = result.substring(i + 108, i + 114);
                str = str.replace(",", ".") + " CNY";
            }
            if (sign.equals("59")) {
                str = result.substring(i + 161, i + 167);
                str = str.replace(",", ".") + " CNY";
            }
            if (sign.equals("60")) {
                str = result.substring(i + 216, i + 222);
                str = str.replace(",", ".") + " CNY";
            }
            if (sign.equals("61")) {
                str = result.substring(i + 271, i + 277);
                str = str.replace(",", ".") + " CNY";
            }
            if (sign.equals("62")) {
                str = result.substring(i + 325, i + 331);
                str = str.replace(",", ".") + " CNY";
            }
            if (sign.equals("63")) {
                str = result.substring(i + 380, i + 386);
                str = str.replace(",", ".") + " CNY";
            }
            if (sign.equals("73")) {
                str = "1 EUR";
            }
            if (sign.equals("74")) {
                str = "1 USD";
            }
            if (sign.equals("75")) {
                str = "1 JPY";
            }
            if (sign.equals("76")) {
                str = "1 GBP";
            }
            if (sign.equals("77")) {
                str = "1 CHF";
            }
            if (sign.equals("78")) {
                str = "1 AUD";
            }
            if (sign.equals("79")) {
                str = "1 CAD";
            }
            if (sign.equals("80")) {
                str = "1 CNY";
            }
            if (sign.equals("81")) {
                str = "1 RUB";
            }
            if (sign.equals("82")) {
                str = "";
            }

            if (sign.matches("8|16|24|32|40|48|56|64|65|66|67|68|69|70|71|72")) {
                RequestDispatcher rd = req.getRequestDispatcher("/SecondCurrencyServlet");
                rd.forward(req, resp);
            }


        }
        resp.getWriter().write(str);


        resp.setContentType("text/plain");


    }

}
