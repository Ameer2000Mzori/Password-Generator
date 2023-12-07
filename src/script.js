// selected elements
var copyBox = document.getElementsByClassName("number-Input")[0];
var lengthOfPass = document.getElementsByClassName("length-Of-Pass")[0];
// selected check elements
var upperCaseCheck = document.getElementsByClassName("upperCase-Check")[0];
var LowerCaseCheck = document.getElementsByClassName("LowerCase-Check")[0];
var numbersCheck = document.getElementsByClassName("numbers-Check")[0];
var symbolsCheck = document.getElementsByClassName("symbols-Check")[0];
// seleted buttons
var copyPassBtn = document.getElementsByClassName("copy-Pass-Btn")[0];
var generatePassBtn = document.getElementsByClassName("generate-Pass")[0];
//gelobal variables
// functions
// copy password function
var copyPassword = function () {
    copyBox.select();
    copyBox.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyBox.value);
    console.log(copyBox.value);
};
// event lisnters
copyPassBtn.addEventListener("click", copyPassword);
