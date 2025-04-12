const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


// Dummy user for login
const dummyUser = {
  username: "user123",
  password: "password123"
};

const loginForm = document.querySelector('.sign-in form');
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = loginForm.querySelector('input[type="text"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  if (username === dummyUser.username && password === dummyUser.password) {
    alert("Login successful!");
    window.location.href = "Home.html";
  } else {
    alert("Invalid username or password.");
  }
});

const registerForm = document.querySelector('.sign-up form');
registerForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const newUsername = registerForm.querySelector('input[placeholder="Username"]').value;
  const newEmail = registerForm.querySelector('input[placeholder="Email"]').value;
  const newPassword = registerForm.querySelector('input[placeholder="Password"]').value;

  console.log("Registered:", { newUsername, newEmail, newPassword });
  alert("Registration successful! You can now log in.");
  container.classList.remove('active');
});