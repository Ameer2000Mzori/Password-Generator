// selected elements
const copyBox: any = document.getElementsByClassName("number-Input")[0];
const lengthOfPass = document.getElementsByClassName("length-Of-Pass")[0];

// selected check elements
const upperCaseCheck = document.getElementsByClassName("upperCase-Check")[0];
const LowerCaseCheck = document.getElementsByClassName("LowerCase-Check")[0];
const numbersCheck = document.getElementsByClassName("numbers-Check")[0];
const symbolsCheck = document.getElementsByClassName("symbols-Check")[0];

// seleted buttons
const copyPassBtn = document.getElementsByClassName("copy-Pass-Btn")[0];
const generatePassBtn = document.getElementsByClassName("generate-Pass")[0];

//gelobal variables

// functions

// copy password function
const copyPassword = (): void => {
  copyBox.select();
  copyBox.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyBox.value);
  console.log(copyBox.value);
};

// event lisnters
copyPassBtn.addEventListener("click", copyPassword);
