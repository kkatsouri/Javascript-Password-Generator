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

//What happens when the button is pressed (writePassword)
function writePassword () {
  var rightPrompts = promptSelections(); 
  var passwordText = document.querySelector("#password")
}
 //Console says generatePassword is not defined. So here I am writing a function to define generatePassword
function generatePassword() {

//First use a function to ask user for length of password, use parseInt to change the returned string to an integar
//then adding an if statement to make sure a number within 8-128 is entered, and is entered as digits not a string
//then continue to use if statements to ask user to define other password criteria. 
//combine var criteria with lowercase, uppercase etc. 
function promptSelections() { 
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
  if (window.confirm ("Include uppercase?")){
    criteria = criteria.concat(upperCase);
  }
  return true;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

