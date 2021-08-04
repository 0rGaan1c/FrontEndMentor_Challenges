const submitBtn = document.querySelector("#btn");

function handleError(field, className) {
  const errorParagraph = document.querySelector(className);
  const tmpPlaceholder = field.placeholder;
  errorParagraph.classList.remove("no-error");
  errorParagraph.classList.add("error");

  field.style.border = "2px solid hsl(0, 100%, 74%)";
  field.style.background = "url(./images/icon-error.svg) 95% center no-repeat";
  field.placeholder = "";

  if (className === ".error-bad-email") {
    field.style.color = "hsl(0, 100%, 74%)";
  }

  setTimeout(async () => {
    errorParagraph.classList.remove("error");
    errorParagraph.classList.add("no-error");
    field.style.border = "1px solid rgba(62, 60, 73, 0.3)";
    field.style.color = "hsl(249, 10%, 26%)";
    field.style.background = "none";
    field.placeholder = tmpPlaceholder;
  }, 3000);
}

submitBtn.addEventListener("click", () => {
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  if (firstName.value === "") {
    handleError(firstName, ".error-firstName");
  }
  if (lastName.value === "") {
    handleError(lastName, ".error-lastName");
  }
  if (email.value === "") {
    handleError(email, ".error-email");
  }
  if (email.value && !validateEmail(email.value)) {
    handleError(email, ".error-bad-email");
  }
  if (password.value === "") {
    handleError(password, ".error-password");
  }
});

function validateEmail(emailAdress) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
}
