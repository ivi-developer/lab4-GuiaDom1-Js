//Crea una galería de imágenes. Al hacer clic en una imagen, muestra su descripción en un elemento `<p>`.
export const punto10 = imgWrapperId => {
    const wrapper = document.getElementById(imgWrapperId)
    wrapper.childNodes.forEach(children => {
        const p = document.createElement('p')//dentro del event listener creaba uno nuevo entonces tiraba un error al eliminar
        children.addEventListener('click', () => {
            if (!children.querySelector('p')) {
                p.textContent = children.querySelector('img').alt
                children.appendChild(p)
            }
            else {
                children.removeChild(p)
            }
        })
    })
}