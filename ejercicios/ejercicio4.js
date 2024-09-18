//Crea un botón y, al hacer clic en él, muestra un mensaje de alerta que diga "¡Hiciste clic!".
export const msjButton = id => {
    const button = document.getElementById(id)
    button.addEventListener('click', () => alert('Hiciste click!'))
}