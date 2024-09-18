//Cambia el contenido de un elemento `<p>` con el id "miParrafo" a "Hola, mundo!"
export const modificarParrafoConId = (id, texto) => {
    const p = document.getElementById(id)
    p.textContent = texto
}