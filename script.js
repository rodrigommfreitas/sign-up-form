const form = document.getElementById("form");

function checkPassword() {
  const password = document.getElementById("pwd");
  const passwordConfirm = document.getElementById("pwd-confirm");
  if (password.value !== "" && passwordConfirm.value !== "") {
    const warning = document.getElementById("warning");
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

function handleForm(event) {
  if (!checkPassword()) event.preventDefault();
}

form.addEventListener("submit", handleForm);
