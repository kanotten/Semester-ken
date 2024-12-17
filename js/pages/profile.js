// profile.js
import { isLoggedIn } from "../modules/auth.js";

if (!isLoggedIn()) {
  // Redirect
  window.location.href = "/login.html";
} else {
  // Loads profile data
  console.log("User is logged in");
}
// profile.js
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("accessToken"); // Remove token on logout
  alert("Logged out successfully!");
  window.location.href = "/login.html"; // Redirect to login page
});
