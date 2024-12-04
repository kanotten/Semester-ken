// register.js
import { registerUser } from "../modules/auth.js";

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const user = await registerUser(email, password);
    alert("Registration successful!");
    // Redirect to login page after registration
    window.location.href = "/login.html";
  } catch (error) {
    alert("Error registering: " + error.message);
  }
});
