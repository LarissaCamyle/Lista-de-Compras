import { verificarComprados } from "./verificarListaComprados.js";


const listaComprados = document.querySelector(".lista-comprados");
const listaCompras = document.querySelector(".lista-de-compras");
let contador = 0;

export function criarItemDaLista(item) {
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
    const itemEscrito = document.createElement("p");
    itemEscrito.innerText = item; 
    const itemData = document.createElement('p');
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`;

    // botões
    const divBtn = document.createElement("div");
    const btnEditar = criarBtn('editar');
    const btnExcluir = criarBtn('excluir');
   
    // adicionando ao HTML
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

    // TROCA DE LISTA - CHECKBOX
    labelCheckbox.addEventListener('click', function () {
        const compradosUl = document.querySelector(".lista-comprados");
        const compradosDiv = document.querySelector(".lista-de-comprados");
        verificarComprados(compradosUl, compradosDiv);

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
