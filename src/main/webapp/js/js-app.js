let a = document.getElementById('firstcurrency');

let sign = "";
let responseValue = "";

let result = document.getElementById('sum').innerHTML;
const m = document.getElementById('choice2');
const n = document.getElementById('choice1');

window.onload = function () {
    m.selectedIndex = 1;
    n.selectedIndex = 2;
    changeFlag(m);
    changeotherFlag(n);
};


function setEnglish() {
    document.getElementById('course').innerHTML = "Official course";
    document.getElementById('choice').innerHTML = "Choose your currency";
    document.getElementById('change').innerHTML = "The currency you change to";
    document.getElementById('have').innerHTML = "You have";
    document.getElementById('get').innerHTML = "You will get";
    document.getElementById('clear1').innerHTML = "clear";

    document.getElementById('empty').innerHTML = "";
    document.getElementById('euro').innerHTML = "euro";
    document.getElementById('us').innerHTML = "US dollar";
    document.getElementById('jp').innerHTML = "japanese yen";
    document.getElementById('gb').innerHTML = "british pound";
    document.getElementById('ch').innerHTML = "swiss franc";
    document.getElementById('au').innerHTML = "australian dollar";
    document.getElementById('ca').innerHTML = "canadian dollar";
    document.getElementById('cn').innerHTML = "chinese yuan";
    document.getElementById('ru').innerHTML = "russian ruble";

    document.getElementById('empty1').innerHTML = "";
    document.getElementById('euro1').innerHTML = "euro";
    document.getElementById('us1').innerHTML = "US dollar";
    document.getElementById('jp1').innerHTML = "japanese yen";
    document.getElementById('gb1').innerHTML = "british pound";
    document.getElementById('ch1').innerHTML = "swiss franc";
    document.getElementById('au1').innerHTML = "australian dollar";
    document.getElementById('ca1').innerHTML = "canadian dollar";
    document.getElementById('cn1').innerHTML = "chinese yuan";
    document.getElementById('ru1').innerHTML = "russian ruble";
}

function setGerman() {
    document.getElementById('course').innerHTML = "Offizieller Kurs";
    document.getElementById('choice').innerHTML = "Wählen Sie Ihre Währung";
    document.getElementById('change').innerHTML = "Die Währung, zu der Sie wechseln";
    document.getElementById('have').innerHTML = "Sie haben";
    document.getElementById('get').innerHTML = "Sie werden erhalten";
    document.getElementById('clear1').innerHTML = "löschen";

    document.getElementById('empty').innerHTML = "";
    document.getElementById('euro').innerHTML = "Euro";
    document.getElementById('us').innerHTML = "US Dollar";
    document.getElementById('jp').innerHTML = "Japanischer Yen";
    document.getElementById('gb').innerHTML = "Britisches Pfund";
    document.getElementById('ch').innerHTML = "Schweizer Franken";
    document.getElementById('au').innerHTML = "Australischer Dollar";
    document.getElementById('ca').innerHTML = "Kanadischer Dollar";
    document.getElementById('cn').innerHTML = "Chinesischer Renminbi Yuan";
    document.getElementById('ru').innerHTML = "Russischer Rubel";

    document.getElementById('empty1').innerHTML = "";
    document.getElementById('euro1').innerHTML = "Euro";
    document.getElementById('us1').innerHTML = "US Dollar";
    document.getElementById('jp1').innerHTML = "Japanischer Yen";
    document.getElementById('gb1').innerHTML = "Britisches Pfund";
    document.getElementById('ch1').innerHTML = "Schweizer Franken";
    document.getElementById('au1').innerHTML = "Australischer Dollar";
    document.getElementById('ca1').innerHTML = "Kanadischer Dollar";
    document.getElementById('cn1').innerHTML = "Chinesischer Renminbi Yuan";
    document.getElementById('ru1').innerHTML = "Russischer Rubel";
}

