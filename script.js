document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     Appointment Form Validation
     =============================== */
  const appointmentForm = document.getElementById("appointmentForm");

  if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (e) {
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
  }

  /* ===============================
     Mobile Navbar Toggle (FIXED)
     =============================== */
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {

    // 🔑 FORCE MENU CLOSED ON LOAD
    navLinks.classList.remove("active");

    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });

    // Optional: close menu when link is clicked (recommended)
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  /* ===============================
     Services → WhatsApp Redirect
     =============================== */
  // const whatsappNumber = "917017784451"; // no + for wa.me

  // document.querySelectorAll(".service-item").forEach(item => {
  //   item.addEventListener("click", () => {
  //     const issue = item.getAttribute("data-issue");

  //     const message = `Hello Doctor, I would like to consult regarding ${issue}. Please let me know the available appointment timings.`;

  //     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  //     window.open(whatsappURL, "_blank");
  //   });
  // });

  /* ===============================
   Services → Expand Article (Accordion Style)
   =============================== */
document.querySelectorAll(".service-item").forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent any default behavior

    // Close all other expanded items (accordion: only one open at a time)
    document.querySelectorAll(".service-item.expanded").forEach(expandedItem => {
      if (expandedItem !== item) {
        expandedItem.classList.remove("expanded");
      }
    });

    // Toggle the clicked item
    item.classList.toggle("expanded");
  });
});

});

