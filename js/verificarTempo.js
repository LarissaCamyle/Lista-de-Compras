export const verificarTempo = (elemento) => {
    const itemData = elemento.querySelector(".item-data-escrito");

    itemData.textContent = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`;
}
