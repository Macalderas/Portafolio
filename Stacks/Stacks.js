export function crearStacks() {
  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  h2.textContent = "Stacks";

  const contenedor = document.createElement("div");
  contenedor.className = "stacks";

  const stacks = [
    {
      nombre: "Java",
      clase: "java",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"><path d="M12 0c-1.5 1.7-2.4 3.3-2.8 5 0 .4.2.7.6.9 3-2.5 4.2-5.6 2.2-5.9zM12.1 8c-3.3.3-5.3 2-4.9 3.8.2.8 1.1 1.5 2.6 2 .6.2.9.3 1 .6.1.2.1.4-.2.7-2.4 2.3-8.6-1.5-5.9-6.6 1.3-2.5 5-3.9 9.3-3.3 1.5.2 2.3.6 2.4 1.1.2.6-.3 1.3-1.3 1.7-.6.2-1.4.3-2.1.3z"/></svg>`
    },
    {
      nombre: "Python",
      clase: "python",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"><path d="M12 0c-4.8 0-8 1.9-8 4.7V9h8V6h8v10H4v3.3C4 22.1 7.2 24 12 24s8-1.9 8-4.7V4.7C20 1.9 16.8 0 12 0z"/></svg>`
    },
    {
      nombre: "HTML",
      clase: "html",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"><path d="M1.5 0l2 22 8.5 2 8.5-2 2-22H1.5zm16.3 6.9l-.3 3.1h-9.1l.3 3h8.4l-.5 5-5.2 1.4-5.2-1.4-.3-3h2.6l.1 1.6 3 0 .1-1.6h5.6l.7-8.1H6.1l-.2-2.6h11.9z"/></svg>`
    },
    {
      nombre: "CSS",
      clase: "css",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"><path d="M1.5 0l2 22 8.5 2 8.5-2 2-22H1.5zm16.5 5.6l-.2 2.2H8.8l.2 2.2h8.8l-.4 4.7-5.4 1.5-5.4-1.5-.2-2.4h2.5l.1 1.2 3 .8 3-.8.2-2.4H6.9L6.4 5.6h11.6z"/></svg>`
    },
    {
      nombre: "JavaScript",
      clase: "javascript",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 24 24"><path d="M1.5 0h21v24l-10.5 3-10.5-3v-24zm11.5 20.2l3.2-.9.5-5.9h-4.6v-3.3h8.2l-.9 9.8-6.4 1.8v-1.5zm-1.1 1.5l-6.1-1.8-.4-4.4h3.2l.2 2.2 3.1.9v3.1z"/></svg>`
    },
    {
      nombre: "SQL",
      clase: "sql",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"><path d="M12 2c-5.5 0-10 1.8-10 4s4.5 4 10 4 10-1.8 10-4-4.5-4-10-4zm-9 6.6V12c0 2.2 4.5 4 10 4s10-1.8 10-4V8.6c-1.9 1.5-5.5 2.4-10 2.4s-8.1-.9-10-2.4zm0 6.6V20c0 2.2 4.5 4 10 4s10-1.8 10-4v-4.8c-1.9 1.5-5.5 2.4-10 2.4s-8.1-.9-10-2.4z"/></svg>`
    }
  ];

  stacks.forEach(stack => {
    const div = document.createElement("div");
    div.className = `stack ${stack.clase}`;
    div.innerHTML = `${stack.icon} ${stack.nombre}`;
    contenedor.appendChild(div);
  });

  section.appendChild(h2);
  section.appendChild(contenedor);
  return section;
}

