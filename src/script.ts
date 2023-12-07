// selected elements
let copyBox: any = document.getElementsByClassName("number-Input")[0];
const lengthOfPass: any = document.getElementsByClassName("length-Of-Pass")[0];
const checkedBoxes: any = document.querySelectorAll("#checked-Box");
const copyPassBtn = document.getElementsByClassName("copy-Pass-Btn")[0];
const generatePassBtn = document.getElementsByClassName("generate-Pass")[0];

//gelobal variables
let generatedPassword: string;
let lengthOfPassWord: number;
let lastArry: string[] = [];
let tempArry: string[] = [];
let selectedType: number = 0;

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

// our loop logic over the selected elements function :

const logicLoopFunction = () => {
  lengthOfPassWord = lengthOfPass.value;
  lastArry = [];
  tempArry = [];
  for (let boxCheck of checkedBoxes) {
    if (boxCheck.checked) {
      tempArry.push(`${boxCheck.value}`);
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
  for (let i = 0; i < lengthOfPassWord; i += selectedType) {
    lastArry.forEach((type) => {
      const funcName = type;
      if (randomFunc[funcName] && typeof randomFunc[funcName] === "function") {
        generatedPassword += randomFunc[funcName]();
      }
    });
  }
  let finalgeneratedPassword = generatedPassword.slice(0, lengthOfPassWord);
  copyBox.value = finalgeneratedPassword;
}

// copy password function
const copyPassword = (): void => {
  copyBox.select();
  copyBox.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyBox.value);
  console.log(copyBox.value);
};

// our eventlinsters
generatePassBtn.addEventListener("click", logicLoopFunction);
copyPassBtn.addEventListener("click", copyPassword);
