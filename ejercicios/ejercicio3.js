//Elimina un elemento `<ul>` con el id "miLista" de la página.
export const eliminarElementoPorId = id => {
    const e = document.getElementById(id)
    e.remove()
}