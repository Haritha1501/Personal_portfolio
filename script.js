// Fade-in on load
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
if (reveals.length) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(el => observer.observe(el));
}

// Simple contact form status (EmailJS can be plugged in later)
const form = document.getElementById("contact-form");
if (form) {
  const statusEl = document.getElementById("form-status");

  form.addEventListener("submit", e => {
    e.preventDefault();

    // For now, just show a fake success message.
    // Later you can replace this with EmailJS send call.
    if (statusEl) {
      statusEl.textContent = "Message sent (demo). You can now wire this to EmailJS.";
    }

    form.reset();
  });
}
