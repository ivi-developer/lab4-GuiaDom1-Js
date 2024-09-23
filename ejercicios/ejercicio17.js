import { getRandomInt } from "./randInt.js"
//Crea un juego de "Adivina el número" en el que el programa genera un número aleatorio y el usuario debe adivinarlo
export const punto17 = formId => {
    const form = document.getElementById(formId)
    const button = form.querySelector('button')
    const x = getRandomInt(0, 10)
    const div = form.querySelector('div')
    button.addEventListener('click', () => {
        const input = form.querySelector('input')
        const num = input.value
        input.value = ''
        num == x ? div.textContent = `FELICIDADES ADIVINASTE: el numero era ${x}` : num > x ? div.textContent = 'menos' : div.textContent = 'mas'
    })
}