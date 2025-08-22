export function crearCV() {
  const section = document.createElement("section");
  section.className = "cv";

  const h2 = document.createElement("h2");
  h2.textContent = "Mi CV";

  const p = document.createElement("p");
  p.textContent = "Aquí puedes ver o descargar mi currículum.";

  const contenedor = document.createElement("div");
  contenedor.className = "cv-actions";

  // 🔗 Botón para ver en línea (ejemplo PDF en tu carpeta)
  const verBtn = document.createElement("a");
  verBtn.href = "CV/Currículum Vitae CV -1.pdf"; // 📄 tu archivo debe estar en la misma carpeta
  verBtn.target = "_blank";
  verBtn.textContent = "📖 Ver CV";
  verBtn.className = "btn";

  // 🔗 Botón para descargar
  const descargarBtn = document.createElement("a");
  descargarBtn.href = "CV/Currículum Vitae CV -1.pdf"; 
  descargarBtn.download = "CV/Currículum Vitae CV -1.pdf";
  descargarBtn.textContent = "⬇️ Descargar CV";
  descargarBtn.className = "btn";

  contenedor.appendChild(verBtn);
  contenedor.appendChild(descargarBtn);

  section.appendChild(h2);
  section.appendChild(p);
  section.appendChild(contenedor);
  return section;
}
