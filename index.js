
import { crearHeader } from "./header/header.js";
import { crearStacks } from "./Stacks/Stacks.js";
import { crearProyectos } from "./proyectos/proyectos.js";
import { crearFooter } from "./footer/footer.js";
import { crearCV } from "./CV/cv.js";

const root = document.getElementById("root");



root.appendChild(crearHeader());
root.appendChild(crearStacks());
root.appendChild(crearProyectos());
root.appendChild(crearCV()); 
root.appendChild(crearFooter());

