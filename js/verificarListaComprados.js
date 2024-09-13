export function verificarComprados(compradosUl, compradosDiv) {
    if (compradosUl.childElementCount === 0) {
        // Esconder o div se a ul estiver vazia
        compradosDiv.style.display = "none"; 
    } else {
        // Mostrar o div se a ul tiver itens
        compradosDiv.style.display = "block"; 
    }
}
