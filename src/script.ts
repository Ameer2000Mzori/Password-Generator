// selected elements
let copyBox: any = document.getElementsByClassName("number-Input")[0];
const lengthOfPass = document.getElementsByClassName("length-Of-Pass")[0];

// selected check elements
const upperCaseCheck: any =
  document.getElementsByClassName("upperCase-Check")[0];
const LowerCaseCheck: any =
  document.getElementsByClassName("LowerCase-Check")[0];
const numbersCheck: any = document.getElementsByClassName("numbers-Check")[0];
const symbolsCheck: any = document.getElementsByClassName("symbols-Check")[0];
const checkedBoxes: any = document.querySelectorAll("#checked-Box");

// seleted buttons
const copyPassBtn = document.getElementsByClassName("copy-Pass-Btn")[0];
const generatePassBtn = document.getElementsByClassName("generate-Pass")[0];

//gelobal variables
let upperCase: boolean = false;
let LowerCase: boolean = false;
let numbersCase: boolean = false;
let symbolsCase: boolean = false;
let CheckedBoxTrue: number = 1;
let checkArr: string[] = [];

// functions

// copy password function
const copyPassword = (): void => {
  copyBox.select();
  copyBox.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyBox.value);
  console.log(copyBox.value);
};

// generatePassword function
const generatePassword = (boxCheck) => {
  console.log(boxCheck.checked);
  console.log(boxCheck.value);
  console.log(CheckedBoxTrue);
  console.log(checkArr);
};

// event lisnters
copyPassBtn.addEventListener("click", copyPassword);
generatePassBtn.addEventListener("click", () => {
  CheckedBoxTrue = 1;
  checkArr = [];
  for (let boxCheck of checkedBoxes) {
    if (boxCheck.checked) {
      generatePassword(boxCheck);
      checkArr.push(`${boxCheck.value}`);
      CheckedBoxTrue++;
    }
  }
});

let loowsArr: string[] = [
  "upperCase",
  "LowerCase",
  "numbersCase",
  "symbolsCase",
];

// "LowerCase",
// "numbersCase",
// "symbolsCase",

let lengthOfPassWord: number = 21;
let typesCount: number = 4;

let randomFunc = {
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
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

let generatedPassword;

function random() {
  // Initialize outside the loop for concatenation
  generatedPassword = "";
  for (let i = 0; i < lengthOfPassWord; i += typesCount) {
    loowsArr.forEach((type) => {
      const funcName = type;
      if (randomFunc[funcName] && typeof randomFunc[funcName] === "function") {
        generatedPassword += randomFunc[funcName]();
      }
    });
  }
  console.log(generatedPassword); // Print the concatenated result after the loop
  let finalgeneratedPassword = generatedPassword.slice(0, lengthOfPassWord);
  console.log(finalgeneratedPassword);
  copyBox.value = finalgeneratedPassword;
}

random();
