// invalid input logic
const inputs = document.getElementsByTagName("input");

let i;
for (i=0; i<=inputs.length; i++) {
    if (inputs[i] === undefined) continue;
    inputs[i].addEventListener("blur", makeInvalid);
}

function makeInvalid(e) {
    if (e.target.checkValidity()) {
        e.target.className = "valid-text";
    } else {
        e.target.className = "invalid-text";
    }
}

// matching password logic
const passwordInputs = document.querySelectorAll("[type='password']"),
    submitBtn = document.getElementById("submit"),
    matchingOutput = document.getElementById("matchingPasswords");

submitBtn.addEventListener("click", matchPasswords);
passwordInputs[1].addEventListener("keyup", matchPasswords);
passwordInputs[1].addEventListener("keyup", makeInvalid);

function matchPasswords() {
    if (passwordInputs[0].value === passwordInputs[1].value) {
        matchingOutput.innerHTML = "";
    } else {
        matchingOutput.innerHTML = "*Passwords don't match!";
    }
}