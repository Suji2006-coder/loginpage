// script.js
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

// Example hardcoded credentials
const validUsername = "admin";
const validPassword = "12345";

loginForm.addEventListener("submit", function(e){
    e.preventDefault(); // prevent form from refreshing page
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === validUsername && password === validPassword){
        message.style.color = "green";
        message.textContent = "Login successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password";
    }
});