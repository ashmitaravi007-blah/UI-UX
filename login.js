const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("login-btn");
const message = document.getElementById("message");

button.addEventListener("click", function () {

    const user = username.value;
    const pass = password.value;

    if (user === "" || pass === "") {
        message.textContent = "Please fill all the details";
        message.style.color = "red";
    }
    else if (user === "Ashmita" && pass === "2007") {
        message.textContent = "Login Successful";
        message.style.color = "green";
    }
    else {
        message.textContent = "Invalid Username or Password";
        message.style.color = "red";
    }
});