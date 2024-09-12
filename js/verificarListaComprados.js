export function verificarComprados(compradosUl, compradosDiv) {
    // Verifica se a ul de comprados tem itens
    console.log("verificando comprados");
    if (compradosUl.childElementCount === 0) {
        compradosDiv.style.display = "none"; // Esconder o div se a ul estiver vazia
    } else {
        compradosDiv.style.display = "block"; // Mostrar o div se a ul tiver itens
    }
}
