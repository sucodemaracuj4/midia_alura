function tocaSom(idElementAudio){
    document.querySelector('idElementAudio').play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');
document.querySelector('.tecla_pom').onclick = tocaSom;
let contador = 0
while(contador <listaDeTeclas.length) {
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    listaDeTeclas[contador].onclick = function();
    {tocaSom(idAudio);
    }
    contador +=
    console.log(contador);
}