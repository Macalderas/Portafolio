// HEADER
export function crearHeader() {
  const header = document.createElement("header");

  const h1 = document.createElement("h1");
  h1.textContent = "Portafolio de Mynor Calderas";

  const p = document.createElement("p");
  p.textContent = "Estudiante apasionado por la programación y la tecnología";

  // Botón Dark Mode
  const btn = document.createElement("button");
  btn.id = "theme-toggle";
  btn.textContent = "🌙 Dark Mode";
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btn.textContent = document.body.classList.contains("dark")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });

  header.appendChild(h1);
  header.appendChild(p);
  header.appendChild(btn);

  return header;
}