const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const body = document.body;

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com um objeto no chão, ao pega-lo você percebe dois botões acenderem, um Verde e um Azul. Qual você aperta?",
        alternativas: [
            {
                texto: "Verde",
                afirmacao: "Você foi parar no Passado. ",
                imagem: "https://cdna.artstation.com/p/assets/images/images/072/801/078/original/avant-aristides-lore-animation-x.gif?1708246218",
                nextQuestionIndex: 1  
            },
            {
                texto: "Azul",
                afirmacao: "Você foi parar no futuro.",
                imagem: "https://i.pinimg.com/originals/bc/87/e5/bc87e5124f8d2cfe810d403adc96ad01.gif",
                nextQuestionIndex: 2 
            }
        ]
    },
    // Question index 1
    {
        enunciado: "O objeto era uma máquina do tempo!! você foi parar no passado, na época medieval na frente de um castelo, você olha para o objeto e vê o botão brilhando novamente",
        alternativas: [
            {
                texto: "Apertar o botão",
                afirmacao: "Você novamente foi para o passado.",
                imagem: "https://i.pinimg.com/originals/ed/a5/73/eda5739966cb33768d8ad0d77d7307ce.gif",
                nextQuestionIndex: 3
            }
        ]
    },
    // Question index 2
    {
        enunciado: "O objeto era uma máquina do tempo!! você foi parar no futuro, em uma cidade futurista, você olha para o objeto e vê o botão brilhando novamente",
        alternativas: [
            {
                texto: "Apertar o botão",
                afirmacao: "Você novamente foi para o futuro.",
                imagem: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/047668fb-fcf5-4f67-8225-d13cc4435f67/dbip5tq-8bf637f5-5221-46f4-8532-d5bdde7ba763.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA0NzY2OGZiLWZjZjUtNGY2Ny04MjI1LWQxM2NjNDQzNWY2N1wvZGJpcDV0cS04YmY2MzdmNS01MjIxLTQ2ZjQtODUzMi1kNWJkZGU3YmE3NjMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DA8W5K8y7AJFQuZfEIcT09lNxt12LNHn7f7Z2S2BRf4",
                nextQuestionIndex: 4
            }
        ]
    },
    // Question index 3 
    {
        enunciado: "Você se encontra em um lugar estranho, parece ser uma floresta, mas você escuta rugidos que parecem vir de criaturas imensas na distância, o botão brilha mais uma vez",
        alternativas: [
            {
                texto: "Apertar o botão.",
                afirmacao: "Você foi para o passado?.",
                imagem: "https://cdn.pixabay.com/animation/2022/11/16/14/56/14-56-49-778_512.gif",
                nextQuestionIndex: 5
            }
        ]
    },
    // Question index 4
    {
        enunciado: "Você se encontra em um lugar estranho, parece ser uma cidade ou o que restou dela, o botão brilha mais uma vez",
        alternativas: [
            {
                texto: "Apertar o botão.",
                afirmacao: "Você foi para o futuro?.",
                imagem: "https://cdn.pixabay.com/animation/2022/11/16/14/56/14-56-49-778_512.gif",
                nextQuestionIndex: 5  
            }
        ]
    },
    
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    body.style.backgroundImage = `url(${opcaoSelecionada.imagem})`; 
    atual = opcaoSelecionada.nextQuestionIndex;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O começo ou o fim?";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
