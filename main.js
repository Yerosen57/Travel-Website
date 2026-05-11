document.addEventListener("DOMContentLoaded", () => {

  
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const icon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const open = navLinks.classList.contains("open");

    icon.className = open ? "ri-close-line" : "ri-menu-3-line";
  });

  document.querySelectorAll(".nav__links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      icon.className = "ri-menu-3-line";
    });
  });

  
  const form = document.querySelector(".book-form form");
  const button = document.getElementById("book-btn");

  if (form && button) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      button.textContent = "Booked ✔";
      button.style.background = "#22c55e";
      button.style.transform = "scale(1.05)";

      setTimeout(() => {
        form.reset();
        button.textContent = "Book Now";
        button.style.background = "#9b3b6e";
        button.style.transform = "scale(1)";
      }, 3000);
    });
  }

  
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".lightbox .close");

  if (lightbox && lightboxImg && closeBtn) {

    document.querySelectorAll(".gallery-item img").forEach(img => {
      img.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImg.src = img.src;
      });
    });

    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });

  }

});