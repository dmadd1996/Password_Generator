// Assignment code here

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
do{
  var passwordSize = parseInt(window.prompt(
      // THEN I choose a length of at least 8 characters and no more than 128 characters
    "How long would you like your password to be? User may select between 8 and 128.", ""
    ), 10
    );
}while(
  isNaN(passwordSize) || passwordSize > 128 || passwordSize < 8
);

console.log(passwordSize)

// WHEN asked for character types to include in the password
var charsLowercase = "abcdefghijklmnopqrstuvwxyz"

var charsUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var charsNumeric = "0123456789"

var charsSpecial = "!@#$%^&*()"
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
var lowercaseSelect = window.confirm("Please select one or more of the following character options to be included in your password: LOWERCASE CHARACTERS?")

// if (lowercaseSelect) {
//   charsLowercase = true
// }else{
//   charsLowercase = false
// }

console.log(lowercaseSelect)

var uppercaseSelect = window.confirm("Please select one or more of the following character options to be included in your password: UPPERCASE CHARACTERS?")

// if (lowercaseSelect) {
//   charsUppercase = true
// }else{
//   charsUppercase = false
// }

console.log(uppercaseSelect)

var numericSelect = window.confirm("Please select one or more of the following character options to be included in your password: NUMERIC CHARACTERS?")

// if (numericSelect) {
//   charsNumeric = true
// }else{
//   charsNumeric = false
// }

console.log(numericSelect)

var specialSelect = window.confirm("Please select one or more of the following character options to be included in your password: SPECIAL CHARACTERS?")

// if (specialSelect) {
//   charsSpecial = true
// }else{
//   charsSpecial = false
// }

console.log(specialSelect)


var userChoice = []
var definedItem = []

// WHEN I answer each prompt
if (lowercaseSelect) {
  var userChoice = userChoice.concat(charsLowercase.split(''));
  definedItem.push(randomizer(charsLowercase))
}
if (numericSelect) {
  var userChoice = userChoice.concat(charsNumeric.split(''))
  definedItem.push(randomizer(charsNumeric))
}
if (uppercaseSelect) {
  var userChoice = userChoice.concat(charsUppercase.split(''))
  definedItem.push(randomizer(charsUppercase))
}
if (specialSelect) {
  var userChoice = userChoice.concat(charsSpecial.split(''))
  definedItem.push(randomizer(charsSpecial))
}

var pw = []

for (var i = 0; i < passwordSize; i++) {
  var character = randomizer(userChoice);
  pw.push(character)
}

console.log(pw)

for (var i = 0; i < definedItem.length; i++) {
  pw[i] = definedItem[i]
}

console.log(definedItem)

// THEN my input should be validated and at least one character type should be selected

if(definedItem.length === 0) {
  var reload = window.confirm("You must select at least one character type. Reload and try again.");
  if (reload) {
    document.location.reload(true)
  }
}

function randomizer(array) {
  var index = Math.floor(Math.random()*array.length);
  //console.log(index);
  var randomChar = array[index];
  return randomChar
}



//console.log("Random Chaacter: ", randomizer(charsLowercase));



// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var myDiv = document.getElementById("myDiv")

var pwJoin = pw.join('')

console.log(pwJoin)

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

