//Agrega un botón que oculte o muestre un elemento `<div>` con el id "miDiv"
export const punto11 = divId => {
    const div = document.getElementById(divId)
    const button = document.getElementById('boton-punto11')
    button.addEventListener('click', () => div.classList.contains('hidden') ? div.classList.remove('hidden') : div.classList.add('hidden'))
    //no consegui hacerlo sin un boton(al cambiar el zindex o la visibilty hidden ya no toma los eventos)
}