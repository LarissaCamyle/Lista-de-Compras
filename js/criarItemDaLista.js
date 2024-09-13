import { verificarComprados } from "./verificarListaComprados.js";
import { excluirItem } from "./excluirItem.js";
import { editarItem } from "./editarItem.js";
import { verificarTempo } from "./verificarTempo.js";

const listaComprados = document.querySelector(".lista-comprados");
const listaCompras = document.querySelector(".lista-de-compras");
let contador = 0;

export function criarItemDaLista(item) {
    //CRIA OS ELEMENTOS-----------------------------------------------
    // divisões
    const listaItem = criarElemento('li', 'lista-item');
    const listaItemConteudo = criarElemento('div', 'lista-item-conteudo');
    
    // checkbox
    const listaCheckbox = criarElemento('input', 'lista-checkbox');
    listaCheckbox.type = "checkbox";
    listaCheckbox.id = "checkbox-" + contador++;
    const listaCheckboxCustomizado = criarElemento('div', 'lista-checkbox-customizado');
    const labelCheckbox = document.createElement("label");
    labelCheckbox.setAttribute("for", listaCheckbox.id);

    // parte escrita
    const listaNomeItem = criarElemento('div', 'lista-nome-item');
    const itemEscrito = criarElemento('p', 'nome-item-titulo');
    itemEscrito.innerText = item; 
    const itemData = criarElemento('p', 'item-data-escrito');
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`;

    // botões
    const divBtn = document.createElement("div");
    const btnEditar = criarBtn('editar');
    const btnExcluir = criarBtn('excluir');
   
    //ADICIONANDO AO HTML-------------------------------------------------
    listaItem.appendChild(listaItemConteudo);
    labelCheckbox.appendChild(listaCheckbox);
    labelCheckbox.appendChild(listaCheckboxCustomizado);
    listaNomeItem.appendChild(labelCheckbox);
    listaNomeItem.appendChild(itemEscrito);
    listaItemConteudo.appendChild(listaNomeItem);
    divBtn.appendChild(btnEditar);
    divBtn.appendChild(btnExcluir);
    listaItemConteudo.appendChild(divBtn);
    listaItem.appendChild(itemData);

    // TROCA DE LISTA - CHECKBOX -----------------------------------------
    labelCheckbox.addEventListener('click', function () {
        const compradosUl = document.querySelector(".lista-comprados");
        const compradosDiv = document.querySelector(".lista-de-comprados");
        verificarComprados(compradosUl, compradosDiv);
        //altera a data
        verificarTempo(listaItem);

        if (listaCheckbox.checked) {
            listaCheckboxCustomizado.classList.add('checked');
            itemEscrito.style.textDecoration = 'line-through';
            listaComprados.appendChild(listaItem);
        } else {
            listaCheckboxCustomizado.classList.remove('checked');
            itemEscrito.style.textDecoration = 'none';
            listaCompras.appendChild(listaItem);
        }
        // Atualiza a visibilidade da lista de comprados
        verificarComprados(compradosUl, compradosDiv);
    });


    // REMOVER ITEM ----------------------------------------------------
    btnExcluir.addEventListener("click", function () {
        //função excluir item com oq deseja ser excluido
        excluirItem(listaItem);
    });

    // EDITAR ITEM ----------------------------------------------------
    btnEditar.addEventListener("click", function () {
        //função editar
        editarItem(listaItem);
    });


    return listaItem;
}

export function criarElemento(tagHTML, classe) {
    const varElemento = document.createElement(tagHTML);
    varElemento.classList.add(classe);
    return varElemento;
}

export function criarBtn(nome) {
    const btn = document.createElement("button");
    btn.classList.add("lista-btn");
    const imagem = document.createElement("img");
    imagem.src = `img/icon-${nome}.png`;
    imagem.alt = nome;
    btn.appendChild(imagem);
    return btn;
}
