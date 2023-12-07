// selected elements
let copyBox: any = document.getElementsByClassName("number-Input")[0];
const lengthOfPass: any = document.getElementsByClassName("length-Of-Pass")[0];

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
let generatedPassword;
let lengthOfPassWord: number;
let loowsArr: string[] = [];
let pushableArry: string[] = [];
let typesCount: number = 0;

// functions

// copy password function
const copyPassword = (): void => {
  copyBox.select();
  copyBox.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyBox.value);
  console.log(copyBox.value);
};

// Genorate Random Password Function
function GenorateRandomPassword() {
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
  let finalgeneratedPassword = generatedPassword.slice(0, lengthOfPassWord);
  copyBox.value = finalgeneratedPassword;
}

generatePassBtn.addEventListener("click", () => {
  lengthOfPassWord = lengthOfPass.value;
  loowsArr = [];
  pushableArry = [];
  for (let boxCheck of checkedBoxes) {
    if (boxCheck.checked) {
      pushableArry.push(`${boxCheck.value}`);
    }
  }

  loowsArr = pushableArry;
  typesCount = loowsArr.length;
  GenorateRandomPassword();
  console.log("type count length", typesCount, "our loows arry", loowsArr);
});

// The object 'randomFunc' associates descriptive keys with corresponding functions,
let randomFunc = {
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
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
