import { verificarComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaCompras = document.querySelector(".lista-de-compras");
const compradosUl = document.querySelector(".lista-comprados");
const compradosDiv = document.querySelector(".lista-de-comprados");

export const excluirItem = (elemento) => {
    let confirmacao = confirm("Deseja excluir esse item?");

    if(confirmacao){
        elemento.remove();

        verificarListaVazia(listaCompras);
        verificarComprados(compradosUl, compradosDiv);
    }
}
