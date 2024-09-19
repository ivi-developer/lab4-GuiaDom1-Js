//Crea un formulario con un campo de texto y un botón. Al hacer clic en el botón, muestra el valor del campo de texto en un elemento `<p>`
export const punto6 = (inputId, buttonId, formId) => {
    const form = document.getElementById(formId)
    const boton = document.getElementById(buttonId)
    const input = document.getElementById(inputId)
    const p = document.createElement('p')
    boton.addEventListener('click', () => {
        p.textContent = input.value
        form.appendChild(p)
        input.value = ""
    })
}