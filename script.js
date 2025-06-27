// Language switching
function setLanguage(lang) {
  document.body.setAttribute("data-lang", lang);

  // Update active button
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  document
    .querySelector(`.lang-btn[onclick="setLanguage('${lang}')"]`)
    .classList.add("active");

  // Update textarea placeholder for contact section
  const messageContactTextarea = document.getElementById("message");
  if (messageContactTextarea) {
    // Check if element exists
    if (lang === "en") {
      messageContactTextarea.placeholder =
        "Tell us about your scheduling needs...";
    } else {
      messageContactTextarea.placeholder =
        "Parlez-nous de vos besoins de planification...";
    }
  }

  // Update textarea placeholder for demo modal
  const messageModalTextarea = document.getElementById("message-modal");
  if (messageModalTextarea) {
    // Check if element exists
    if (lang === "en") {
      messageModalTextarea.placeholder =
        "Tell us about your specific scheduling challenges or needs...";
    } else {
      messageModalTextarea.placeholder =
        "Parlez-nous de vos défis ou besoins spécifiques en matière de planification...";
    }
  }
}


// Smooth scrolling for anchor links (if any remaining, though buttons now open modal)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Animate on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
    }
  });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });
});

// Add subtle parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const header = document.querySelector("header");
  if (header) {
    header.style.transform = `translateY(${scrolled * 0.2}px)`;
  }
});

// Set initial textarea placeholder on page load
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(document.body.getAttribute("data-lang") || "en");
});
