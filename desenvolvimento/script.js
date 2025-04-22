document.addEventListener("DOMContentLoaded", function () {
    let botaoEfeito = document.querySelector(".btn");
    let circulo = document.querySelector(".circulo");

    botaoEfeito.addEventListener("mousemove", function (e) {
        let distanciaBotao = this.getBoundingClientRect();
        let x = e.clientX - distanciaBotao.left;
        let y = e.clientY - distanciaBotao.top;

        circulo.style.top = `${y}px`;
        circulo.style.left = `${x}px`;
    });
});