// selected elements
var copyBox = document.getElementsByClassName("number-Input")[0];
var lengthOfPass = document.getElementsByClassName("length-Of-Pass")[0];
// selected check elements
var upperCaseCheck = document.getElementsByClassName("upperCase-Check")[0];
var LowerCaseCheck = document.getElementsByClassName("LowerCase-Check")[0];
var numbersCheck = document.getElementsByClassName("numbers-Check")[0];
var symbolsCheck = document.getElementsByClassName("symbols-Check")[0];
var checkedBoxes = document.querySelectorAll("#checked-Box");
// seleted buttons
var copyPassBtn = document.getElementsByClassName("copy-Pass-Btn")[0];
var generatePassBtn = document.getElementsByClassName("generate-Pass")[0];
//gelobal variables
var upperCase = false;
var LowerCase = false;
var numbersCase = false;
var symbolsCase = false;
var CheckedBoxTrue = 1;
var checkArr = [];
// functions
// copy password function
var copyPassword = function () {
    copyBox.select();
    copyBox.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyBox.value);
    console.log(copyBox.value);
};
// generatePassword function
var generatePassword = function (boxCheck) {
    console.log(boxCheck.checked);
    console.log(boxCheck.value);
    console.log(CheckedBoxTrue);
    console.log(checkArr);
};
// event lisnters
copyPassBtn.addEventListener("click", copyPassword);
generatePassBtn.addEventListener("click", function () {
    CheckedBoxTrue = 1;
    checkArr = [];
    for (var _i = 0, checkedBoxes_1 = checkedBoxes; _i < checkedBoxes_1.length; _i++) {
        var boxCheck = checkedBoxes_1[_i];
        if (boxCheck.checked) {
            generatePassword(boxCheck);
            checkArr.push("".concat(boxCheck.value));
            CheckedBoxTrue++;
        }
    }
});
var loowsArr = [
    "upperCase",
    "LowerCase",
    "numbersCase",
    "symbolsCase",
];
// "LowerCase",
// "numbersCase",
// "symbolsCase",
var lengthOfPassWord = 21;
var typesCount = 4;
var randomFunc = {
    upperCase: generateUpperCase,
    LowerCase: generateLowerCase,
    numbersCase: generatenumbersCase,
    symbolsCase: generatesymbolsCase,
};
function generateUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function generateLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function generatenumbersCase() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function generatesymbolsCase() {
    var symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}
var generatedPassword;
function random() {
    // Initialize outside the loop for concatenation
    generatedPassword = "";
    for (var i = 0; i < lengthOfPassWord; i += typesCount) {
        loowsArr.forEach(function (type) {
            var funcName = type;
            if (randomFunc[funcName] && typeof randomFunc[funcName] === "function") {
                generatedPassword += randomFunc[funcName]();
            }
        });
    }
    console.log(generatedPassword); // Print the concatenated result after the loop
    var finalgeneratedPassword = generatedPassword.slice(0, lengthOfPassWord);
    console.log(finalgeneratedPassword);
    copyBox.value = finalgeneratedPassword;
}
random();
