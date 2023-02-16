//Javascript
const billInput = document.querySelector('.inputbill')
const peopleInput = document.querySelector('.inputpeople')
const tipPercentage = document.querySelector('.tippercentage')
const tipSum = document.querySelector('.dollaramount one')
const totalSum = document.querySelector('.dollaramount two')

let billNumber = parseInt(billInput.value)

let buttonValue = 0;

let peopleNumber = parseInt(peopleInput.value)

tipPercentage.forEach(button => {
    buttonValue = parseFloat(button.value)
    if (billNumber == 0 || isNaN(billNumber) || billNumber == Infinity || peopleNumber == 0 || peopleNumber == "") {
        return
    } else {
        calcTips()
    }
});

billInput.addEventListener("input", () => {
    billNumber = parseFloat(billInput.value)

    if (billNumber == 0 || isNaN(billNumber) || billNumber == Infinity || peopleNumber == 0 || peopleNumber == "") {
        return
    } else {
        calcTips()
    }
})