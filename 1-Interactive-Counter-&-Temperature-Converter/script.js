/*
    ALGORITHM: Number Counter & Temperature Converter

    PART 1: Number Counter
    1. SETUP:
       - Declare a variable `count` initialized to 0.
       - Get the label/display element showing the count value.
       - Get the "Increase", "Decrease", and "Reset" button elements.

    2. EVENT LISTENERS & LOGIC:
       - When "Increase" is clicked:
           - Increment `count` by 1.
           - Update the label's text content with `count`.
       - When "Decrease" is clicked:
           - Decrement `count` by 1.
           - Update the label's text content with `count`.
       - When "Reset" is clicked:
           - Set `count` to 0.
           - Update the label's text content with `count`.

    PART 2: Temperature Converter
    1. SETUP:
       - Get the number input element for the temperature value.
       - Get the radio button elements for "to Fahrenheit" and "to Celsius".
       - Get the "Submit" button element.
       - Get the paragraph element where the result will be displayed.

    2. CONVERSION LOGIC (inside submit button click handler):
       - Read the numeric value from the input field.
       - Check which radio button is selected using its `.checked` property.
       - If "to Fahrenheit" is selected:
           - Calculate: (temp * 9 / 5) + 32.
           - Format with `.toFixed(1)` and display result as `°F`.
       - Else if "to Celsius" is selected:
           - Calculate: (temp - 32) * (5 / 9).
           - Format with `.toFixed(1)` and display result as `°C`.
       - Else:
           - Display an error message asking the user to select a unit.
*/

// WRITE YOUR CODE BELOW:

counter = document.getElementById("counter");
showcounter = document.getElementById("counterbtn");
temp = document.getElementById("temp");
showtemp = document.getElementById("tempbtn");
counter.style.display = "none";
temp.style.display = "none";
showcounter.onchange = function(){
    if(showcounter.checked){
        temp.style.display = "none";
        counter.style.display = "block";
        inc = document.getElementById("inc");
        dec = document.getElementById("dec");
        res = document.getElementById("reset");
        num = document.getElementById("num");
        let count = 0;
        inc.onclick = function(){
            count++;
            num.textContent = count;
        }
        dec.onclick = function(){
            count--;
            num.textContent = count;
        }
        res.onclick = function(){
            count = 0;
            num.textContent = 0;
        }
    }
}
showtemp.onchange = function(){
    temp.style.display = "block";
    counter.style.display = "none";
    submit = document.getElementById("submit");
    toF = document.getElementById("CtoF");
    toC = document.getElementById("FtoC");
    result = document.getElementById("result");
    submit.onclick = function(){
        tempValue = Number(document.getElementById("tempIn").value);
        if(toF.checked){
            result.textContent = `${((tempValue*(9/5))+32).toFixed(1)}°F is the converted value.`
        }
        else if(toC.checked){
            result.textContent = `${((tempValue-32)*(5/9)).toFixed(1)}°C is the converted value.`
        }
        else{
            result.textContent = `Please select an operation.`
        }
    }
}