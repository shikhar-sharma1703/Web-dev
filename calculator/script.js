const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

const operate = (a,op,b) => {
    a = Number(a);
    b = Number(b);
    if(op === '+'){
        return add(a,b)
    }
    if(op === '-'){
        return subtract(a,b)
    }
    if(op === '*'){
        return multiply(a,b)
    }
    if(op === '/'){
        return divide(a,b)
    }
}

const number_buttons = document.querySelectorAll('.calculator-keys .number');
const operater_button = document.querySelectorAll('.calculator-keys .operator');
const calc_display = document.getElementById('display-screen');
const equal_key = document.getElementById('equal-sign')


let displayvalue = '';
let operator = '';
let prevvalue = '';

const filldisplay = function() {
    if(displayvalue.includes('.') && this.value === '.') return;

    if (displayvalue.length > 10) return
    
    displayvalue += this.value;
    calc_display.value = displayvalue;    
}

number_buttons.forEach(function(number){
    number.addEventListener('click',filldisplay);
})

const calculation = function(){
    if(operator) {
        displayvalue = operate(prevvalue, operator, displayvalue);
        calc_display.value = displayvalue;
    }

    operator = this.value;
    prevvalue = displayvalue;
    displayvalue = ''
}

operater_button.forEach(function(operator){
    operator.addEventListener('click',calculation)
})
