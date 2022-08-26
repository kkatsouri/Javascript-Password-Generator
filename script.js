// Assignment Code
var generateBtn = document.querySelector("#generate");

//Console says generatePassword is not defined. So here I am writing a function to define generatePassword
function generatePassword() {
console.log("Hey, you clicked the button!")
//1. prompt the user, ask them to define what they want/password criteria
var lengthOfPassword = window.prompt ("Enter number between 8 and 128"); 
var lowercase = window.confirm ("Include lowercase?")
var uppercase = window.confirm ("Include uppercase?")
var numeric = window.confirm ("Include numbers?")
var specialcharacters = window.confirm ("Include special characters?") 

//1.a Password length btwn 8-128, how to make sure? 

var lengthOfPassword != 
//1.b lower case, uppercase, special characters? (how to define? set up variables? arrays?)


var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var specialcharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '_', '-', '?']
var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

//2 validate the input. (make sure input is btwn 8 and 128, and that at least uppercase or lowercase is selected)
//3 generate the password 
]

//4 display the generated password on the page
return ["Generated password will go here"]
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 addEventListener()