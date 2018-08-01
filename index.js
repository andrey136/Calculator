console.log('start');
document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
const printAndAddNumber = function (n) {
    if (str === '0' && n === 0 && typeof arr[0] === 'undefined') {
        return document.getElementById('amount').value = 0;
    }
    if (operationWithResult) {
        operationWithResult = false;
        arr = [];
        str = n.toString();
        return document.getElementById('amount').value = n;
    }
    if (str !== '0') {
        if (firstNumber){
            str += n;
            return document.getElementById('amount').value = str;
        } else {
            str += n;
            return document.getElementById('amount').value += n;
        }
    } else {
        str = n.toString();
        return document.getElementById('amount').value = str;
    }
}
const buttonAmount1 = function (n) {
   if (n !== '=') {

       if (str === '' && arr3.includes(arr[arr.length - 1])) {
           arr[arr.length - 1] = n;
           for (let i = 0; i < arr.length - 1; i++) {
               document.getElementById('amount').value = arr[i];
           }
           return document.getElementById('amount').value += n;
       }
       if (str === '' && typeof arr[0] === 'undefined') {
           arr.push('0');
           firstNumber = false;
           document.getElementById('amount').value = arr[0];
           document.getElementById('amount').value += n;
       } else if (typeof arr[0] === 'undefined' && str !== '') {
           firstNumber = false;
           arr.push(str, n);
           str = '';
           document.getElementById('amount').value += n;
       } else if (str !== '' && typeof arr[0] !== 'undefined') {
           firstNumber = false;
           arr.push(str, n);
           str = '';
           document.getElementById('amount').value += n;
       } else if (str !== '' && typeof arr[0] !== 'undefined') {
           firstNumber = false;
           arr.push(str, n);
           str = '';
           document.getElementById('amount').value += n;
       }
   } else {
       arr.push('=');
       if (arr[0] === '=') {
           arr = [];
           return document.getElementById('amount').value = 0;
       }
       if (arr[arr.length - 2] === '=') {
         return arr.pop();
       }
       count = +arr[0];
       console.log(arr);
       for (let i = 1; i < arr.length - 1; i += 2) {
           if (arr[i] === '+') count += +arr[i + 1];
           if (arr[i] === '-') count -= +arr[i + 1];
           if (arr[i] === '/') count /= +arr[i + 1];
           if (arr[i] === 'x') count *= +arr[i + 1];
           console.log(count);
       }
       firstNumber = false;
       operationWithResult = true;
       arr = [];
       str = count.toString();
       return document.getElementById('amount').value = count;
       }
}
const clearAmount = function () {
    document.getElementById('amount').value = '';
    arr = [];
    str = '';
    count = 0;
    console.log(arr);
    firstNumber = true;
    operationWithResult = false;
}
let arr = [];
let str = '';
let arr3 = ['+', '-', '/', 'x'];
let count = 0;
let firstNumber = true;
let operationWithResult = false;
let oper;