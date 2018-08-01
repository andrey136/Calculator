console.log('start');
document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
const printAndAddNumber = function (n) {
    if (firstNumber){
        str += n;
        return document.getElementById('amount').value = str;
    }
    str += n;
    document.getElementById('amount').value += n;

}
const buttonAmount1 = function (n) {
   if (operationWithResult) {
       document.getElementById('amount').value = arr[0];
       operationWithResult = false;
   }
    if (arr[0] === '=') return document.getElementById('amount').value = 0;
    firstNumber = false;
    if (str !== ''){
        arr.push(str,n);
    } else {
        arr.push(n);
    }

    document.getElementById('amount').value += n;
    str = '';
    if (arr[arr.length - 1] === '='){
        count = +arr[0];
        for (let i = 1; i <arr.length - 1; i += 2){
            if (arr[i] === '+') count += +arr[i + 1];
            if (arr[i] === '-') count -= +arr[i + 1];
            if (arr[i] === '/') count /= +arr[i + 1];
            if (arr[i] === 'x') count *= +arr[i + 1];
        }
        operationWithResult = true;
        arr = [];
        arr.push(count.toString());
        document.getElementById('amount').value += count;
    }
    console.log(arr);
}
const clearAmount = function () {
    document.getElementById('amount').value = '';
    arr = [];
    arr3 = [];
    str = '';
    count = 0;
    console.log(arr);
}
let arr = [];
let str = '';
let arr3 = [];
let count = 0;
let firstNumber = true;
let operationWithResult = false;