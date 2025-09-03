const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});


// Ambil semua link di navbar
const navLinks = document.querySelectorAll("nav a");

// Ambil semua section
const sections = document.querySelectorAll("section");

// Tampilkan hanya section yang sesuai id
function showSection(id) {
  sections.forEach(section => section.classList.remove("active"));
  const target = document.querySelector(id);
  if (target) target.classList.add("active");
}

// Set link navbar yang aktif
function setActiveLink(id) {
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    link.classList.toggle("active", href === id);
  });
}

// Tampilkan sesuai hash (fallback ke #home)
function navigateToHash(hash) {
  const targetHash = (hash && document.querySelector(hash)) ? hash : "#home";
  showSection(targetHash);
  setActiveLink(targetHash);
}

// Event klik navbar: ubah hash, tampilkan section, set active link
navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href"); // contoh: #katalog
    if (targetId && targetId.startsWith("#")) {
      e.preventDefault();
      // Update URL tanpa reload
      history.pushState(null, "", targetId);
      navigateToHash(targetId);

      // Opsional: jika pakai hamburger menu
      const menu = document.querySelector(".menu");
      if (menu && menu.classList.contains("active")) {
        menu.classList.remove("active");
      }
    }
  });
});

// Saat load pertama
document.addEventListener("DOMContentLoaded", () => {
  navigateToHash(location.hash);
});

// Saat back/forward ditekan
window.addEventListener("hashchange", () => {
  navigateToHash(location.hash);
});
