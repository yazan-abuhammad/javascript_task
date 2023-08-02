document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrorMessages();

    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const birthDate = document.getElementById("birth_date").value;
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirm_email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
    const mobileNumber = document.getElementById("mobile_number").value;

    // Validation Functions
    function validateName(name) {
      return /^[A-Za-z]+$/.test(name);
    }

    function validateBirthDate(date) {
      const regex = /^\d{4}-\d{2}-\d{2}$/;
      if (!regex.test(date)) {
        return false;
      }

      const year = parseInt(date.split("-")[0]);
      const month = parseInt(date.split("-")[1]);
      const day = parseInt(date.split("-")[2]);

      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1;
      const currentDay = new Date().getDate();

      if (
        year > currentYear ||
        (year === currentYear && month > currentMonth) ||
        (year === currentYear && month === currentMonth && day > currentDay)
      ) {
        return false;
      }

      return true;
    }

    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }

    function validatePassword(password) {
      const regex =
        /^(?=.*[A-Z])(?=.*\d{2,})(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,32}$/;
      return regex.test(password);
    }

    function validateMobileNumber(number) {
      const regex = /^\d{10}$/;
      return regex.test(number);
    }

    // Error Handling
    let errorMessage = "";
    if (!validateName(firstName)) {
      errorMessage += "First name should contain only letters.\n";
    }

    if (!validateName(lastName)) {
      errorMessage += "Last name should contain only letters.\n";
    }

    if (!validateBirthDate(birthDate)) {
      errorMessage += "Invalid birth date format or future date not allowed.\n";
    }

    if (!validateEmail(email)) {
      errorMessage += "Invalid email address.\n";
    }

    if (email !== confirmEmail) {
      errorMessage += "Emails do not match.\n";
    }

    if (!validatePassword(password)) {
      errorMessage +=
        "Invalid password. The password should start with a capital letter, have at least two numbers, at least one special character, and be between 8 and 32 characters long.\n";
    }

    if (password !== confirmPassword) {
      errorMessage += "Passwords do not match.\n";
    }

    if (!validateMobileNumber(mobileNumber)) {
      errorMessage +=
        "Invalid mobile number. Mobile number should contain exactly 10 digits.\n";
    }

    // Display Error Messages
    if (errorMessage) {
      displayErrorMessage(errorMessage);
    } else {
      alert("Registration successful!");
      // You can add code here to submit the form data to the server.
    }
  });

function displayErrorMessage(message) {
  const errorMessagesDiv = document.getElementById("errorMessages");
  errorMessagesDiv.innerText = message;
}

function clearErrorMessages() {
  const errorMessagesDiv = document.getElementById("errorMessages");
  errorMessagesDiv.innerText = "";
}
