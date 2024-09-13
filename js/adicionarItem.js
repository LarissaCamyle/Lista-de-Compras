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

    //se estiver vazio o input para a execucao
    if (item.value === "" || item.value.trim() === ""){
        alert('Digite um item!');
        item.value = "";
        return;
    }

    //cria o item da lista
    const listaItem = criarItemDaLista(item.value);
    listaCompras.appendChild(listaItem);
    //limpa o input
    item.value = "";

    //adiciona ao html
    verificarListaVazia(listaCompras);

    //verifica lista de comprados
    verificarComprados(compradosUl, compradosDiv);


}
