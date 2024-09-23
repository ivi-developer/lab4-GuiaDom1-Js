//Agrega un formulario de contacto que valide que se ingrese un correo electrónico válido antes de enviar el formulario
export const punto15 = formId => {
    const form = document.getElementById(formId)
    const button = form.querySelector('button')
    button.addEventListener('click', () => {
        const input = form.querySelector('input')
        input.value.endsWith('@gmail.com') | input.value.endsWith('@mail.com') ? alert('mail valido') : alert('mail invalido')
        //valido de esta forma porque la guia es de dom no de api
    })
}