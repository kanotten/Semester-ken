import { loginUser } from "../modules/auth.js";
import { validateLoginForm } from "../modules/formValidation.js";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validate form fields
  const validationError = validateLoginForm(email, password);
  if (validationError) {
    alert(validationError);
    return; // Prevent form submission if validation fails
  }

  try {
    const user = await loginUser(email, password);
    alert("Login successful!");
    window.location.href = "/profile.html"; // Redirect after successful login
  } catch (error) {
    alert("Error logging in: " + error.message);
  }
});
