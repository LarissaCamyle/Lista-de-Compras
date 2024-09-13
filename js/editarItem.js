import { verificarTempo } from "./verificarTempo.js";

export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item:");

    //verifica se esta vazio ou somente com um espaço
    if (novoItem !== null && novoItem.trim() !== ""){
        const itemTextoAtualizado = elemento.querySelector(".nome-item-titulo")
        //inseri o novo conteudo digitado no prompt
        itemTextoAtualizado.textContent = novoItem;

        //retorno true ou false se o checkbox está selecionado ou nao
        const estavaComprado = elemento.querySelector(".lista-checkbox").checked;
        //manter o item como selecionado
        if(estavaComprado){
            elemento.querySelector(".lista-checkbox").checked;
            elemento.querySelector(".lista-checkbox-customizado").classList.add('checked');
            itemTextoAtualizado.style.textDecoration = 'line-through';
        }

    }

    verificarTempo(elemento);
}