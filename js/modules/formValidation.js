// Validate email format
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate password length
export function validatePassword(password) {
  return password.length >= 6; // Adjust minimum length as needed
}

// Function to validate both fields for login
export function validateLoginForm(email, password) {
  if (!validateEmail(email)) {
    return "Please enter a valid email.";
  }
  if (!validatePassword(password)) {
    return "Password must be at least 6 characters long.";
  }
  return null; // Valid form
}
