const prices = {
    products: 0.5,
    orders: 0.25,
    package: {
        basic: 0,
        professional: 25,
        premium: 60
    },
    accounting: 35,
    terminal: 5,
}

// Selecting
const selectedQuantity = document.querySelector("#products");
const selectedOrders = document.querySelector("#orders");

const selectedPackage = document.querySelector("#package");
const selectInput = selectedPackage.querySelector(".select__input");
const selectDropdown = selectedPackage.querySelector(".select__dropdown");

// Displaying





// add event for change
const productsElement = document.querySelector('[data-id="products"]');
const spans = productsElement.querySelectorAll("span")
console.log(spans)
const totalPriceElement = document.querySelector('#total-price');
const totalPriceSpanElement = totalPriceElement.querySelector(":nth-child(2)")
let totalPrice = 0;
console.log(totalPriceSpanElement)

const ordersElement = document.querySelector('[data-id="orders"]');
const ordersChildren = ordersElement.querySelectorAll("span")

// const dropdownElement = document.querySelector('[data-id="package"]');
// const dropdownSpanElements = dropdownElement.querySelectorAll("span")


let productsQuantitySum = 0;
let estimatedOrdersSum = 0;
let packageSum = 0;
let accountingSum = 0;
let terminalSum = 0;

selectedQuantity.addEventListener("change", function (event) {
    const newSum = +event.target.value * prices.products

    productsElement.style.display = "block"
    spans[1].innerText = `${event.target.value} * ${prices.products}`
    spans[2].innerText = '$' + newSum
    productsQuantitySum = newSum
    calculateToTalPrice()
});

selectedOrders.addEventListener("change", function (event) {
    const newSum = +event.target.value * prices.orders;

    ordersElement.style.display = "block";
    ordersChildren[1].innerHTML = `${event.target.value} * ${prices.orders}`
    ordersChildren[2].innerText = '$' + event.target.value * prices.orders;
    estimatedOrdersSum = newSum;
    calculateToTalPrice()
})

function calculateToTalPrice() {
    totalPriceElement.style.display = "block"
    totalPrice = productsQuantitySum + estimatedOrdersSum + packageSum + accountingSum + terminalSum;
    totalPriceSpanElement.innerText = '$' + totalPrice
}

//Dropdown

const dropdown = document.querySelector(".calc__select")
const dropdownInput = dropdown.querySelector(".select__input")
console.log('>> inputs', dropdownInput)
const dropdownList = dropdown.querySelector(".select__dropdown")

dropdownInput.addEventListener("click", function () {
    if (dropdownList.style.display === "block") {
        dropdownList.style.display = "none";
    } else {
        dropdownList.style.display = "block";
    }
})

const dropdownItems = dropdownList.querySelectorAll("li");

dropdownItems.forEach((item) => {
    item.addEventListener("click", function () {
        const selectedValue = item.getAttribute("data-value");
        dropdownInput.textContent = item.textContent;
        console.log(selectedValue)

        // Look up the appropriate price connecting to the selectedValue
         // 0 || 25 || 60 

        displayToPackageElement(selectedValue) 

        dropdownList.style.display = "none"; // Hide the list
        dropdown.setAttribute("data-value", selectedValue);
    });
});

function displayToPackageElement(selectedValue) {
    const dropdownElement = document.querySelector('[data-id="package"]');
    const dropdownSpanElements = dropdownElement.querySelectorAll("span");

    dropdownElement.style.display = "block"
    dropdownSpanElements[1].innerText = selectedValue
    dropdownSpanElements[2].innerText = '$' + prices.package[selectedValue]
    packageSum = prices.package[selectedValue]
    calculateToTalPrice()
}

const accountingCheckboxElement = document.getElementById('accounting')

accountingCheckboxElement.addEventListener('change', (event) => {
    if (event.target.checked) {
        accountingSum = prices.accounting
    } else {
        accountingSum = 0
    }

    displayToAccountingElement(accountingSum)
    calculateToTalPrice()
})

function displayToAccountingElement(accountingSum) {
    const dropdownElement = document.querySelector('[data-id="accounting"]');
    const dropdownSpanElements = dropdownElement.querySelectorAll("span");

    dropdownElement.style.display = "block"
    dropdownSpanElements[1].innerText = '$' + accountingSum
}

const terminalCheckboxElement = document.getElementById('terminal')

terminalCheckboxElement.addEventListener('change', (event) => {
    if (event.target.checked) {
        terminalSum = prices.terminal
    } else {
        terminalSum = 0
    }

    displayToTerminalElement(terminalSum)
    calculateToTalPrice()
})

function displayToTerminalElement(terminalSum) {
    const dropdownElement = document.querySelector('[data-id="terminal"]');
    const dropdownSpanElements = dropdownElement.querySelectorAll("span");

    dropdownElement.style.display = "block"
    dropdownSpanElements[1].innerText = '$' + terminalSum
}











