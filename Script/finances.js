let mathConst = {
    0: "нуль",
    1: "один",
    2: "два",
    3: "три",
    4: "чотири",
    5: "пять",
    6: "шість",
    7: "сім",
    8: "вісім",
    9: "девять",
    10: "десять",
    11: "одинадцять",
    12: "дванадцять",
    13: "тринадцять",
    14: "чотирнадцять",
    15: "пятнадцять",
    16: "шістнадцять",
    17: "сімнадцять", 
    18: "вісімнадцять", 
    19: "девятнадцять", 
    20: "двадцять", 
    40: "сорок", 
    90: "девяносто", 
    100: "сто"
}

function getNumberSpelling(){
    let number = Number(document.querySelector("#inp_1").value);
    let spelling = "";
    if((number <= 20 && number >= 0) || (number == 40) || (number == 90) || (number == 100)){
        spelling = mathConst[number];
    }
    else{
        spelling = mathConst[Math.floor(number / 10)] + "десят " + mathConst[number % 10];
    }
    document.querySelector("#output").innerHTML = spelling;
}
let 