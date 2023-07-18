// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

const randomGen = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  char: getRandomChar
};


function getRandomLower() {
  const lowerCase = "abcedefghijklmnopqrstuvwxyz";
  return lowerCase[Math.floor(Math.random()* lowerCase.length)]
}

function getRandomUpper() {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperCase[Math.floor(Math.random()* upperCaselength)]
}

function getRandomNumber() {
  const numbers = "0123456789";
  return numbers[Math.floor(Math.random()* numbers.length)]
}

function getRandomChar() {
  const char = " !#$%&'\"()*+,-.\\/:;<=>?@[\]^_`{|}~";
  return char[Math.floor(Math.random()* char.length)]
}
console.log(getRandomChar());


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
