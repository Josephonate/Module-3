// Assignment code here

// This is my random password gen criteria.
function passwordGen(){

var char = " !#$%&'\"()*+,-.\\/:;<=>?@[\]^_`{|}~";
var numbers = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcedefghijklmnopqrstuvwxyz";
var length = prompt("Please choose a length between 8 to 128 Characters");

if (length < 8) {
 alert ("Your password is too short try again!");
}else if (length > 128) {
 alert ("Your password is too long try again!");
} else {
 // return length;
}

if (confirm ("Do you want special characters in your Password?")) {
 // return char;
}

if (confirm ("Do you want Uppercase letters in your Password?") ) {
 // return upperCase;
}
if(confirm ("Do you want lowercase letters in your Password?")){
 // return lowerCase;
}
if(confirm ("Do you want Numbers in your Password?")){
 return length, char, upperCase, lowerCase, numbers;
}
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  gen
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  var password = "";
  
 for(var i = 0; i < length; i++){
  var randomChar = Math.floor(Math.random() * length);
  password = password = randomChar;
 }
 return password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
