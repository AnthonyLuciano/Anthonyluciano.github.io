// Polyfill de preload de módulos para navegadores que não suportam ES modules
(function() {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;

  // Pré-carregar links modulepreload existentes
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);

  // Observar novos links modulepreload adicionados dinamicamente
  new MutationObserver(e => {
    for (const t of e)
      if (t.type === "childList")
        for (const s of t.addedNodes)
          if (s.tagName === "LINK" && s.rel === "modulepreload") i(s);
  }).observe(document, { childList: true, subtree: true });

  // Função auxiliar para criar opções de fetch a partir dos atributos do link
  function n(e) {
    const t = {};
    if (e.integrity) t.integrity = e.integrity;
    if (e.referrerPolicy) t.referrerPolicy = e.referrerPolicy;
    if (e.crossOrigin === "use-credentials") t.credentials = "include";
    else if (e.crossOrigin === "anonymous") t.credentials = "omit";
    else t.credentials = "same-origin";
    return t;
  }

  // Função para pré-carregar um módulo
  function i(e) {
    if (e.ep) return; // Já processado
    e.ep = true;
    const t = n(e);
    fetch(e.href, t);
  }
})();

// Fade in do corpo quando a página carrega
window.addEventListener("load", () => {
  document.body.classList.remove("opacity-0");
});

// Intersection Observer para animações de revelação ao rolar
const c = document.querySelectorAll(".reveal");
const l = new IntersectionObserver(o => {
  o.forEach(r => {
    if (r.isIntersecting) {
      r.target.classList.add("opacity-100", "translate-y-0");
    }
  });
}, { threshold: 0.15 });

// Inicializar elementos de revelação
c.forEach(o => {
  o.classList.add("opacity-0", "translate-y-6", "transition-all", "duration-700");
  l.observe(o);
});

// Scroll suave para links de âncora
document.querySelectorAll('a[href^="#"]').forEach(o => {
  o.addEventListener("click", function(r) {
    r.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});
