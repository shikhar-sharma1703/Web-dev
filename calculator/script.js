const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

const operate = (a,op,b) => {
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


