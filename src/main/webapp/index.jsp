<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script src="jquery-3.7.1.min.js" type="text/javascript"></script>
    <link rel="shortcut icon" href="#">
    <link rel="icon" type="image/x-icon" href="${pageContext.request.contextPath}/icons1/exchange.png">

    <title>My converter</title>
</head>

<style>

    #outer div {
        width: 100%;
        text-align: right;

    }

    .english {
        width: 80px;
        height: 40px;
        background-color: transparent;
        text-decoration: none;
        border: none;
        outline: 0 !important;
        float: right;
        display: inline;
        margin-right: 200px;
        margin-left: 10px;
    }

    .english .engicon {
        content: url("icons1/gb.png");
    }


    .german {
        width: 80px;
        height: 40px;
        background-color: transparent;
        text-decoration: none;
        border: none;
        outline: 0 !important;
        float: right;
        display: inline;
    }

    .german .germicon {
        content: url("icons1/de.png");
        width: 80px;
        height: 40px;
    }

    .russian {
        width: 80px;
        height: 40px;
        background-color: transparent;
        text-decoration: none;
        border: none;
        outline: 0 !important;
        float: right;
        display: inline;
        margin-right: 10px;
    }

    .russian .rusicon {
        content: url("icons1/ru.png");
        width: 80px;
        height: 40px;
        border: 0.1mm solid ghostwhite;
    }


    p {
        text-align: center;
        margin-top: 60px;
        color: #1575d6;
        font-size: 24px;
        font-style: italic;
        font-family: "Times New Roman", serif;
        font-weight: bold;
    }


    p1.ex1 {
        margin-left: 20%;

        color: #1575d6;
        font-size: 24px;
        font-style: italic;
        font-family: "Times New Roman", serif;
        font-weight: bold;
        position: absolute;


    }

    p2.ex1 {

        color: #1575d6;
        font-size: 24px;
        font-style: italic;
        font-family: "Times New Roman", serif;
        font-weight: bold;
        margin-left: 59.5%;

    }

    .parent {
        width: 80%;
        margin-top: 20px;
        margin-left: 20%;
    }

    .child {
        float: left;
    }

    .box1 select {
        background-color: white;
        font-size: 24px;
        width: 300px;
        height: 50px;
        padding-left: 5px;
        border: 1px solid red;
        border-radius: 2mm;
        position: absolute;
    }

    .box1 select:focus {
        border: 1px solid red;
        outline: 1px solid transparent;
    }

    .box1 select:hover {
        -fx-background-color: transparent, #6699FF, transparent, transparent, white;
    }

    .box1 {
        display: inline;
    }

    .image1 {
        height: auto;
        width: auto;
        margin-left: 320px;
        margin-top: 0;
        background-color: transparent;
        text-decoration: none;
        border: 0.1mm solid ghostwhite;
        outline: 0 !important;
        position: absolute;
    }

    .changebutton {
        margin-left: 520px;
        margin-top: -13px;
        border: 1px solid black;
        border-radius: 2mm;
        background-color: chartreuse;
        width: 100px;
        height: 75px;
        position: relative;
    }

    .changebutton .icon {
        content: url("icons1/arrow.png");
        float: inside;
        width: 50px;
        height: 50px;
    }

    .changebutton span {
        float: inside;
        width: 50px;
        height: 50px;
    }

    .box2 select {
        margin-left: 130px;
        background-color: white;
        font-size: 24px;
        width: 300px;
        height: 50px;
        padding-left: 5px;
        border: 1px solid red;
        border-radius: 2mm;
        position: relative;
    }

    .box2 select:focus {
        border: 1px solid red;
        outline: 1px solid transparent;
    }

    .box2 select:hover {
        -fx-background-color: transparent, #6699FF, transparent, transparent, white;
    }


    .image2 {
        height: auto;
        width: auto;
        margin-left: 20px;
        margin-top: 0;
        background-color: transparent;
        text-decoration: none;
        border: 0.1mm solid ghostwhite;
        outline: 0 !important;
        position: relative;
    }

    label.firstcurrency {
        font-size: 24px;
        margin-left: 20%;

        font-family: "Arial", serif;
        position: absolute;
    }

    label.secondcurrency {
        font-size: 24px;
        margin-left: 59.5%;

        font-family: "Arial", serif;
        display: inline;
        position: relative;
    }

    p.ex3 {
        margin-left: 20%;
        margin-top: 200px;
        color: #1575d6;
        font-size: 24px;
        font-style: italic;
        font-family: "Times New Roman", serif;
        font-weight: bold;
        display: inline;
        position: absolute;
    }

    p3.ex3 {
        margin-left: 45%;
        margin-top: 200px;
        color: #1575d6;
        font-size: 24px;
        font-style: italic;
        font-family: "Times New Roman", serif;
        font-weight: bold;
        display: inline-block;
        position: relative;
    }

    .container .box {
        display: flex;
        flex-direction: row;

    }

    .inputvalue {
        margin-left: 20%;
        width: 300px;
        height: 50px;

        border: 1px solid lightgray;
        font-family: "Arial", serif;
        font-size: 24px;
        padding-left: 5px;
        border-radius: 2mm;
        position: absolute;

    }

    .inputvalue:focus {
        border: 1px solid lightgray;
        outline: 1px solid transparent;
    }

    .sum {
        margin-left: 45%;
        margin-top: 10px;
        font-family: "Arial", serif;
        padding-top: 10px;
        font-size: 24px;
        width: 50px;
        height: 50px;

        position: relative;
    }

    .clear1 {
        margin-left: 20%;
        position: relative;

    }

    .bbb {
        color: white;
        font-size: 24px;
        font-style: italic;
        font-family: "Times New Roman", serif;
        font-weight: bold;
        text-align: center;
        border-radius: 2mm;
        border: 1px solid lightgray;
        background-color: red;
        width: 150px;
        height: 50px;
    }


