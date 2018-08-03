let arr = [];
let str = '';
const arr3 = ['+', '-', '/', 'x'];
let count = 0;
let firstNumber = true;
let isItResult = false;
let input = document.getElementById('amount');

function operationWithResult (n) {
    if (isItResult){
        console.log('freg');
        isItResult = false;
        if (str === '' && arr3.includes(arr[arr.length - 1])) {
            return diffrentSigns(n);
        }
        str = '';
        arr.push(n);
        return input.value = n;
    }
}

function clearResult() {
    firstNumber = false;
    isItResult = true;
    arr = [];
    arr.push(count.toString());
    str = count.toString();
    return input.value = count;
}

function cycleWithResult () {
    for (let i = 1; i < arr.length - 1; i += 2) {
        if (arr[i] === '+') count += +arr[i + 1];
        if (arr[i] === '-') count -= +arr[i + 1];
        if (arr[i] === '/') count /= +arr[i + 1];
        if (arr[i] === 'x') count *= +arr[i + 1];
    }
}

function backGroundColor () {
    document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
}

function ArrDoesntIncudesSigns() {
    if (!arr.includes('+') && !arr.includes('-') && !arr.includes('/') && !arr.includes('x')) return str;
}

 function printAndAddNumber(n) {

    if (str === arr[0]) clearAmount();
    if (str === '0' && n !== 0) {
        isItResult = false;
        str = n.toString();
        return input.value = str;
    }
    str += n;
    if (str === '00') return str = '0';
    if (firstNumber) return input.value = str;
    input.value += n;
}

 function operation (n) {
    input.value = '';
    operationWithResult (n);
    if (str === '' && arr3.includes(arr[arr.length - 1])) {
        return diffrentSigns(n);
    }
    if (str !== '') {
        arr.push(str, n);
        str = '';
    } else {
        arr.push('0', n);
        input.value = 0;
    }
    firstNumber = false;
    return input.value += n;
}

 function gettingResult (n) {
     ArrDoesntIncudesSigns();
     arr.push(str, n);
     str = '';
     count = +arr[0];
     cycleWithResult ();
     clearResult();
}

function clearAmount () {
    input.value = '';
    arr = [];
    str = '';
    count = 0;
    console.log(arr);
    firstNumber = true;
    isItResult = false;
}

function point() {
    if (str === arr[0]) return arr;
    if (str[str.length - 1] === '.') return str;
    if (str === '' && typeof arr[0] === 'undefined'){
        str += '0.';
        return input.value = '0.'
    }
    if (str === '') return str;
    str += '.';
    input.value += '.';
}

function diffrentSigns (n) {
    arr[arr.length - 1] = n;
    for (let i = 0; i < arr.length - 1; i++) {
        input.value = arr[i];
    }
    return input.value += n;
}
