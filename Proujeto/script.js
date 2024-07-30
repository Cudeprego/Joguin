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
                imagem: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/e6ca9e36738259.5727c4e790a74.gif",
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
        enunciado: "O objeto era uma máquina do tempo!! você foi parar no passado, na época medieval em meio a uma guerra, você olha para o objeto e vê o botão brilhando novamente",
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
                imagem: "https://64.media.tumblr.com/9cb62900b925709918bb373afe661912/tumblr_ohvig5GRWg1rldv4go1_1280.gif",
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
                imagem: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1ab2da81799863.5d0a549ef0b56.png",
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
                imagem: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1ab2da81799863.5d0a549ef0b56.png",
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
