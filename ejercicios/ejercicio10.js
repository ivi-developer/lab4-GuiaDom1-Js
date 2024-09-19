//Crea una galería de imágenes. Al hacer clic en una imagen, muestra su descripción en un elemento `<p>`.
export const punto10 = imgWrapperId => {
    const wrapper = document.getElementById(imgWrapperId)
    const p = document.createElement('p')//el dentro del event listener creaba uno nuevo entonces tiraba un erro al eliminar
    wrapper.childNodes.forEach(children => children.addEventListener('click', () => {
        if (!children.querySelector('p')) {
            p.textContent = children.querySelector('img').alt
            children.appendChild(p)
        }
        else {
            children.removeChild(p)
        }
    }))
}