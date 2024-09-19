//Implementa un reloj digital que muestre la hora actual y se actualice cada segundo
export const punto13 = () => {
    const div = document.createElement('div')
    setInterval(() => actualizarRejoj(div), 1000)
    document.body.appendChild(div)
}
const actualizarRejoj = (div) => {
    const e = new Date()
    div.textContent = `${e.getHours().toString().padStart(2, '0')}:${e.getMinutes().toString().padStart(2, '0')}:${e.getSeconds().toString().padStart(2, '0')}`
}