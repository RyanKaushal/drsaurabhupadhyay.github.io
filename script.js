// Existing appointment form validation
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

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});



// ✅ NEW: Service → WhatsApp mapping
const whatsappNumber = "+917017784451"; // replace with clinic number

document.querySelectorAll(".service-item").forEach(item => {
  item.addEventListener("click", () => {
    const issue = item.getAttribute("data-issue");

    const message = `Hello Doctor, I would like to consult regarding ${issue}. Please let me know the available appointment timings.`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  });
});

