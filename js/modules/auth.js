const API_URL = "https://v2.api.noroff.dev";

// checking for the access token)
export function isLoggedIn() {
  return localStorage.getItem("accessToken") !== null;
}

// Login
export async function loginUser(email, password) {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error("Login failed!");

    const data = await response.json();
    localStorage.setItem("accessToken", data.accessToken); // Store token
    return data; // Return user data
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Register
export async function registerUser(email, password) {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error("Registration failed!");

    const data = await response.json();
    return data; // Return user data
  } catch (error) {
    console.error(error);
    throw error;
  }
}
