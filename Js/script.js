import ehMaiorDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

        const listaRespostas = {
            "nome": e.target.elements["nome"].value,
            "email": e.target.elements["email"].value,
            "ingresso": e.target.elements["ingresso"].value,
            "datanascimento": e.target.elements["datanascimento"].value
        }

        localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

        window.location.href = './ingresso_card.html';
})

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternmismatch',
    'tooshort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "o campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooshort: "Por favor, preencha um e-mail válido."
    },
    ingresso: {
        valueMissing: "O campo de ingresso não pode estar vazio."
    },
    datanascimento: {
        valueMissing: "O campo de data de nascimento não pode estar vazio.",
        customError: "Você deve ser maior que 18 anos para comprar o ingresso",
    }
}

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');

    if (campo.name == "datanascimento" && campo.value != "") {
        ehMaiorDeIdade(campo);
    }

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })

    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}
