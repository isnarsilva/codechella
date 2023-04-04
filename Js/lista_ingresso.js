const itemIngresso = JSON.parse(localStorage.getItem("cadastro")) || [];

const elementoNome = document.querySelector('.ingresso__card__info__qrcode-texto-titulo');
elementoNome.textContent = itemIngresso.nome;

const elementoIngresso = document.querySelector('.ingresso__card__info__qrcode-texto-informacao-ingresso');
elementoIngresso.textContent = itemIngresso.ingresso;
