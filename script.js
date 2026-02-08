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
   Services → Open Article in Modal Iframe
   =============================== */
  document.querySelectorAll(".service-item").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      // Get the article content from the hidden div
      const articleDiv = item.querySelector(".service-article");
      if (!articleDiv) return; // No article, skip

      const articleHTML = articleDiv.innerHTML; // Get the article's HTML

      // Create modal elements
      const modal = document.createElement("div");
      modal.className = "modal active";

      const modalContent = document.createElement("div");
      modalContent.className = "modal-content";

      const closeBtn = document.createElement("button");
      closeBtn.className = "close-btn";
      closeBtn.innerHTML = "&times;"; // X symbol
      closeBtn.addEventListener("click", () => {
        modal.remove(); // Close modal
      });

      const iframe = document.createElement("iframe");
      iframe.className = "modal-iframe";
      iframe.srcdoc = `<html><head><style>body { font-family: Arial, sans-serif; padding: 1rem; line-height: 1.5; color: #333; } a { color: #2c7be5; }</style></head><body>${articleHTML}</body></html>`; // Load article into iframe
//       const whatsappDiv = document.createElement("div");
//     whatsappDiv.className = "modal-whatsapp";

//     const whatsappBtn = document.createElement("button");
//     whatsappBtn.className = "btn secondary";
//     whatsappBtn.textContent = "Contact on WhatsApp";
//     whatsappBtn.addEventListener("click", () => {
//       window.open(`https://wa.me/917017784451?text=Hello%20Doctor%2C%20I%20would%20like%20to%20consult%20regarding%20${item.getAttribute('data-issue')}.%20Please%20let%20me%20know%20the%20available%20appointment%20timings.`, "_blank");
//       setTimeout(() => modal.remove(), 500); // Delay to allow link to open, then close
//     });

//     whatsappDiv.appendChild(whatsappBtn);

//     // Assemble modal
//     modalContent.appendChild(closeBtn);
//     modalContent.appendChild(iframe);
//     modalContent.appendChild(whatsappDiv);
//     modal.appendChild(modalContent);
//     document.body.appendChild(modal);

//     // Close modal on background click
//     modal.addEventListener("click", (event) => {
//       if (event.target === modal) {
//         modal.remove();
//       }
//     });
//   });
// });

      const whatsappDiv = document.createElement("div");
      whatsappDiv.className = "modal-whatsapp";
      // whatsappDiv.innerHTML = `<a href="https://wa.me/917017784451?text=Hello%20Doctor%2C%20I%20would%20like%20to%20consult%20regarding%20${item.getAttribute('data-issue')}.%20Please%20let%20me%20know%20the%20available%20appointment%20timings." target="_blank">Contact on WhatsApp</a>`;

      // Add event to close modal when WhatsApp is clicked
      whatsappDiv.querySelector("a").addEventListener("click", () => {
        setTimeout(() => modal.remove(), 500); // Delay to allow link to open, then close
      });

      // Assemble modal
      modalContent.appendChild(closeBtn);
      modalContent.appendChild(iframe);
      modalContent.appendChild(whatsappDiv);
      modal.appendChild(modalContent);
      document.body.appendChild(modal);

      // Close modal on background click
      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.remove();
        }
      });
    });
  });

});


