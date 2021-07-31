// Error Messages
let emptyError = "Please enter a value.";

// Get entered value
function getValue() {
    let userInput = document.getElementById("userString");
    
    if(userInput.value == "" || userInput == null) {
        let errorHeading = document.getElementById("alert-heading");
        let errorMessage = document.getElementById("msg");
        let alertBox = document.getElementById("alert");

        errorHeading.innerHTML = "Error!";
        errorMessage.innerHTML = emptyError;
        alertBox.classList.remove("alert-success");
        alertBox.classList.add("alert-danger");
        alertBox.classList.remove("invisible");
    }else {
        reverseString(userInput.value);
    }
}

// Reverse string
function reverseString(userInput) {
    // Split the input into an array with .split(). 
    // .split("") includes all characters in the string.
    let reverseStr = userInput.split("");
    // Reverse the array with .reverse() and then convert it to a string
    // with .join().
    reverseStr = reverseStr.reverse().join("");
    
    displayResults(reverseStr);
}

// Display message
function displayResults(output) {
    let alertHeading = document.getElementById("alert-heading");
    let alertMessage = document.getElementById("msg");
    let alertBox = document.getElementById("alert");

    alertHeading.innerHTML = "Your Reversed String";
    alertMessage.innerHTML = output;
    alertBox.classList.add("alert-success");
    alertBox.classList.remove("alert-danger");
    alertBox.classList.remove("invisible");
}