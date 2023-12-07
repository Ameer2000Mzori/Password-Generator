// selected elements
const copyBox: any = document.getElementsByClassName("number-Input")[0];
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
const generatePassword = () => {};

// event lisnters
copyPassBtn.addEventListener("click", copyPassword);
generatePassBtn.addEventListener("click", () => {
  for (let boxCheck of checkedBoxes) {
    if (boxCheck.checked) {
      console.log(boxCheck.value);
    }
  }
});
