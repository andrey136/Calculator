console.log('start');
document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
const printAndAddNumber = function (n) {
    console.log(arr);
    if (str[str.length - 1] === '.' && n === '.') return str;
    str += n;
    if (str === '00') return str = '0';
    if (firstNumber) return document.getElementById('amount').value = str;
    document.getElementById('amount').value += n;
}
const buttonAmount1 = function (n) {

    if (operationWithResult){
        //console.log
        str = '';
        arr.push(n);
        return document.getElementById('amount').value += n;
    }
    if (str === '' && arr3.includes(arr[arr.length - 1])) {
        arr[arr.length - 1] = n;
        for (let i = 0; i < arr.length - 1; i++) {
            document.getElementById('amount').value = arr[i];
        }
        return document.getElementById('amount').value += n;
    }
    if (str !== '') {
        arr.push(str, n);
        str = '';
    } else {
        console.log('dfghkjj');
        arr.push('0', n);
        document.getElementById('amount').value = 0;
    }
    firstNumber = false;
    return document.getElementById('amount').value += n;
}
const buttonAmount2 = function (n) {
    if (!arr.includes('+') && !arr.includes('-') && !arr.includes('/') && !arr.includes('x')) return n;
    arr.push(str, n);
    console.log(arr);
    str = '';
    count = +arr[0];
    for (let i = 1; i < arr.length - 1; i += 2) {
        if (arr[i] === '+') count += +arr[i + 1];
        if (arr[i] === '-') count -= +arr[i + 1];
        if (arr[i] === '/') count /= +arr[i + 1];
        if (arr[i] === 'x') count *= +arr[i + 1];

    }
    firstNumber = false;
    operationWithResult = true;
    arr = [];
    arr.push(count.toString());
    str = count.toString();
    console.log(count);
    return document.getElementById('amount').value = count;
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