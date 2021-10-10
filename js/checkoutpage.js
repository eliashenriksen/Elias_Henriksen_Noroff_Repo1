const checkoutItemQuantityTarget = document.querySelector(".number-of-items");
const checkoutTotalPriceTarget = document.querySelector(".total-price");
const finishPurchaseButton = document.querySelector(".finish-purchase-button");
const deliveryLocAutofill = document.querySelector(".deliveryLocAutofill");
const creditcardDate = document.querySelector(".checkout-creditcard-date");
const checkoutCountry = document.querySelector("#country");

////////////////////////////////////////////////////////////////////////////

const emailError = document.querySelector(".emailError");
const checkoutEmail = document.querySelector("#email");

const phoneError = document.querySelector(".phoneError");
const checkoutPhone = document.querySelector("#phone");

const nameError = document.querySelector(".nameError");
const checkoutName = document.querySelector("#name");

const surnameError = document.querySelector(".surnameError");
const checkoutSurname = document.querySelector("#surname");

const adressError = document.querySelector(".adressError");
const checkoutAdress = document.querySelector("#adress");

const cityError = document.querySelector(".cityError");
const checkoutCity = document.querySelector("#city");

const postcodeError = document.querySelector(".postcodeError");
const checkoutPostcode = document.querySelector("#postcode");

const creditcardNumberError = document.querySelector(".creditcardNumberError");
const checkoutCreditcardNumber = document.querySelector("#creditcard");

const creditcardDateError = document.querySelector(".creditcardDateError");
const checkoutCreditcardDate = document.querySelector("#creditcard-date");

const creditcardCvcError = document.querySelector(".creditcardCvcError");
const checkoutCreditcardCvc = document.querySelector("#cvc");

////////////////////////////////////////////////////////////////////////////

const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);

const checkoutQuantityOfItemsQuery = parameters.get("quantity");
const checkoutTotalQuery = parameters.get("total");

if (parameters.get("quantity")) {
    checkoutItemQuantityTarget.innerHTML = `Number of items being purchased : ${checkoutQuantityOfItemsQuery}`;
    checkoutTotalPriceTarget.innerHTML = `Total : ${checkoutTotalQuery},-`;
}



const currentDate = new Date();
const currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1;

if (currentMonth < 10) {
    currentMonth = "0" + currentDate.getMonth();
}

const currentDateFormated = currentYear + "-" + currentMonth;

checkoutCreditcardDate.setAttribute("min", currentDateFormated);

finishPurchaseButton.addEventListener("click", cartCleaner);


checkoutEmail.addEventListener("focusout", validateEmailEvent);
checkoutPhone.addEventListener("focusout", validatePhoneEvent);
checkoutName.addEventListener("focusout", validateNameEvent);
checkoutSurname.addEventListener("focusout", validateSurnameEvent);
checkoutAdress.addEventListener("focusout", validateAdressEvent);
checkoutAdress.addEventListener("change", deliveryDestination);
checkoutCity.addEventListener("focusout", validateCityEvent);
checkoutCity.addEventListener("change", deliveryDestination);
checkoutCountry.addEventListener("change", deliveryDestination);
checkoutPostcode.addEventListener("focusout", validatePostcodeEvent);
checkoutPostcode.addEventListener("change", deliveryDestination);
checkoutCreditcardNumber.addEventListener("focusout", validateCreditcardNumberEvent);
checkoutCreditcardDate.addEventListener("focusout", validateCreditcardDateEvent);
checkoutCreditcardCvc.addEventListener("focusout", validateCreditcardCvcEvent);


function cartCleaner() {
    sessionStorage.clear();
};

function deliveryDestination() {
    deliveryLocAutofill.innerHTML = checkoutAdress.value + " " + checkoutCity.value + " " + checkoutPostcode.value + " " + checkoutCountry.value;
};

function validateEmail(email) {
    const emailRegularExpression = /\S+@\S+\.\S+/;
    const checkForMatch = emailRegularExpression.test(email.value.trim());
    return checkForMatch;
};

function validateEmailEvent() {
    if (validateEmail(checkoutEmail) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "flex";
    }
};

function minimumCharacterChecker(valueToCheck, requiredMinimumValue) {
    if (valueToCheck.value.trim().length >= requiredMinimumValue) {
        return true;
    } else {
        return false;
    }
};

function validatePhoneEvent() {
    if (minimumCharacterChecker(checkoutPhone, 8) === true) {
        phoneError.style.display = "none";
    } else {
        phoneError.style.display = "flex";
    }
};

function validateNameEvent() {
    if (minimumCharacterChecker(checkoutName, 2) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "flex";
    }
};

function validateSurnameEvent() {
    if (minimumCharacterChecker(checkoutSurname, 2) === true) {
        surnameError.style.display = "none";
    } else {
        surnameError.style.display = "flex";
    }
};

function validateAdressEvent() {
    if (minimumCharacterChecker(checkoutAdress, 10) === true) {
        adressError.style.display = "none";
    } else {
        adressError.style.display = "flex";
    }
};

function validateCityEvent() {
    if (minimumCharacterChecker(checkoutCity, 2) === true) {
        cityError.style.display = "none";
    } else {
        cityError.style.display = "flex";
    }
};

function validatePostcodeEvent() {
    if (minimumCharacterChecker(checkoutPostcode, 4) === true) {
        postcodeError.style.display = "none";
    } else {
        postcodeError.style.display = "flex";
    }
};

function validateCreditcardNumberEvent() {
    if (minimumCharacterChecker(checkoutCreditcardNumber, 10) === true) {
        creditcardNumberError.style.display = "none";
    } else {
        creditcardNumberError.style.display = "flex";
    }
};

function validateCreditcardDateEvent() {
    if (checkoutCreditcardDate.value) {
        creditcardDateError.style.display = "none";
    } else {
        creditcardDateError.style.display = "flex";
    }
};

function validateCreditcardCvcEvent() {
    if (minimumCharacterChecker(checkoutCreditcardCvc, 3) === true) {
        creditcardCvcError.style.display = "none";
    } else {
        creditcardCvcError.style.display = "flex";
    }
};