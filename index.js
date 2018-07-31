console.log('start');
document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
const buttonAmount1 = function () {
    document.getElementById('amount').value += 1;
    arr.push('1');
}
const buttonAmount2 = function () {
    document.getElementById('amount').value += 2;
    arr.push('2');
}
const buttonAmount3 = function () {
    document.getElementById('amount').value += 3;
    arr.push('3');
}
const buttonAmount4 = function () {
    document.getElementById('amount').value += 4;
    arr.push('4');
}
const buttonAmount5 = function () {
    document.getElementById('amount').value += 5;
    arr.push('5');
}
const buttonAmount6 = function () {
    document.getElementById('amount').value += 6;
    arr.push('6');
}
const buttonAmount7 = function () {
    document.getElementById('amount').value += 7;
    arr.push('7');
}
const buttonAmount8 = function () {
    document.getElementById('amount').value += 8;
    arr.push('8');
}
const buttonAmount9 = function () {
    document.getElementById('amount').value += 9;
    arr.push('9');
}
const buttonAmount0 = function () {
    document.getElementById('amount').value += 0;
    arr.push('0');
}
const buttonAmountIs = function () {
    document.getElementById('amount').value = '_';
    arr.push('=');
    console.log(arr);
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === '=') {

            arr2.push(+str);
            console.log(arr2);
            count += arr2[0];
            for (let i = 0; i < arr3.length; i++){
                if (arr3[i] === '+') count += arr2[i + 1];
                if (arr3[i] === '-') count -= arr2[i + 1];
                if (arr3[i] === '/') count /= arr2[i + 1];
                if (arr3[i] === '*') count *= arr2[i + 1];
            }
            document.getElementById('amount').value += count;

            arr = [];
            arr.push(count.toString());
            console.log(arr);
            arr2 = [];
            arr3 = [];
            str = '';
        }
        if (arr[i] !== '*' && arr[i] !== '/' && arr[i] !== '+' && arr[i] !== '-'){
            console.log(str);
            str += arr[i];

        } else {
            arr2.push(+str);
            arr3.push(arr[i]);
            str = '';
        }
    }
}
const buttonAmountPlus = function () {
    document.getElementById('amount').value += '+';
    arr.push('+');
}
const buttonAmountDivision = function () {
    document.getElementById('amount').value += '/';
    arr.push('/');
}
const buttonAmountMultiply = function () {
    document.getElementById('amount').value += 'x';
    arr.push('*');
}
const buttonAmountMinus = function () {
    document.getElementById('amount').value += '-';
    arr.push('-');
}

/*let cnt = 1;
const enter = function () {
    console.log('enter', cnt++);
}

const printAmount = function () {
    const amount = document.getElementById('amount').value;
    console.log(amount);
}
*/const clearAmount = function () {
    document.getElementById('amount').value = '_';
    arr = [];
    arr2 = [];
    arr3 = [];
    str = '';
    count = 0;
    console.log(arr);
}
function randomColor () {
   // console.log('google');
    document.getElementById('randomColorButton').style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
}
let arr = [];
let str = '';
let arr2 = [];
let arr3 = [];
let count = 0;