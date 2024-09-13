const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

export function verificarListaVazia(lista){
    //se tem elementos filhos do tipo li
    if(lista.querySelectorAll("li").length === 0){
        //aparece mensagem de lista vazia
        mensagemListaVazia.style.display = "block";
    }else{
        //esconde mensagem de lista vazia
        mensagemListaVazia.style.display = "none";
    }
    
}