document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    let valid = true;

    const name = document.getElementById("name").value;
    if (name.trim() === "") {
      alert("Name is required.");
      valid = false;
    }

    const email = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      valid = false;
    }

    const password = document.getElementById("password").value;
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      valid = false;
    }

    if (!valid) {
      event.preventDefault();
    }
  });
