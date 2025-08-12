export function crearFooter() {
  const footer = document.createElement("footer");

  ["LinkedIn", "GitHub", "Email"].forEach(text => {
    let a = document.createElement("a");
    a.href = "#";
    a.textContent = text;
    footer.appendChild(a);
  });

  const p = document.createElement("p");
  p.textContent = "© 2025 Myno - Todos los derechos reservados";
  footer.appendChild(p);

  return footer;
}
