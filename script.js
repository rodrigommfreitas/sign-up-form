const form = document.getElementById("form");
const password = document.getElementById("pwd");
const passwordConfirm = document.getElementById("pwd-confirm");
const warning = document.getElementById("warning");

function checkPassword() {
  if (password.value !== "" && passwordConfirm.value !== "") {
    if (password.value !== passwordConfirm.value) {
      warning.textContent = "The passwords don't match!";
      return false;
    } else {
      warning.textContent = "";
      alert("Account successfully created.");
      return true;
    }
  }
}

function showPasswordFormat() {
  warning.style.color = "#000000";
  warning.textContent =
    "Password must contain one uppercase, one number, minimum 8 characters.";
}

function hidePasswordFormat() {
  warning.style.color = "#ff0000";
  warning.textContent = "";
}

password.addEventListener("focus", showPasswordFormat);
passwordConfirm.addEventListener("focus", showPasswordFormat);
password.addEventListener("blur", hidePasswordFormat);
passwordConfirm.addEventListener("blur", hidePasswordFormat);

function handleForm(event) {
  if (!checkPassword()) event.preventDefault();
}

form.addEventListener("submit", handleForm);
