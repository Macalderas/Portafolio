 import { crearHeader } from "./header/header.js";
 import { crearFooter } from "./footer/footer.js";
 const root = document.getElementById("root");

function crearMain() {
  const main = document.createElement("main");

  // Hero
  const hero = document.createElement("section");
  hero.className = "hero";
  const img = document.createElement("img");
  img.src = "img/imagen1.jpg"; 
  img.alt = "Imagen principal";
  hero.appendChild(img);

  // Contenido
  const contenido = document.createElement("section");
  contenido.className = "contenido";

  // Columna izquierda
  const izquierda = document.createElement("div");
  izquierda.className = "columna izquierda";
  const imgPersona = document.createElement("img");
  imgPersona.src = "img/mclovin.jpg";
  imgPersona.alt = "Foto de Mynor";

  const redes = document.createElement("div");
  redes.className = "sociales";
  ["📘", "📷", "🐦"].forEach(icon => {
    let a = document.createElement("a");
    a.href = "#";
    a.textContent = icon;
    redes.appendChild(a);
  });


  const blog = document.createElement("p");
  blog.textContent = "Soy Mynor Calderas, estudiante de computación y desarrollador web en formación. Aquí comparto mis proyectos y aprendizajes.";

  izquierda.appendChild(imgPersona);
  izquierda.appendChild(redes);
  izquierda.appendChild(blog);

  // Columna centro
  const centro = document.createElement("div");
  centro.className = "columna centro";
  const h2 = document.createElement("h2");
  h2.textContent = "Sobre mí";

  const p = document.createElement("p");
  p.textContent = "Soy apasionado por la tecnología, especialmente el desarrollo web y la creación de aplicaciones interactivas. Me gusta aprender cosas nuevas, resolver problemas y compartir lo que sé con los demás.";

  const btnProyectos = document.createElement("button");
  btnProyectos.textContent = "Ver mis proyectos";
  btnProyectos.onclick = () => {
    location.href = "#proyectos";
  };

  centro.appendChild(h2);
  centro.appendChild(p);
  centro.appendChild(btnProyectos);

  // Columna derecha
  const derecha = document.createElement("div");
  derecha.className = "columna derecha";
  const img2 = document.createElement("img");
  img2.src = "img/Ronaldo.jpg";
  img2.alt = "Imagen de proyectos";
  derecha.appendChild(img2);

  contenido.appendChild(izquierda);
  contenido.appendChild(centro);
  contenido.appendChild(derecha);

  main.appendChild(hero);
  main.appendChild(contenido);

  return main;
}

function cargarSitio() {
  root.appendChild(crearHeader());
  root.appendChild(crearMain());
  root.appendChild(crearFooter());
}

cargarSitio(); 
