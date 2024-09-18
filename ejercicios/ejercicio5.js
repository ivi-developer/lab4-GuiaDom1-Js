//Agrega un evento que cambie el color de fondo de un elemento `<div>` al pasar el mouse sobre él y lo restaure cuando se retire el mouse
export const colorEnHover = id => {
    const e = document.getElementById(id)
    e.addEventListener('mouseover', () => e.classList.add('color-en-hover'))
    e.addEventListener('mouseout', () => e.classList.remove('color-en-hover'))
}