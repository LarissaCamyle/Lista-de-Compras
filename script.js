//importando de outro arquivo
import { adicionarItem } from "./js/adicionarItem.js";

const salvarItem = document.querySelector(".topo-btn");

salvarItem.addEventListener("click", adicionarItem);