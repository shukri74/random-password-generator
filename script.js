// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = parseInt(prompt("How many characters do you want the password?"));

  /*Validations for the length of the password and avoid empty input*/

  if(passwordLength <  10 && passwordLength > 64){
    alert("The pasword must be between 10 and 64 characters");
  }

  if(isNaN(passwordLength)){
    alert("The pasword must be between 10 and 64 characters")
  }


  /* prompts to confirm what types of characters are to be included in the password and more validations*/

  var lowercaseCharacters = window.confirm("Do you want to include Lowercase characters")
  var uppercaseCharacters = window.confirm("Do you want to include Uppercase characters")
  var numbers = window.confirm("Do you want to include numbers")
  var specialcharacters = window.confirm("Do you want to include special characters")
 
  if(!lowercaseCharacters && !uppercaseCharacters && !numbers && !specialcharacters){
    alert("You must choose at least one type of character")
    return;
  }
 
  /*stores prompts responses in an object*/

  var passwordObject = {
    Length: passwordLength,
    lower: lowercaseCharacters,
    upper: uppercaseCharacters,
    numbers: numbers,
    special: specialcharacters,

  }

  return passwordObject;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex =  Math.floor(Math.random() * arr.length);
  return arr[randomIndex]

}

// Function to generate password with user input
function generatePassword() {

  // grabs passwordObject and stores it in avariable
  var passwordChoices = getPasswordOptions();

  // array to store the generated password
  var generatedPassword = [];

  // array to store the types of characters to be included in the password
  var includedCharacters = [];

  if(passwordChoices.includelower){

    includedCharacters.concat(lowerCasedCharacters);
  }

  if(passwordChoices.includeupper){

    includedCharacters.concat(upperCasedCharacters);
  }

  if(passwordChoices.includenumbers){

    includedCharacters.concat(numericCharacters);
  }

  if(passwordChoices.includespecial){
    includedCharacters.concat(specialCharacters)
  }

  // loops through the array of chosen characters and randomly chose characters until the password length is reached

 for(var i = 0; i < passwordChoices.length; i++){

  var nextCharacter = getRandom(includedCharacters)

  generatedPassword.push(nextCharacter);
 
  generatedPassword.join("")

}
  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);