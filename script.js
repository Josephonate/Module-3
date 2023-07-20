// Assignment code here
var special = "!#$%&'\"()*+,-.\\/:;<=>?@[\]^_`{|}~";
var specialArray = special.split("");
var numbers = "0123456789";
var numbersArray = numbers.split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCaseArray = upperCase.split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArray = lowerCase.split("");

// This is my random password gen criteria.
function passwordGen() {

  var length = prompt("Please choose a length between 8 to 128 Characters");

  if (length < 8) {
    alert("Your password is too short try again!");
    return;
  } else if (length > 128) {
    alert("Your password is too long try again!");
    return;
  }

  var isSpecial = confirm("Do you want special characters in your Password?");
  // console.log(isSpecial)
  var isUpper = confirm("Do you want Uppercase letters in your Password?");

  var isLower = confirm("Do you want lowercase letters in your Password?");

  var isNumbers = confirm("Do you want Numbers in your Password?");

  if (isSpecial === false && isUpper === false && isLower === false && isNumbers === false) {
    alert("You must select at least one choice!");
    return null;
  }
  var passwordOptions = {
    length: length,
    hasSpecial: isSpecial,
    hasUpper: isUpper,
    hasLower: isLower,
    hasNumbers: isNumbers,
  }
  return passwordOptions;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var options = passwordGen();
  var password = [];
  var concatChar = [];
  var randomChar = [];

  if (options.hasLower) {
    concatChar = concatChar.concat(lowerCaseArray);
    randomChar.push(generateRandom(lowerCaseArray));
  }
  if (options.hasUpper) {
    concatChar = concatChar.concat(upperCaseArray);
    randomChar.push(generateRandom(upperCaseArray));
  }
  if (options.hasNumbers) {
    concatChar = concatChar.concat(numbersArray);
    randomChar.push(generateRandom(numbersArray));
  }
  if (options.hasSpecial) {
    concatChar = concatChar.concat(specialArray);
    randomChar.push(generateRandom(specialArray));
  }
  for (var i = 0; i < options.length; i++) {
    var concatChar = generateRandom(concatChar);
    password.push(concatChar);
  }

  for (var i = 0; i < randomChar.length; i++) {
    password[i] = randomChar[i];

  }
  return password.join("");
}

function generateRandom(arr) {

  var randomChar = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomChar];
  return randomElement;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
