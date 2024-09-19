//Crea un menú desplegable (select) con tres opciones. Al seleccionar una opción, muestra un mensaje con el valor seleccionado
export const punto12 = () => {
    const select = document.getElementById('opciones')
    select.addEventListener('change', e => {
        const op = e.target.options[e.target.selectedIndex]
        alert(op.textContent)
    })
}
/* export const createSelect = () => {
    const select = document.createElement('select')
    select.appendChild(defOp())
    select.appendChild(createOp(1))
    select.appendChild(createOp(2))
    select.append(lastOP())
    document.body.appendChild(select)
}
const defOp = () => {
    const defOp = document.createElement('option')
    defOp.value = ''
    defOp.disabled = true
    defOp.selected = true
    defOp.textContent = 'elegi una opcion'
    return defOp
}
const createOp = num => {
    const op1 = document.createElement('option')
    op1.value = `opcion ${num}`
    op1.textContent = `opcion ${num}`
    return op1
}
const lastOP = () => {
    const op = document.createElement('option')
    op.value = 'me reservo'
    op.textContent = 'me reservo'
    return op
} */