</style>
<body>

<div id="outer">

    <button class="english" id="english" onclick="setEnglish()"><span class="engicon"></span></button>
    <button class="german" id="german" onclick="setGerman()"><span class="germicon"></span></button>
    <button class="russian" id="russian" onclick="setRussian()"><span class="rusicon"></span></button>

</div>

<br>

<p id="course"> Official course </p>
<p1 class="ex1" id="choice">Choose your currency</p1>
<p2 class="ex1" id="change">The currency you change to</p2>
<div class="parent">

    <div class="child">
        <div class="box1">
            <select id="choice2" name="choice2" onchange="changeFlag(this);">
                <option value="empty" id="empty"></option>
                <option value="euro" id="euro">euro</option>
                <option value="us" id="us">US dollar</option>
                <option value="jp" id="jp">japanese yen</option>
                <option value="gb" id="gb">british pfund</option>
                <option value="ch" id="ch">swiss franc</option>
                <option value="au" id="au">australian dollar</option>
                <option value="ca" id="ca">canadian dollar</option>
                <option value="cn" id="cn">chinese yuan</option>
                <option value="ru" id="ru">russian ruble</option>
            </select>
        </div>
    </div>

    <div class="child">
        <div class="image1">
            <img id="img-currency" src="icons1/empty.png" alt="empty"/>
        </div>
    </div>

    <div class="child">
        <button id="changebutton" class="changebutton"><span class="icon"></span></button>
    </div>

    <div class="child">
        <div class="box2">
            <select id="choice1" name="choice1" onchange="changeotherFlag(this);">
                <option value="empty" id="empty1"></option>
                <option value="euro" id="euro1">euro</option>
                <option value="us" id="us1">US dollar</option>
                <option value="jp" id="jp1">japanese yen</option>
                <option value="gb" id="gb1">british pfund</option>
                <option value="ch" id="ch1">swiss franc</option>
                <option value="au" id="au1">australian dollar</option>
                <option value="ca" id="ca1">canadian dollar</option>
                <option value="cn" id="cn1">chinese yuan</option>
                <option value="ru" id="ru1">russian ruble</option>
            </select>
        </div>
    </div>
    <div class="child">
        <div class="image2">
            <img id="img-currency1" src="icons1/empty.png" alt="empty"/>
        </div>
    </div>

</div>

<br>
<br>
<br>
<br>
<label class="firstcurrency" id="firstcurrency"></label>

<label id="secondcurrency" class="secondcurrency" ></label>
<br>
<br>

<p class= "ex3" id="have" > You have: </p>

<p3 class="ex3" id="get">You will get:</p3>
<div></div>

<div class="container">
    <div class="box">
        <div id="sum22">
            <input class="inputvalue" type="text" id="inputvalue" name="inputvalue" onInput="getMultiply()">
        </div>
        <div class="sum">
            <p5 id="sum"></p5>
        </div>
        <div class="clear1">
            <button id="clear1" class="bbb" onclick="getClear()">clear</button>
        </div>
    </div>
</div>

<br>


<script src="js/js-app.js" type="text/javascript"></script>


</body>


</html>
