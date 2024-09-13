//importando de outro arquivo
import { adicionarItem } from "./js/adicionarItem.js";
import { verificarComprados } from "./js/verificarListaComprados.js";

//quando clicar em salvar item
const salvarItem = document.querySelector(".topo-btn");
salvarItem.addEventListener("click", adicionarItem);

//verificar itens comprados
const compradosUl = document.querySelector(".lista-comprados");
const compradosDiv = document.querySelector(".lista-de-comprados");
verificarComprados(compradosUl, compradosDiv);

