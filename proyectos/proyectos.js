// PROYECTOS
export function crearProyectos() {
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
      nombre: "Contador",
      desc: "Es un contador en el cual se cuenta las x, y.",
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