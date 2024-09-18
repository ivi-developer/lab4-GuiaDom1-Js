//Implementa un contador que incremente en 1 cada vez que se haga clic en un botón
export const punto9 = butonId => {
    let i = 0
    const boton = document.getElementById(butonId)
    boton.addEventListener('click', () => {
        i++
        console.log(i)
    })
}