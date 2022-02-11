
function double(){
const doubleInput = document.getElementById('double-input')
const doubleInputValue = doubleInput.value;
const doubleValueConvert = parseFloat(doubleInputValue)
if(doubleValueConvert > 0){
    const doubleNumbers = doubleValueConvert *  2;
    const numberBox = document.getElementById('number-box');
    numberBox.innerText = doubleNumbers;
}
else{
    alert('Not Allow')
}
doubleInput.value = '';
}
function triple(){
    const tripleInput = document.getElementById('double-input')
    const tripleInputValue = tripleInput.value;
    const triplaValueConvert = parseFloat(tripleInputValue)
    if(triplaValueConvert > 0){
        const tripleNumbers = triplaValueConvert *  3;
        const numberBox = document.getElementById('number-box');
        numberBox.innerText = tripleNumbers;
    }
    else{
        alert('Not Allow')
    }
    tripleInput.value = '';
}