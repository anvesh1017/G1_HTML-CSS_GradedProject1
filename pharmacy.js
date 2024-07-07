var addCartBtns = document.getElementsByClassName("add-to-cart");

for (var i = 0; i < addCartBtns.length; i++) {
  addCartBtns[i].addEventListener("click", function (event) {
    event.preventDefault();
    event.target.classList.add("clicked");
  });
}

document.getElementById("reset-btn").addEventListener("click", function () {
  document.getElementById("patientForm").reset();
});

document
  .getElementById("submit-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Validate required text inputs
    const requiredFields = document.querySelectorAll(
      '#patientForm input[required][type="text"]'
    );
    let allFieldsFilled = true;

    requiredFields.forEach(function (field) {
      if (!field.value.trim()) {
        allFieldsFilled = false;
        field.parentElement.style.borderColor = "red";
      } else {
        field.parentElement.style.borderColor = "";
      }
    });

    if (!allFieldsFilled) {
      alert("Please fill out all required fields.");
      return;
    }

    const requiredDateField = document.getElementById(
      'date'
    );
    let dateFieldsFilled = true;

    if (!requiredDateField.value.trim()) {
      allFieldsFilled = false;
      requiredDateField.style.borderColor = "red";
    } else {
      requiredDateField.style.borderColor = "";
    }

    const requiredTimeField = document.getElementById(
      'time'
    );
    let timeFieldsFilled = true;

    console.log("fields", requiredDateField, requiredTimeField);

    if (!requiredTimeField.value.trim()) {
      timeFieldsFilled = false;
      requiredTimeField.style.borderColor = "red";
    } else {
      requiredTimeField.style.borderColor = "";
    }

    if (!dateFieldsFilled || !timeFieldsFilled) {
      alert("Please fill out all date and time.");
      return;
    }

    // Check if at least one checkbox is checked
    const checkboxes = document.querySelectorAll('input[name="test-type"]');
    let checkedOne = Array.prototype.slice
      .call(checkboxes)
      .some((x) => x.checked);

    if (!checkedOne) {
      alert("Please check at least one test type.");
      return;
    }

    // Validate email format
    const emailField = document.getElementById("email-id");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value.trim())) {
      alert("Please enter a valid email address.");
      emailField.parentElement.style.borderColor = "red";
      return;
    } else {
      emailField.parentElement.style.borderColor = "";
    }

    // Further form submission logic
    alert("Form submitted successfully!");
    document.getElementById("patientForm").submit(); // Submit the form
  });
