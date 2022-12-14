//Arrays to define what can can go into generated password
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '_', '-', '?'];
var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var lengthOfPassword = 8;
var criteria = []

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 addEventListener()

//What happens when the button is pressed, password to the #password output
function writePassword () {
  var rightPrompts = promptSelections(); 
  var passwordText = document.querySelector("#password");

  if (rightPrompts) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}
 //Console says generatePassword is not defined. Here I am defining as the equation for generating a random password from criteria
 //Math.floor gives us the nearest whole number from Math.random
 //Math.random generates a random integar between 0 and 1.
 //This is then multiplied by the criteria given by the user and length of the array 
function generatePassword() {
  var password = "";
  for(var i = 0; i < lengthOfPassword; i++) {
    var passwordOutput = Math.floor(Math.random() * criteria.length);
    password = password + criteria[passwordOutput];
  }
  return password;
}

//First use a function to ask user for length of password, use parseInt to change the returned string to an integar
//then adding an if statement to make sure a number within 8-128 is entered, and is entered as digits not a string
//then continue to use if statements to ask user to define other password criteria. 
//combine var criteria with lowercase, uppercase etc. 
//criteria array included here as empty array to make sure function starts fresh each time
function promptSelections() { 
  criteria = []
  lengthOfPassword = parseInt(window.prompt("Select password length. Enter number between 8 and 128"));
 
  if((isNaN(lengthOfPassword)) || lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert("Please make sure you enter a number between 8 and 128");
    return false; 
  }
  if (window.confirm ("Include lowercase?")){
    criteria = criteria.concat(lowerCase);
  }
  if (window.confirm ("Include uppercase?")){
    criteria = criteria.concat(upperCase);
  }
  if (window.confirm ("Include numbers?")){
    criteria = criteria.concat(numeric);
  }
  if (window.confirm ("Include special characters?")){
    criteria = criteria.concat(specialCharacters);
  }
  return true;
}
