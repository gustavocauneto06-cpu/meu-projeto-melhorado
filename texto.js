const botaoTopo = document.querySelector("#Voltar");

window.addEventListener("scroll", function() {

    const chegouNoFinal =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

    if (chegouNoFinal) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }

});

botaoTopo.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});