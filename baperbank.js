
function double(){
const doubleInput = document.getElementById('double-input')
const doubleInputValue = doubleInput.value;
const doubleValueConvert = parseFloat(doubleInputValue)
const doubleNumbers = doubleValueConvert *  2;
const numberBox = document.getElementById('number-box');
numberBox.innerText = doubleNumbers;
doubleInput.value = '';
}
function triple(){
    const tripleInput = document.getElementById('double-input')
    const tripleInputValue = tripleInput.value;
    const triplaValueConvert = parseFloat(tripleInputValue)
    const tripleNumbers = triplaValueConvert *  3;
    const numberBox = document.getElementById('number-box');
    numberBox.innerText = tripleNumbers;
    tripleInput.value = '';
}