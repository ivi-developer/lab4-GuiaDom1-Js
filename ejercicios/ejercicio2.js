//Añade una clase "resaltado" a un elemento `<div>` con el id "miDiv"
export const agregarClaseADiv = id => {
    const div = document.getElementById(id)
    div.classList.add('resaltado')
}