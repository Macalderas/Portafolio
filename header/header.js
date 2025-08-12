export function crearHeader() {
  const header = document.createElement("header");

    const logo = document.createElement("div");
  logo.className = "logo";
  logo.textContent = "Macalderas";

 
  const nav = document.createElement("nav");
  nav.className = "menu";
  const links = [
    { texto: "Inicio", href: "#" },
    { texto: "Sobre mí", href: "#sobre-mi" },
    { texto: "Proyectos", href: "#proyectos" },
    { texto: "Contacto", href: "#contacto" }
  ];
  links.forEach(item => {
    let link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.texto;
    nav.appendChild(link);
  });

  header.appendChild(logo);
  header.appendChild(nav);

  return header;
}