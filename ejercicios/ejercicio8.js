//Crea una lista de elementos `<li>`. Al hacer clic en un elemento de la lista, cambia su color de fondo.
export const punto8 = () => {
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const li2 = document.createElement('li')
    li.textContent = 'primer li'
    ul.appendChild(li)
    li2.textContent = 'segundo li'
    ul.appendChild(li2)
    document.body.appendChild(ul)
    ul.childNodes.forEach(e => e.addEventListener('click', () => e.classList.contains('color') ? e.classList.remove('color') : e.classList.add('color')))//se puede iterar atraves de la node list que retorna childNodes
}