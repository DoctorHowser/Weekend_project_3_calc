/**
 * Created by danesmith on 10/30/15.
 */
var operatorsArray = ["+", "-", "*", "/", "."];
var calculation = {};
var operatorClicked = false;
var secondNumeral = false;
var numberReturned = false;

//Init!
$(document).ready(function () {
    initCalculator();

});


function initCalculator(){
    makeKeys();
    numberInit();
    operatorInit();
    equalsInit();
    clearInit();
}

function numberInit() {
    $('#numbers').on('click', '.number', clickNumber);
}
function clearInit(){
    $('#clear').on('click', resetAll)
}

function operatorInit() {
    $('#controls').on('click', '.operator', clickOperator);
}
function equalsInit() {
    $('#equals').on('click', clickEquals);
}

//Click Logic

function resetAll(){
    clearDisplay();
    operatorClicked = false;
    secondNumeral = false;
    numberReturned = false;

}

function clickNumber(){

    if (numberReturned == true){
        clearDisplay();
        resetAll();
    } else if (operatorClicked == true ){
        clearDisplay();
        operatorClicked = false;
        secondNumeral = true;
    }

    var numeral = $(this).text();
    writeDisplay(numeral);
}

function clickOperator(){

    calculation.val1 = $('#display').text();
    var operator = $(this).text();

    if (numberReturned == true){
        resetAll();
    }

    //Give Object type of button clicked
    assignOperator(operator);
    clearDisplay();
    writeDisplay((calculation.val1 + operator));
}
//operator assignment
function assignOperator(operator) {
    switch (operator) {
        case "+":
            calculation.type = "add";
            operatorClicked = true;
            break;
        case "-":
            calculation.type = "sub";
            operatorClicked = true;
            break;
        case "*":
            calculation.type = "mlt";
            operatorClicked = true;
            break;
        case "/":
            calculation.type = "div";
            operatorClicked = true;
            break;
        case ".":
            writeDisplay(".");
            break;



    }
}

function clickEquals() {
    if (numberReturned == true) {
        calculation.val1 = $('#display').text();
        clearDisplay();
        callServer(calculation);
    } else {

        calculation.val2 = $('#display').text();
        console.log(calculation);
        clearDisplay();
        callServer(calculation);
    }

}


//server calls after equals click
function callServer(thiscalc) {
    switch (thiscalc.type) {
        case "add":


            $.ajax({
                url: '/add',
                type: "POST",
                data: calculation,
                success: function(data) {
                    writeDisplay(data.math);
                    numberReturned = true;
                }

            });
            break;


        case "sub":


            $.ajax({
                url: '/sub',
                type: "POST",
                data: calculation,
                success: function(data) {
                    writeDisplay(data.math);
                    numberReturned = true;
                }

            });
            break;


        case "div":


            $.ajax({
                url: '/div',
                type: "POST",
                data: calculation,
                success: function(data) {
                    writeDisplay(data.math);
                    numberReturned = true;
                }

            });
            break;


        case "mlt":


            $.ajax({
                url: '/mlt',
                type: "POST",
                data: calculation,
                success: function(data) {
                    writeDisplay(data.math);
                    numberReturned = true;
                }

            });
            break;
    }


}

//DOM Functions
function writeDisplay(toWrite){
    $('#display').append(toWrite);
}

function clearDisplay(){
    $('#display').empty();
}

function makeKeys(){
    makeNumbers();
    makeOperators();

}
function makeNumbers(){
    for(i = 9; i >= 0; i--){
        var el = "<div class='btn btn-default btn-lg number'>"+ i + "</div>";
        $('#numbers').append(el);
    }
}

function makeOperators(){
    for(i = 0; i < operatorsArray.length; i++){
        var el = "<div class='btn btn-info btn-lg operator'>"+ operatorsArray[i] + "</div>"
        $('#controls').append(el);
    }
}











