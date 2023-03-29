const perguntas = document.querySelectorAll('.infos__perguntas__container__box__pergunta');

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        const accordionItem = pergunta.parentElement;
        const accordionContent = pergunta.nextElementSibling;

        // pergunta.parentElement.classList.toggle('active');

        accordionItem.classList.toggle("active");
        accordionContent.classList.toggle("active");

        if (accordionItem.classList.contains("active")) {
            accordionContent.style.display = "block";
        } else {
            accordionContent.style.display = "none";
        }

    });
});