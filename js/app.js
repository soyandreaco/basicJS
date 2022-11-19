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
