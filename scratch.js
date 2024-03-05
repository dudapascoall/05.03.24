const posicaoSuperiorInicial = 50,
      posicaoEsquerdaInicial = 50,
      posicaoSuperiorFinal = 500,
      posicaoEsquerdaFinal = 500,
      img = document.getElementById('imgAvatar'),
      styleAvatar = window.getComputedStyle(imgAvatar);

    var posicaoSuperior = 50,
        posicaoEsquerda = 50,
        topAvatar,
        leftAvatar;
        
imgAvatar.style.position = "absolute";
imgAvatar.style.top = posicaoSuperior + "px";
imgAvatar.style.left = posicaoEsquerda + "px";

function getTopStyle(elementToGet) {
    let styleElement = window.getComputedStyle(elementToGet);
    return parseInt(styleElement.getPropertyValue('top').replace("px",''));
}

function getLeftStyle(elementToGet) {
    let styleElement = window.getComputedStyle(elementToGet);
    return parseInt(styleElement.getPropertyValue('left').replace("px",''));
}

function moverParaEsquerda() {
    console.clear();
    leftAvatar = getLeftStyle(imgAvatar);
    if (leftAvatar > posicaoEsquerdaInicial) {
        posicaoEsquerda -= 1;
        imgAvatar.style.left = posicaoEsquerda + "px";
    } else{
        console.error("Ops! Chegou ao limite e nao é possivel mais mover para esqueda. Tente outro botão!");
    }
    console.log("Posição do avatar a esquerda: ", imgAvatar.style.left);
}