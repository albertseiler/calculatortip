//Javascript
const billInput = document.querySelector('.inputbill')
const peopleInput = document.querySelector('.inputpeople')
const tipSum = document.getElementById("tip-amount")
const totalSum = document.getElementById("total-amount")
const tips = document.querySelectorAll(".tippercentage")
const resetBtn = document.querySelector(".reset")


//ADD EVENT LISTENERS
billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tips.forEach(function (val) {
    val.addEventListener('click', handleClick)
})
resetBtn.addEventListener('click', handleRemove)

billInput.value = "0.0"
peopleInput.value = "1"
tipSum.innerHTML = "$" + (0.0).toFixed(2)
totalSum.innerHTML = "$" + (0.0).toFixed(2)

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

//FUNCTIONS
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
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue + tipAmount) / peopleValue;
        tipSum.innerHTML = "$" + tipAmount.toFixed(2);
        totalSum.innerHTML = "$" + total.toFixed(2);
        console.log((billValue * tipValue) / peopleValue);
        console.log((billValue + tipSum) / peopleValue);
    }
}

function handleRemove(event) {
    tipAmount = 0.00;
    total = 0.00;
    tipSum.innerHTML = "$" + "0.00";
    totalSum.innerHTML = "$" + "0.00";
    billInput.value = "0.0";
    peopleInput.value = "1";
    console.log("Splitter has been reseted");
}
