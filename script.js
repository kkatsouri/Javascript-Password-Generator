//Arrays to define what can can go into generated password
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialcharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '_', '-', '?'];
var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

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

//1. prompt the user, ask them to define what they want/password criteria


//1.a Password length btwn 8-128, how to make sure? 

//1.b lower case, uppercase, special characters? (how to define? set up variables? arrays?)




//2 validate the input. (make sure input is btwn 8 and 128, and that at least uppercase or lowercase is selected)
//3 generate the password 


//4 display the generated password on the page
return ["Generated password will go here"]
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lengthOfPassword = window.prompt ("Select password length. Enter number between 8 and 128"); 
var lowercase = window.confirm ("Include lowercase?")
var uppercase = window.confirm ("Include uppercase?")
var numeric = window.confirm ("Include numbers?")
var specialcharacters = window.confirm ("Include special characters?")