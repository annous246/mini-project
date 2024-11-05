const form = document.getElementById("userForm");
const tableList = document.getElementById("tableList");
let userTableEmail = [];

const checkUserExistance = (userEmail) => {
  for (let index = 0; index < userTableEmail.length; index++) {
    if (userEmail === userTableEmail[index]) return true;
  }
  return false;
};
const emailValidity = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // from google
  return regex.test(email);
};

const passwordValidity = (password) => {
  return password.length >= 8;
};

const validateField = (field, errorDiv, iconDiv, valid) => {
  const value = field.value;
  if (!value || !valid) {
    errorDiv.textContent = "Vide ou Invalid";
    errorDiv.classList.remove("hideClass");
    field.classList.remove("inputSuccess");
    field.classList.add("inputError");
    iconDiv.classList.add("hideClass");
    return false;
  } else {
    errorDiv.classList.add("hideClass");
    field.classList.remove("inputError");
    field.classList.add("inputSuccess");
    iconDiv.classList.remove("hideClass");
    return true;
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameField = document.getElementById("nom");
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");

  const isNameValid = validateField(
    nameField,
    document.getElementById("nameError"),
    document.getElementById("nameIcon"),
    true
  );
  const isEmailValid = validateField(
    emailField,
    document.getElementById("emailError"),
    document.getElementById("emailIcon"),
    emailValidity(emailField.value)
  );

  const isPasswordValid = validateField(
    passwordField,
    document.getElementById("passwordError"),
    document.getElementById("passwordIcon"),
    passwordValidity(passwordField.value)
  );
  if (isNameValid && isEmailValid && isPasswordValid) {
    const userTableRow = document.createElement("tr");
    const userName = document.createElement("td");
    const userEmail = document.createElement("td");
    userName.textContent = nameField.value;
    userEmail.textContent = emailField.value;
    userTableRow.appendChild(userName);
    userTableRow.appendChild(userEmail);
    console.log(checkUserExistance(emailField));
    if (checkUserExistance(emailField.value)) {
      alert("User Avec ce Email deja Existe dans le Tableau");
    } else {
      userTableEmail.push(emailField.value);
      tableList.appendChild(userTableRow);

      setTimeout(() => {
        nameField.value = "";
        emailField.value = "";
        passwordField.value = "";
        document
          .querySelectorAll(".errorClass")
          .forEach((error) => error.classList.add("hideClass"));
        document
          .querySelectorAll("input")
          .forEach((input) => input.classList.remove("inputSuccess"));
        document
          .querySelectorAll(".iconClass")
          .forEach((icon) => icon.classList.add("hideClass"));
      }, 3000);

      alert("User Has been added Successfully");
    }
  } else {
    alert("Check the Email or Password Constraint");
  }
});
