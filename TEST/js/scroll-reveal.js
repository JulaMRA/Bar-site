document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".cocktails .container div");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        entry.target.classList.remove("hidden");
      } else {
        entry.target.classList.remove("show");
        entry.target.classList.add("hidden");
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.classList.add("hidden"); // start ukryty
    observer.observe(el);
  });
});
