/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    menuToggle.textContent =
      navLinks.classList.contains("show")
        ? "✕"
        : "☰";

  });


  document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("show");

      menuToggle.textContent = "☰";

    });

  });

}


/* =========================
   TOAST
========================= */

function showToast(message) {

  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toastMessage");

  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}


/* =========================
   ADD TO ORDER
========================= */

const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach(button => {

  button.addEventListener("click", () => {

    const item = button.dataset.item;

    showToast(`${item} added to your order!`);

    const originalText = button.textContent;

    button.textContent = "✓ Added";

    setTimeout(() => {

      button.textContent = originalText;

    }, 1500);

  });

});


/* =========================
   MENU FILTER
========================= */

const filterButtons =
  document.querySelectorAll(".filter-btn");

const menuItems =
  document.querySelectorAll(".menu-item");


filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.dataset.filter;

    menuItems.forEach(item => {

      const category = item.dataset.category;

      if (filter === "all" || category === filter) {

        item.style.display = "grid";

      } else {

        item.style.display = "none";

      }

    });

  });

});


/* =========================
   BOOKING FORM
========================= */

const bookingForm =
  document.getElementById("bookingForm");


if (bookingForm) {

  const dateInput =
    document.getElementById("date");

  const today =
    new Date().toISOString().split("T")[0];

  if (dateInput) {
    dateInput.min = today;
  }


  bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
      document.getElementById("name").value.trim();

    const phone =
      document.getElementById("phone").value.trim();

    const date =
      document.getElementById("date").value;

    const time =
      document.getElementById("time").value;

    const guests =
      document.getElementById("guests").value;


    const nameError =
      document.getElementById("nameError");

    const phoneError =
      document.getElementById("phoneError");

    const dateError =
      document.getElementById("dateError");

    const timeError =
      document.getElementById("timeError");

    const guestsError =
      document.getElementById("guestsError");

    const success =
      document.getElementById("formSuccess");


    nameError.textContent = "";
    phoneError.textContent = "";
    dateError.textContent = "";
    timeError.textContent = "";
    guestsError.textContent = "";
    success.textContent = "";


    let valid = true;


    /* NAME */

    if (name.length < 3) {

      nameError.textContent =
        "Please enter your full name.";

      valid = false;

    }


    /* PHONE */

    const phonePattern =
      /^[6-9]\d{9}$/;

    if (!phonePattern.test(phone)) {

      phoneError.textContent =
        "Enter a valid 10-digit Indian phone number.";

      valid = false;

    }


    /* DATE */

    if (!date) {

      dateError.textContent =
        "Please select a date.";

      valid = false;

    }


    /* TIME */

    if (!time) {

      timeError.textContent =
        "Please select a time.";

      valid = false;

    }


    /* GUESTS */

    if (!guests) {

      guestsError.textContent =
        "Please select number of guests.";

      valid = false;

    }


    /* SUCCESS */

    if (valid) {

      success.textContent =
        `✓ Thank you ${name}! Your table request has been submitted successfully.`;

      bookingForm.reset();

      dateInput.min = today;

    }

  });

}
