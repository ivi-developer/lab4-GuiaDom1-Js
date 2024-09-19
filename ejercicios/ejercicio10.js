//Crea una galería de imágenes. Al hacer clic en una imagen, muestra su descripción en un elemento `<p>`.
export const punto10 = imgWrapperId => {
    const wrapper = document.getElementById(imgWrapperId)
    wrapper.childNodes.forEach(children => children.addEventListener('click', () => {
        const text = e.alt
        const p = document.createElement('p')
        p.textContent = text

    }))
}