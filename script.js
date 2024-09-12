//importando de outro arquivo
import { adicionarItem } from "./js/adicionarItem.js";
import { verificarComprados } from "./js/verificarListaComprados.js";

const salvarItem = document.querySelector(".topo-btn");
salvarItem.addEventListener("click", adicionarItem);

const compradosUl = document.querySelector(".lista-comprados");
const compradosDiv = document.querySelector(".lista-de-comprados");
verificarComprados(compradosUl, compradosDiv);

