const item = document.querySelector(".topo-input");
const listaCompras = document.querySelector(".lista-de-compras");
const listaComprados = document.querySelector(".lista-de-comprados")
let contador = 0;

export function adicionarItem(evento){
    //não recarregar a página
    evento.preventDefault();

    //divisões
    const listaItem = CriarElemento('li', 'lista-item');
    const listaItemConteudo =CriarElemento('div', 'lista-item-conteudo');
    
    //checkbox
    const listaCheckbox = CriarElemento('input', 'lista-checkbox')
    listaCheckbox.type = "checkbox";
    listaCheckbox.id = "checkbox-"+ contador++;
    const listaCheckboxCustomizado = CriarElemento('div', 'lista-checkbox-customizado');

    const labelCheckbox = document.createElement("label");
    labelCheckbox.setAttribute("for", listaCheckbox.id);

    //parte escrita
    const listaNomeItem = CriarElemento('div', 'lista-nome-item');
    const itemEscrito = document.createElement("p");
    itemEscrito.innerText = item.value; 
    const itemData = document.createElement('p');
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", {weekday: "long"})}`;
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute : "numeric" })}`;

    //btns
    const divBtn = document.createElement("div");
    const btnEditar = CriarBtn('editar');
    const btnExcluir = CriarBtn('excluir');
   
    //adicionando ao html
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
    listaCompras.appendChild(listaItem);


    //TROCA DE LISTA - CHECKBOX
    labelCheckbox.addEventListener('click', function (){
        if(listaCheckbox.checked){
            listaCheckboxCustomizado.classList.add('checked');
            itemEscrito.style.textDecoration = 'line-through';
            listaComprados.appendChild(listaItem);
        }
        else{
            listaCheckboxCustomizado.classList.remove('checked');
            itemEscrito.style.textDecoration = 'none';
            listaCompras.appendChild(listaItem);
        }
    });
}

export function CriarElemento(tagHTML, classe){
    const varElemento = document.createElement(`${tagHTML}`);
    varElemento.classList.add(`${classe}`);
    return varElemento;
}

export function CriarBtn(nome){
    const btn = document.createElement("button");
    btn.classList.add("lista-btn");
    const imagem = document.createElement("img");
    imagem.src = `img/icon-${nome}.png`;
    imagem.alt = `${nome}`;
    btn.appendChild(imagem);
    return btn;
}
