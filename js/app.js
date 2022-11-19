function palindrome() {
    // take input
    let userText = document.getElementById("palindromeText").value;

    let checkUserText = checkPalindrome(userText);

    document.getElementById("palindromeResult").innerHTML = checkUserText;
}

function checkPalindrome(value) {
    // check palindrome
    let len = value.length;

    for (let i = 0; i < len / 2; i++) {
        if (value[i] !== value[len - 1 - i]) {
            return value + " --> No es palídrome";
        }
    }
    return value + " --> SI es palíndrome";
}

function maxValue() {
    let numOne = parseFloat(document.getElementById("numberOne").value);
    let numTwo = parseFloat(document.getElementById("numberTwo").value);

    let checkMaxNum = checkMaxValue(numOne, numTwo);

    document.getElementById("maxResult").innerHTML = checkMaxNum;
}

function checkMaxValue(numOne, numTwo) {
    if (numOne <= numTwo) {
        return "El valor mayor es: " + numTwo;
    }
    return "El valor mayor es: " + numOne;
}

function vowels() {
    // take input
    let userText = document.getElementById("vowelsText").value;

    let checkUserText = checkVowels(userText);

    document.getElementById("vowelsResult").innerHTML = checkUserText;
}

function checkVowels(value) {
    let len = value.length;
    let aCount = 0;
    let eCount = 0;
    let iCount = 0;
    let oCount = 0;
    let uCount = 0;

    let vowelsResult = "";

    for (let i = 0; i < len; i++) {
        if (
            value[i] == "a" ||
            value[i] == "A" ||
            value[i] == "á" ||
            value[i] == "Á"
        ) {
            aCount += 1;
        }
        if (
            value.charAt(i) == "e" ||
            value.charAt(i) == "E" ||
            value.charAt(i) == "é" ||
            value.charAt(i) == "É"
        ) {
            eCount += 1;
        }
        if (
            value.charAt(i) == "i" ||
            value.charAt(i) == "I" ||
            value.charAt(i) == "í" ||
            value.charAt(i) == "Í"
        ) {
            iCount += 1;
        }
        if (
            value.charAt(i) == "o" ||
            value.charAt(i) == "O" ||
            value.charAt(i) == "ó" ||
            value.charAt(i) == "Ó"
        ) {
            oCount += 1;
        }
        if (
            value.charAt(i) == "u" ||
            value.charAt(i) == "U" ||
            value.charAt(i) == "ú" ||
            value.charAt(i) == "Ú"
        ) {
            uCount += 1;
        }
    }

    if (aCount > 0) {
        vowelsResult += "a";
    }
    if (eCount > 0) {
        vowelsResult += "e";

    }
    if (iCount > 0) {
        vowelsResult += "i";
    }
    if (oCount > 0) {
        vowelsResult += "o";
    }
    if (uCount > 0) {
        vowelsResult += "u";
    }

    return "Contiene las vocales: " + vowelsResult;
}



function vowelsSum() {
    // take input
    let userText = document.getElementById("vowelsTextTwo").value;

    let checkUserText = checkVowelsSum(userText);

    document.getElementById("vowelsSumResult").innerHTML = checkUserText;
}

function checkVowelsSum(value) {
    let len = value.length;
    let aCount = 0;
    let eCount = 0;
    let iCount = 0;
    let oCount = 0;
    let uCount = 0;

    let vowelsResult = "";

    for (let i = 0; i < len; i++) {
        if (
            value[i] == "a" ||
            value[i] == "A" ||
            value[i] == "á" ||
            value[i] == "Á"
        ) {
            aCount += 1;
        }
        if (
            value.charAt(i) == "e" ||
            value.charAt(i) == "E" ||
            value.charAt(i) == "é" ||
            value.charAt(i) == "É"
        ) {
            eCount += 1;
        }
        if (
            value.charAt(i) == "i" ||
            value.charAt(i) == "I" ||
            value.charAt(i) == "í" ||
            value.charAt(i) == "Í"
        ) {
            iCount += 1;
        }
        if (
            value.charAt(i) == "o" ||
            value.charAt(i) == "O" ||
            value.charAt(i) == "ó" ||
            value.charAt(i) == "Ó"
        ) {
            oCount += 1;
        }
        if (
            value.charAt(i) == "u" ||
            value.charAt(i) == "U" ||
            value.charAt(i) == "ú" ||
            value.charAt(i) == "Ú"
        ) {
            uCount += 1;
        }
    }

    if (aCount > 0) {
        vowelsResult += "a:" + aCount;
    }
    if (eCount > 0) {
        vowelsResult += " - e:" + eCount;

    }
    if (iCount > 0) {
        vowelsResult += " - i:" + iCount;
    }
    if (oCount > 0) {
        vowelsResult += " - o:" + oCount;

    }
    if (uCount > 0) {
        vowelsResult += " - u:" + uCount;
    }

    return "Contiene las vocales: " + vowelsResult;
}

function urlCheck() {

    let checkUserText = window.location.pathname;
    document.getElementById("urlResult").innerHTML = checkUserText;
}
