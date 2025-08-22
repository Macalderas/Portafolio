
const root = document.getElementById("root");

// HEADER
function crearHeader() {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.textContent = "Portafolio de Mynor Calderas ";

  const p = document.createElement("p");
  p.textContent = "Estudiante apasionado por la programación y la tecnología";

  header.appendChild(h1);
  header.appendChild(p);
  return header;
}

// STACKS
function crearStacks() {
  const section = document.createElement("section");

  const h2 = document.createElement("h2");
  h2.textContent = "Stacks";

  const contenedor = document.createElement("div");
  contenedor.className = "stacks";

  const stacks = ["Java", "Python", "HTML", "CSS", "JavaScript", "SQL"];
  stacks.forEach(stack => {
    const div = document.createElement("div");
    div.className = "stack";
    div.textContent = stack;
    contenedor.appendChild(div);
  });

  section.appendChild(h2);
  section.appendChild(contenedor);
  return section;
}

// PROYECTOS
function crearProyectos() {
  const section = document.createElement("section");

  const h2 = document.createElement("h2");
  h2.textContent = "Proyectos";

  const contenedor = document.createElement("div");
  contenedor.className = "proyectos";

  const proyectos = [
    {
      nombre: "Hamburguesa",
      desc: "Proyecto con HTML, CSS y JavaScript.",
      url: "https://macalderas.github.io/hamburguesa/"
    },
    {
      nombre: "Juego de X, y",
      desc: "Juego interactivo en JS.",
      url: "https://macalderas.github.io/Practica/"
    },
    {
      nombre: "Formulario",
      desc: "Es un formulario hecho con html. css y js .",
      url: "https://macalderas.github.io/qpp-tareas/"
    }
  ];

  proyectos.forEach(proyecto => {
    const card = document.createElement("div");
    card.className = "card";

    const h3 = document.createElement("h3");
    h3.textContent = proyecto.nombre;

    const p = document.createElement("p");
    p.textContent = proyecto.desc;

    const a = document.createElement("a");
    a.href = proyecto.url;
    a.textContent = "Ver en GitHub";
    a.target = "_blank";

    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(a);

    contenedor.appendChild(card);
  });

  section.appendChild(h2);
  section.appendChild(contenedor);
  return section;
}

// FOOTER
function crearFooter() {
  const footer = document.createElement("footer");

  footer.innerHTML = `
    <p>📧 Email: <a href="mailto:tucorreo@gmail.com">macalderas@scl.edu.gt</a></p>
    <p>🔗 GitHub: <a href="https://github.com/Macalderas" target="_blank">Macalderas</a></p>
    <p>📞 Tel: +502 5233 5032</p>
  `;

  return footer;
}

// RENDERIZAR TODO
root.appendChild(crearHeader());
root.appendChild(crearStacks());
root.appendChild(crearProyectos());
root.appendChild(crearFooter());
