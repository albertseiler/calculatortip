//Javascript
const billAmount = document.querySelector('.inputbill')
const numberOfPeople = document.querySelector('.inputpeople')
const percentageButtons = document.querySelectorAll('.tippercentage')
const tipSum = document.querySelector('.dollaramount one')
const totalSum = document.querySelector('.dollaramount two')



//addEventListeners

percentageButtons.forEach((button, index) => {
    button.addEventListener('click', () => getValueOfButton);

})


//Functions
function getValueOfButton() {
    const val = document.querySelectorAll('button').value;
    console.log(val)
}

function tipCalc(billAmount, numberOfPeople, percentageButtons) {
    return (billAmount.value * (percentageButtons / 100) / numberOfPeople)
    console.log("tip calculation")

}



function totalCalc(billAmount, tipSum, numberOfPeople) {
    return ((billAmount + tipSum) / numberOfPeople)
    console.log("total calculation")
}
