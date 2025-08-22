// FOOTER
export function crearFooter() {
  const footer = document.createElement("footer");

  footer.innerHTML = `
    <p>📧 Email: <a href="mailto:tucorreo@gmail.com">macalderas@scl.edu.gt</a></p>
    <p>🔗 GitHub: <a href="https://github.com/Macalderas" target="_blank">Macalderas</a></p>
    <p>📞 Tel: +502 5233 5032</p>
  `;

  return footer;
}