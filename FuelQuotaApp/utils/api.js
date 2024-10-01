// utils/api.js
export const login = async (username, password) => {
  // Example API call for login (replace with actual API)
  const response = await fetch("https://example.com/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
};