function setRussian() {
    document.getElementById('course').innerHTML = "Официальный курс";
    document.getElementById('choice').innerHTML = "Выберите вашу валюту";
    document.getElementById('change').innerHTML = "Валюта, на которую вы меняете";
    document.getElementById('have').innerHTML = "У вас есть";
    document.getElementById('get').innerHTML = "Вы получите";
    document.getElementById('clear1').innerHTML = "очистить";

    document.getElementById('empty').innerHTML = "";
    document.getElementById('euro').innerHTML = "евро";
    document.getElementById('us').innerHTML = "доллар США";
    document.getElementById('jp').innerHTML = "японская иена";
    document.getElementById('gb').innerHTML = "британский фунт";
    document.getElementById('ch').innerHTML = "швейцарский франк";
    document.getElementById('au').innerHTML = "австралийский доллар";
    document.getElementById('ca').innerHTML = "канадский доллар";
    document.getElementById('cn').innerHTML = "китайский юань";
    document.getElementById('ru').innerHTML = "российский рубль";

    document.getElementById('empty1').innerHTML = "";
    document.getElementById('euro1').innerHTML = "евро";
    document.getElementById('us1').innerHTML = "доллар США";
    document.getElementById('jp1').innerHTML = "японская иена";
    document.getElementById('gb1').innerHTML = "британский фунт";
    document.getElementById('ch1').innerHTML = "швейцарский франк";
    document.getElementById('au1').innerHTML = "австралийский доллар";
    document.getElementById('ca1').innerHTML = "канадский доллар";
    document.getElementById('cn1').innerHTML = "китайский юань";
    document.getElementById('ru1').innerHTML = "российский рубль";
}


function getClear() {

    sign = "82";

    document.getElementById('sum').innerHTML = '';

    document.getElementById('inputvalue').value = '';
    document.getElementById('choice2').selectedIndex = 0;
    document.getElementById('choice1').selectedIndex = 0;

    document.getElementById('choice2').onchange(this);
    document.getElementById('choice1').onchange(this);
}

function changeFlag(element) {

    document.querySelector("#img-currency").src = "icons1/" + element.value + ".png";

    if (m.value === "empty") {
        sign = "82";
        a.innerHTML = "";
        document.getElementById('img-currency').src = "icons1/empty.png";
    } else if (m.value === "euro") {
        a.innerHTML = "1 EUR";
        switch (n.value) {
            case "euro":
                sign = "73";
                break;
            case "us":
                sign = "9";
                break;
            case "jp":
                sign = "17";
                break;
            case "gb":
                sign = "25";
                break;
            case "ch":
                sign = "33";
                break;
            case "au":
                sign = "41";
                break;
            case "ca":
                sign = "49";
                break;
            case "cn":
                sign = "57";
                break;
            case "ru":
                sign = "65";
                break;
        }
    } else if (m.value === "us") {
        a.innerHTML = "1 USD";
        switch (n.value) {
            case "us":
                sign = "74";
                break;
            case "euro":
                sign = "1";
                break;
            case "jp":
                sign = "18";
                break;
            case "gb":
                sign = "26";
                break;
            case "ch":
                sign = "34";
                break;
            case "au":
                sign = "42";
                break;
            case "ca":
                sign = "50";
                break;
            case "cn":
                sign = "58";
                break;
            case "ru":
                sign = "66";
                break;
        }

    } else if (m.value === "jp") {
        a.innerHTML = "1 JPY";
        switch (n.value) {
            case "jp":
                sign = "75";
                break;
            case "euro":
                sign = "2";
                break;
            case "us":
                sign = "10";
                break;
            case "gb":
                sign = "27";
                break;
            case "ch":
                sign = "35";
                break;
            case "au":
                sign = "43";
                break;
            case "ca":
                sign = "51";
                break;
            case "cn":
                sign = "59";
                break;
            case "ru":
                sign = "67";
                break;
        }
    } else if (m.value === "gb") {
        a.innerHTML = "1 GBP";
        switch (n.value) {
            case "gb":
                sign = "76";
                break;
            case "euro":
                sign = "3";
                break;
            case "us":
                sign = "11";
                break;
            case "jp":
                sign = "19";
                break;
            case "ch":
                sign = "36";
                break;
            case "au":
                sign = "44";
                break;
            case "ca":
                sign = "52";
                break;
            case "cn":
                sign = "60";
                break;
            case "ru":
                sign = "68";
                break;
        }
    } else if (m.value === "ch") {
        a.innerHTML = "1 CHF";
        switch (n.value) {
            case "ch":
                sign = "77";
                break;
            case "euro":
                sign = "4";
                break;
            case "us":
                sign = "12";
                break;
            case "jp":
                sign = "20";
                break;
            case "gb":
                sign = "28";
                break;
            case "au":
                sign = "45";
                break;
            case "ca":
                sign = "53";
                break;
            case "cn":
                sign = "61";
                break;
            case "ru":
                sign = "69";
                break;
        }
    } else if (m.value === "au") {
        a.innerHTML = "1 AUD";
        switch (n.value) {
            case "au":
                sign = "78";
                break;
            case "euro":
                sign = "5";
                break;
            case "us":
                sign = "13";
                break;
            case "jp":
                sign = "21";
                break;
            case "gb":
                sign = "29";
                break;
            case "ch":
                sign = "37";
                break;
            case "ca":
                sign = "54";
                break;
            case "cn":
                sign = "62";
                break;
            case "ru":
                sign = "70";
                break;
        }
    } else if (m.value === "ca") {
        a.innerHTML = "1 CAD";
        switch (n.value) {
            case "ca":
                sign = "79";
                break;
            case "euro":
                sign = "6";
                break;
            case "us":
                sign = "14";
                break;
            case "jp":
                sign = "22";
                break;
            case "gb":
                sign = "30";
                break;
            case "ch":
                sign = "38";
                break;
            case "au":
                sign = "46";
                break;
            case "cn":
                sign = "63";
                break;
            case "ru":
                sign = "71";
                break;
        }
    } else if (m.value === "cn") {
        a.innerHTML = "1 CNY";
        switch (n.value) {
            case "cn":
                sign = "80";
                break;
            case "euro":
                sign = "7";
                break;
            case "us":
                sign = "15";
                break;
            case "jp":
                sign = "23";
                break;
            case "gb":
                sign = "31";
                break;
            case "ch":
                sign = "39";
                break;
            case "au":
                sign = "47";
                break;
            case "ca":
                sign = "55";
                break;
            case "ru":
                sign = "72";
                break;
        }
    } else if (m.value === "ru") {
        a.innerHTML = "1 RUB";
        switch (n.value) {
            case "ru":
                sign = "81";
                break;
            case "euro":
                sign = "8";
                break;
            case "us":
                sign = "16";
                break;
            case "jp":
                sign = "24";
                break;
            case "gb":
                sign = "32";
                break;
            case "ch":
                sign = "40";
                break;
            case "au":
                sign = "48";
                break;
            case "ca":
                sign = "56";
                break;
            case "cn":
                sign = "64";
                break;
        }
    }

    $.ajax({
        url: 'FirstCurrencyServlet',
        method: 'POST',
        data: {
            "sign": sign
        },
        success: function (responseText) {
            $('#secondcurrency').text(responseText);
            sendRequest(responseText);
            return responseText;
        }
    });


}

