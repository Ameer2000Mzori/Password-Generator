// selected elements
var copyBox = document.getElementsByClassName("number-Input")[0];
var lengthOfPass = document.getElementsByClassName("length-Of-Pass")[0];
var checkedBoxes = document.querySelectorAll("#checked-Box");
var copyPassBtn = document.getElementsByClassName("copy-Pass-Btn")[0];
var generatePassBtn = document.getElementsByClassName("generate-Pass")[0];
//gelobal variables
var generatedPassword;
var lengthOfPassWord;
var lastArry = [];
var tempArry = [];
var selectedType = 0;
// The object 'randomFunc' associates descriptive keys with corresponding functions,
var randomFunc = {
    upperCase: generateUpperCase,
    LowerCase: generateLowerCase,
    numbers: generatenumbersCase,
    symbols: generatesymbolsCase,
};
// our random created number / symbols functions :
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
// our loop logic over the selected elements function :
var logicLoopFunction = function () {
    lengthOfPassWord = lengthOfPass.value;
    lastArry = [];
    tempArry = [];
    for (var _i = 0, checkedBoxes_1 = checkedBoxes; _i < checkedBoxes_1.length; _i++) {
        var boxCheck = checkedBoxes_1[_i];
        if (boxCheck.checked) {
            tempArry.push("".concat(boxCheck.value));
        }
    }
    lastArry = tempArry;
    selectedType = lastArry.length;
    GenorateRandomPassword();
    console.log("type count length", selectedType, "our loows arry", lastArry);
};
// Genorate Random Password Function
function GenorateRandomPassword() {
    // Initialize outside the loop for concatenation
    generatedPassword = "";
    for (var i = 0; i < lengthOfPassWord; i += selectedType) {
        lastArry.forEach(function (type) {
            var funcName = type;
            if (randomFunc[funcName] && typeof randomFunc[funcName] === "function") {
                generatedPassword += randomFunc[funcName]();
            }
        });
    }
    var finalgeneratedPassword = generatedPassword.slice(0, lengthOfPassWord);
    copyBox.value = finalgeneratedPassword;
}
// copy password function
var copyPassword = function () {
    copyBox.select();
    copyBox.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyBox.value);
    console.log(copyBox.value);
};
// our eventlinsters
generatePassBtn.addEventListener("click", logicLoopFunction);
copyPassBtn.addEventListener("click", copyPassword);
