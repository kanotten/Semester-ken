const API_URL = "https://your-api-endpoint.com"; // Replace with your actual API URL

// Store API key in localStorage
export function storeApiKey(apiKey) {
  localStorage.setItem("accessToken", apiKey);
}

// Get API key from localStorage
export function getApiKey() {
  return localStorage.getItem("accessToken");
}

// Login function
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
    storeApiKey(data.accessToken); // Store token
    return data; // Return user data
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Register function
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
