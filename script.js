/* =====================================================
   MENU MOBILE
===================================================== */

const menuMobile = document.getElementById("menuMobile");
const nav = document.getElementById("nav");

menuMobile.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* Fecha o menu quando clicar em um link */

const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* =====================================================
   BOTÃO VOLTAR AO TOPO
===================================================== */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/* =====================================================
   FORMULÁRIO
===================================================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome =
        document.getElementById("nome").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const mensagem =
        document.getElementById("mensagem").value.trim();


    if (!nome || !email || !mensagem) {

        formMessage.textContent =
            "Preencha todos os campos.";

        return;

    }


    formMessage.textContent =
        `Obrigado, ${nome}! Sua mensagem foi registrada.`;

    contactForm.reset();

});


/* =====================================================
   BOTÕES DAS MÚSICAS
===================================================== */

const songs =
    document.querySelectorAll(".song");


songs.forEach(song => {

    song.addEventListener("click", () => {

        const title =
            song.querySelector("strong").textContent;

        /*
         * O botão é apenas visual.
         * Para tocar músicas reais, substitua esta
         * função por links oficiais do Spotify,
         * YouTube ou outra plataforma.
         */

        alert(
            `Você selecionou "${title}".\n\n` +
            `Adicione aqui o link oficial da música.`
        );

    });

});


/* =====================================================
   ANIMAÇÃO DE ENTRADA
===================================================== */

const elements =
    document.querySelectorAll(
        ".timeline-item, .album, .curiosity, .song"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


elements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});


/* =====================================================
   ANO AUTOMÁTICO NO COPYRIGHT
===================================================== */

const copyright =
    document.querySelector(".copyright p");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Blog Henrique & Juliano.
        Projeto de fã, sem vínculo oficial com a dupla.`;

}
