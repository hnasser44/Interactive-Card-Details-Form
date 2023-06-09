const NameInput = document.querySelector(".name-input");
const CardNumberInput = document.querySelector(".card-input");
const MonthInput = document.querySelector(".month-input");
const YearInput = document.querySelector(".year-input");
const CVCInput = document.querySelector(".cvc-input");
const SubmitButton = document.querySelector("form button[type='submit']");

const Form = document.querySelectorAll('form .input-container')
const SuccessMessage = document.querySelector(".success");


const NameErrorMessage = document.querySelector(".name-error-message");
const CardNumberErrorMessage = document.querySelector(".number-error-message");
const ExpDateMessage = document.querySelector(".expdate-error-message");
const CVCErrorMessage = document.querySelector(".cvc-error-message");

const FrontCardName = document.querySelector(".front-card .card-info span:first-child");
const FrontCardMonth = document.querySelector(".front-card-month");
const FrontCardYear = document.querySelector(".front-card-year");
const FrontCardNumber = document.querySelector(".front-card h1");
const BackCardCVC = document.querySelector(".back-card span");

NameInput.addEventListener("input", () => {
    if (NameInput.value === "") {
        FrontCardName.textContent = "JANE APPLESEED";
    }
    else {
        FrontCardName.textContent = NameInput.value.toUpperCase();
    }
});

CardNumberInput.addEventListener("input", () => {
    let cardNumber = CardNumberInput.value.replace(/\s/g, ""); // Remove all spaces from the input
    //stop the user from entering more than 16 digits
    if (cardNumber.length > 16) {
        cardNumber = cardNumber.substr(0, 16);
        CardNumberInput.value = cardNumber;
    }
    //check if the input contains a letter
    if (/[a-zA-Z]/.test(cardNumber)) {
        CardNumberErrorMessage.textContent = "Wrong format, numbers only";
        CardNumberInput.classList.add("error");
    }
    else {
        CardNumberErrorMessage.textContent = "";
        CardNumberInput.classList.remove("error");
    }
    let formattedCardNumber = "";

    for (let i = 0; i < cardNumber.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedCardNumber += " "; // Add a space every four characters
        }
         formattedCardNumber += cardNumber[i];
    }
    FrontCardNumber.textContent = formattedCardNumber || "0000 0000 0000 0000";
    if (cardNumber === "") {
        FrontCardNumber.textContent = "0000 0000 0000 0000";
  }
});
  
MonthInput.addEventListener("input", () => {
    let month = MonthInput.value;
    //check if the input contains a letter
    if (/[a-zA-Z]/.test(month)) 
    {
        ExpDateMessage.textContent = "Provide a valid date";
        MonthInput.classList.add("error");
    }
    else {
        ExpDateMessage.textContent = "";
        MonthInput.classList.remove("error");
    }
    month = month.replace(/^0+/, "");
    if (month.length === 1 && month > 0 && month < 10) {
        month = "0" + month;
    }
    if (month < 1) {
        month = '00';
    } else if (month > 12) {
        month = '00';
  }
  MonthInput.value = month;
  FrontCardMonth.textContent = month || "MM";
});

YearInput.addEventListener("input", () => {
    let year = YearInput.value;
    //check if the input contains a letter
    if (/[a-zA-Z]/.test(year)) {
        ExpDateMessage.textContent = "Provide a valid date";
        YearInput.classList.add("error");
    }
    else {
        ExpDateMessage.textContent = "";
        YearInput.classList.remove("error");
    }
    year = year.replace(/^0+/, "");

    // Limit the year to a valid range (0-99)
    if (year.length > 2) {
        year = year.substr(0, 2);
    }

    YearInput.value = year;
    FrontCardYear.textContent = year || "YY";
});

CVCInput.addEventListener("input", () => {
    let cvc = CVCInput.value;
    //check if the input contains a letter
    if(cvc.length > 3) 
    {
        CVCInput.value = cvc.substr(0, 3);
    }
    else{
    if (/[a-zA-Z]/.test(cvc)) {
        CVCErrorMessage.textContent = "Wrong format, numbers only";
        CVCInput.classList.add("error");
    }
    else {
        CVCErrorMessage.textContent = "";
        CVCInput.classList.remove("error");
    }
    cvc = cvc.replace(/^0+/, "");
    if (cvc.length > 3) {
        cvc = cvc.substr(0, 3);
    }
    CVCInput.value = cvc;
    BackCardCVC.textContent = cvc || "000";
}
});

SubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (NameInput.value === "") {
        NameErrorMessage.textContent = "Name is required";
        NameInput.classList.add("error");
    }
    else {
        NameErrorMessage.textContent = "";
        NameInput.classList.remove("error");
    }
    if (CardNumberInput.value === "") {
        CardNumberErrorMessage.textContent = "Card number is required";
        CardNumberInput.classList.add("error");
    }
    else {
        CardNumberErrorMessage.textContent = "";
        CardNumberInput.classList.remove("error");
    }
    if (MonthInput.value === "" || YearInput.value === "") {
        ExpDateMessage.textContent = "Expiration date is required";
        MonthInput.classList.add("error");
        YearInput.classList.add("error");
    }
    else {
        ExpDateMessage.textContent = "";
        MonthInput.classList.remove("error");
        YearInput.classList.remove("error");
    }
    if (CVCInput.value === "") {
        CVCErrorMessage.textContent = "CVC is required";
        CVCInput.classList.add("error");
    }
    else {
        CVCErrorMessage.textContent = "";
        CVCInput.classList.remove("error");
    }
    if(NameInput.value !== "" && CardNumberInput.value !== "" && MonthInput.value !== "" && YearInput.value !== "" && CVCInput.value !== ""){
        Form.forEach((input) => {
            input.classList.add("hide");
        });
        SubmitButton.classList.add("hide");
        SuccessMessage.classList.remove("hide");
    }
});