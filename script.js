// Fade-in on load
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  initNatureBackground();
});

// Also trigger on DOMContentLoaded so background loads instantly
document.addEventListener("DOMContentLoaded", () => {
  initNatureBackground();
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

// Nature Floating Background Generator (Floating leaves, spores & forest glow)
function initNatureBackground() {
  if (document.getElementById("nature-bg")) return;

  const bgContainer = document.createElement("div");
  bgContainer.id = "nature-bg";

  // Add ambient glowing forest light orbs
  const orb1 = document.createElement("div");
  orb1.className = "bg-glow-orb bg-glow-orb-1";

  const orb2 = document.createElement("div");
  orb2.className = "bg-glow-orb bg-glow-orb-2";

  const orb3 = document.createElement("div");
  orb3.className = "bg-glow-orb bg-glow-orb-3";

  bgContainer.appendChild(orb1);
  bgContainer.appendChild(orb2);
  bgContainer.appendChild(orb3);

  // Floating leaf & organic spore symbols
  const symbols = ["🍃", "🌿", "🌱", "☘️", "✨", "🍃", "🍀", "🌸", "🍁"];
  const particleCount = 100; // Higher density for lush natural feel

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "floating-particle";
    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    // Randomize initial positions, sizes & animation timings for organic realism
    const leftPos = Math.random() * 98;
    const animDuration = 12 + Math.random() * 20; // 12s to 32s
    // Negative delay so particles are pre-distributed across the full screen height on load
    const animDelay = -(Math.random() * animDuration); 
    const fontSize = 0.7 + Math.random() * 0.85; // 0.7rem to 1.55rem

    particle.style.left = `${leftPos}%`;
    particle.style.animationDuration = `${animDuration}s`;
    particle.style.animationDelay = `${animDelay}s`;
    particle.style.fontSize = `${fontSize}rem`;

    bgContainer.appendChild(particle);
  }

  document.body.prepend(bgContainer);
}

// Simple contact form status (EmailJS can be plugged in later)
const form = document.getElementById("contact-form");
if (form) {
  const statusEl = document.getElementById("form-status");

  form.addEventListener("submit", e => {
    e.preventDefault();

    if (statusEl) {
      statusEl.textContent = "Message sent (demo). You can now wire this to EmailJS.";
    }

    form.reset();
  });
}
