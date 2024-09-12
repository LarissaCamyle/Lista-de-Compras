import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";
import { verificarComprados } from "./verificarListaComprados.js";

const item = document.querySelector(".topo-input");
const listaCompras = document.querySelector(".lista-de-compras");
const compradosUl = document.querySelector(".lista-comprados");
const compradosDiv = document.querySelector(".lista-de-comprados");

export function adicionarItem(evento){
    //não recarregar a página
    evento.preventDefault();

    const listaItem = criarItemDaLista(item.value);
    listaCompras.appendChild(listaItem);

    verificarListaVazia(listaCompras);
    verificarComprados(compradosUl, compradosDiv);
}
