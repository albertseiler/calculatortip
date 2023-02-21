//Javascript
const billInput = document.querySelector('.inputbill')
const peopleInput = document.querySelector('.inputpeople')
const tipSum = document.getElementById("tip-amount")
const totalSum = document.getElementById("total-amount")
const tips = document.querySelectorAll(".tippercentage")

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tips.forEach(function (val) {
    val.addEventListener('click', handleClick)
})

billInput.value = "0.0"
peopleInput.value = "1"
tipSum.innerHTML = "$" + (0.0).toFixed(2)
totalSum.innerHTML = "$" + (0.0).toFixed(2)

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

function billInputFun() {
    billValue = parseFloat(billInput.value);
    calculateTip();
}

function peopleInputFun() {
    peopleValue = parseFloat(peopleInput.value);
    calculateTip();
}

function handleClick(event) {
    tips.forEach(function (val) {
        val.classList.remove("active-tip");
        if (event.target.innerHTML == val.innerHTML) {
            val.classList.add("active-tip");
            tipValue = parseFloat(val.innerHTML) / 100
        }
    });
    calculateTip();
}

function calculateTip() {
    if (peopleValue >= 1) {
        let tipSum = (billValue * tipValue) / peopleValue;
        let totalSum = (billValue * tipSum) / peopleValue;
        tipSum.innerHTML = "$" + tipSum.toFixed(2);
        totalSum.innerHTML = "$" + totalSum.toFixed(2);
        console.log((billValue * tipValue) / peopleValue)
    }
}