function changeotherFlag(element) {

    document.querySelector("#img-currency1").src = "icons1/" + element.value + ".png";

    if (n.value === "empty") {
        sign = "82";
          document.getElementById('secondcurrency').innerHTML = "";
        document.getElementById('img-currency1').src = "icons1/empty.png";
    } else if (n.value === "euro") {
        switch (m.value) {
            case "euro":
                sign = "73";
                break;
            case "us":
                sign = "1";
                break;
            case "jp":
                sign = "2";
                break;
            case "gb":
                sign = "3";
                break;
            case "ch":
                sign = "4";
                break;
            case "au":
                sign = "5";
                break;
            case "ca":
                sign = "6";
                break;
            case "cn":
                sign = "7";
                break;
            case "ru":
                sign = "8";
                break;
        }

    } else if (n.value === "us") {
        switch (m.value) {
            case "us":
                sign = "74";
                break;
            case "euro":
                sign = "9";
                break;
            case "jp":
                sign = "10";
                break;
            case "gb":
                sign = "11";
                break;
            case "ch":
                sign = "12";
                break;
            case "au":
                sign = "13";
                break;
            case "ca":
                sign = "14";
                break;
            case "cn":
                sign = "15";
                break;
            case "ru":
                sign = "16";
                break;
        }
    } else if (n.value === "jp") {
        switch (m.value) {
            case "jp":
                sign = "75";
                break;
            case "euro":
                sign = "17";
                break;
            case "us":
                sign = "18";
                break;
            case "gb":
                sign = "19";
                break;
            case "ch":
                sign = "20";
                break;
            case "au":
                sign = "21";
                break;
            case "ca":
                sign = "22";
                break;
            case "cn":
                sign = "23";
                break;
            case "ru":
                sign = "24";
                break;
        }
    } else if (n.value === "gb") {
        switch (m.value) {
            case "gb":
                sign = "76";
                break;
            case "euro":
                sign = "25";
                break;
            case "us":
                sign = "26";
                break;
            case "jp":
                sign = "27";
                break;
            case "ch":
                sign = "28";
                break;
            case "au":
                sign = "29";
                break;
            case "ca":
                sign = "30";
                break;
            case "cn":
                sign = "31";
                break;
            case "ru":
                sign = "32";
                break;
        }
    } else if (n.value === "ch") {
        switch (m.value) {
            case "ch":
                sign = "77";
                break;
            case "euro":
                sign = "33";
                break;
            case "us":
                sign = "34";
                break;
            case "jp":
                sign = "35";
                break;
            case "gb":
                sign = "36";
                break;
            case "au":
                sign = "37";
                break;
            case "ca":
                sign = "38";
                break;
            case "cn":
                sign = "39";
                break;
            case "ru":
                sign = "40";
                break;
        }
    } else if (n.value === "au") {
        switch (m.value) {
            case "au":
                sign = "78";
                break;
            case "euro":
                sign = "41";
                break;
            case "us":
                sign = "42";
                break;
            case "jp":
                sign = "43";
                break;
            case "gb":
                sign = "44";
                break;
            case "ch":
                sign = "45";
                break;
            case "ca":
                sign = "46";
                break;
            case "cn":
                sign = "47";
                break;
            case "ru":
                sign = "48";
                break;
        }
    } else if (n.value === "ca") {
        switch (m.value) {
            case "ca":
                sign = "79";
                break;
            case "euro":
                sign = "49";
                break;
            case "us":
                sign = "50";
                break;
            case "jp":
                sign = "51";
                break;
            case "gb":
                sign = "52";
                break;
            case "ch":
                sign = "53";
                break;
            case "au":
                sign = "54";
                break;
            case "cn":
                sign = "55";
                break;
            case "ru":
                sign = "56";
                break;
        }
    } else if (n.value === "cn") {
        switch (m.value) {
            case "cn":
                sign = "80";
                break;
            case "euro":
                sign = "57";
                break;
            case "us":
                sign = "58";
                break;
            case "jp":
                sign = "59";
                break;
            case "gb":
                sign = "60";
                break;
            case "ch":
                sign = "61";
                break;
            case "au":
                sign = "62";
                break;
            case "ca":
                sign = "63";
                break;
            case "ru":
                sign = "64";
                break;
        }
    } else if (n.value === "ru") {
        switch (m.value) {
            case "ru":
                sign = "81";
                break;
            case "euro":
                sign = "65";
                break;
            case "us":
                sign = "66";
                break;
            case "jp":
                sign = "67";
                break;
            case "gb":
                sign = "68";
                break;
            case "ch":
                sign = "69";
                break;
            case "au":
                sign = "70";
                break;
            case "ca":
                sign = "71";
                break;
            case "cn":
                sign = "72";
                break;
        }

    }

    $.ajax({
        url: 'FirstCurrencyServlet',
        method: 'POST',
        data: {
            "sign": sign
        },
        success: function (responseText) {
            $('#secondcurrency').text(responseText);
            sendRequest(responseText);
            return responseText;
        }

    });

}


function sendRequest(responseText) {
    responseValue = responseText;

    const number1 = document.getElementById('inputvalue').value;
    result = parseFloat(number1) * parseFloat(responseValue);
    document.getElementById('sum').innerHTML = result.toFixed(2);
    if (isNaN(result)) {
        document.getElementById('sum').innerHTML = '';
    }
}

function getMultiply() {
    const number1 = document.getElementById('inputvalue').value;


    const inValue = "" + responseValue;

    if (isNaN(number1)) {
        alert("Undefined number");
    }

    result = parseFloat(number1) * parseFloat(inValue);
    document.getElementById('sum').innerHTML = result.toFixed(2);

    if (isNaN(result)) {
        document.getElementById('sum').innerHTML = '';
    }
}

function changeList() {
    let temp;
    temp = document.getElementById('choice1').value;
    document.getElementById('choice1').value = document.getElementById('choice2').value;
    document.getElementById('choice2').value = temp;

    document.getElementById('choice2').onchange(this);
    document.getElementById('choice1').onchange(this);
}

document.querySelector("#changebutton").addEventListener("click", changeList);
