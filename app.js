var add = function (n1, n2, showResult, phrase) {
    var result = n1 + n2;
    showResult && console.log(phrase + result);
    return;
    return result;
};
var number1 = 5;
var number2 = 2.8;
var printResult = false;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
