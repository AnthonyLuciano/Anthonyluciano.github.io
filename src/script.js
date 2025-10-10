// Seleciona seções, projetos e footer
const sections = document.querySelectorAll("section");
const projects = document.querySelectorAll(".project");
const footer = document.querySelector("footer");

// Observador para adicionar classe 'visible' quando entra na tela
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

// Observa os elementos
sections.forEach((section) => observer.observe(section));
projects.forEach((project) => observer.observe(project));
observer.observe(footer);

// ===========================
// DARK MODE
// ===========================
const toggleButton = document.getElementById("lightModeToggle");

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
}
