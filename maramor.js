const img1 = document.getElementById('produto1')
const img2 = document.getElementById('produto2')
const img3 = document.getElementById('produto3')
const mensage = document.querySelector('button',)

function produto1() {
    img1.src = './fotos/javascrip.jpeg'
}

function produtoretorna() {
    img1.src = './fotos/WhatsApp Image 2023-10-04 at 15.02.58.jpeg'
}

function produto2() {
    img2.src = './fotos/large.jpg'
}

function produto2retorna() {
    img2.src = './fotos/WhatsApp Image 2023-10-04 at 15.02.59.jpeg'
}

function produto3() {
    img3.src = './fotos/javascrip22.jpeg'
}

function produto3retorna() {
    img3.src = './fotos/WhatsApp Image 2023-10-04 at 15.03.02.jpeg'
}

function abriralerta() {
    swal("Adicionado ao carrinho.")
}


img1.addEventListener('mouseover', produto1)
img1.addEventListener('mouseleave', produtoretorna)
img2.addEventListener('mouseover', produto2)
img2.addEventListener('mouseleave', produto2retorna)
img3.addEventListener('mouseover', produto3)
img3.addEventListener('mouseleave', produto3retorna)