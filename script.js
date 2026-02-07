document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (name === "" || mobile === "" || message === "") {
    status.textContent = "Please fill all required fields.";
    status.style.color = "red";
    return;
  }

  if (!/^[0-9]{10}$/.test(mobile)) {
    status.textContent = "Please enter a valid 10-digit mobile number.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Thank you. Your query has been submitted successfully.";
  status.style.color = "green";
  this.reset();
});
