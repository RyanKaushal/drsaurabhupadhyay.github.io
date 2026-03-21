document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     About Modal (Read More)
  =============================== */
  function openModal() {
    const modal = document.getElementById("aboutModal");
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const modal = document.getElementById("aboutModal");
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  }

  // Make functions global (for onclick)
  window.openModal = openModal;
  window.closeModal = closeModal;

  // Close on ESC
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      closeModal();

      // also close service modal if open
      document.querySelectorAll(".modal.show").forEach(m => m.remove());
      document.body.style.overflow = "auto";
    }
  });

  // Close on outside click
  window.addEventListener("click", function(event) {
    const modal = document.getElementById("aboutModal");
    if (event.target === modal) {
      closeModal();
    }
  });

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
     Mobile Navbar Toggle
  =============================== */
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    navLinks.classList.remove("active");

    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  /* ===============================
     Services → Modal Article
  =============================== */
  document.querySelectorAll(".service-item").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      const articleDiv = item.querySelector(".service-article");
      if (!articleDiv) return;

      let articleHTML = articleDiv.innerHTML;

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = articleHTML;

      const paragraphs = tempDiv.querySelectorAll("p");
      if (paragraphs.length > 0) {
        paragraphs[paragraphs.length - 1].remove();
      }

      articleHTML = tempDiv.innerHTML;

      const modal = document.createElement("div");
      modal.className = "modal show"; // ✅ FIXED

      const modalContent = document.createElement("div");
      modalContent.className = "modal-content";

      const closeBtn = document.createElement("button");
      closeBtn.className = "close-btn";
      closeBtn.innerHTML = "&times;";
      closeBtn.addEventListener("click", () => {
        modal.remove();
        document.body.style.overflow = "auto"; // ✅ FIX
      });

      const iframe = document.createElement("iframe");
      iframe.className = "modal-iframe";

      iframe.srcdoc = `
        <html>
          <body style="font-family: Arial; padding: 1rem; line-height: 1.5;">
            ${articleHTML}
            <button onclick="window.open('https://wa.me/917017784451','_blank')" 
              style="margin-top:1rem;padding:10px;background:#2dbf6c;color:#fff;border:none;border-radius:6px;">
              Contact on WhatsApp
            </button>
          </body>
        </html>
      `;

      modalContent.appendChild(closeBtn);
      modalContent.appendChild(iframe);
      modal.appendChild(modalContent);
      document.body.appendChild(modal);

      // Lock background scroll
      document.body.style.overflow = "hidden";

      // Close on outside click
      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.remove();
          document.body.style.overflow = "auto"; // ✅ FIX
        }
      });
    });
  });

});
