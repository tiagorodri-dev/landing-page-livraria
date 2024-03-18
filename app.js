let timeRotation = 2000;
let currentImageIndex = 0;
let images = document.querySelectorAll("#slider img");
let max = images.length;

function proximaImagem() {

    images[currentImageIndex].classList.remove("selected")
    currentImageIndex++

    if(currentImageIndex >= max) {
        currentImageIndex = 0
    }

    images[currentImageIndex].classList.add("selected")
}

function iniciar() {
    setInterval(() => {
        // chamando função de troca de imagens
        proximaImagem()
    }, timeRotation)
}

// quando o documento for totalmente carregado, será chamado a função start
window.addEventListener("load", iniciar);