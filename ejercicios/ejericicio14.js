// Crea una tabla con filas y columnas. Al hacer clic en una celda, cambia su contenido.
export const punto14 = tablaId => {
    const tabla = document.getElementById(tablaId)
    const tds = tabla.querySelectorAll('td')//buena funcion querySelectorAll para ahorrar bucles de seleccion o childnodes ya que podes espcificar la etiqueta
    tds.forEach(td => td.addEventListener('click', () => td.textContent = 'que clickeas'))
}