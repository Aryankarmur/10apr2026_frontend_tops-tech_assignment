function login() {
  const email = document.getElementById("email");

  const password = document.getElementById("password");

  document.getElementById("emailError").textContent = "";

  document.getElementById("passwordError").textContent = "";

  if (!email.value.trim()) {
    document.getElementById("emailError").textContent = "Email is required";
  }

  if (!password.value.trim()) {
    document.getElementById("passwordError").textContent =
      "Password is required";
  }
}
