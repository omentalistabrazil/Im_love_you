const quizData = [
  {
    question: "Quando uma pessoa cruza os braços, geralmente isso indica:",
    options: [
      "Confiança e abertura",
      "Defensividade ou desconforto",
      "Felicidade extrema",
      "Indiferença total",
    ],
    correct: "Defensividade ou desconforto",
  },
  {
    question: "Manter contato visual constante pode indicar:",
    options: [
      "Interesse e sinceridade",
      "Desconfiança",
      "Entusiasmo excessivo",
      "Timidez",
    ],
    correct: "Interesse e sinceridade",
  },
  {
    question: "Quando uma pessoa tenta atrair sua atenção, mas seu corpo está voltado para longe, isso pode ser um sinal de:",
    options: [
      "Abertura e interesse",
      "Desinteresse ou fuga",
      "Confiança",
      "Tentativa de manipulação",
    ],
    correct: "Desinteresse ou fuga",
  },
  {
    question: "Qual é o principal objetivo do mentalismo?",
    options: [
      "Manipular diretamente os pensamentos de alguém",
      "Ler a mente de uma pessoa de forma precisa",
      "Fazer previsões sobre o futuro de alguém",
      "Utilizar pistas externas para influenciar o comportamento",
    ],
    correct: "Utilizar pistas externas para influenciar o comportamento",
  },
  {
    question: "Quando uma pessoa tem uma postura relaxada e descomplicada em uma conversa, isso geralmente indica:",
    options: [
      "Desinteresse",
      "Abertura e confiança",
      "Nervosismo",
      "Tentativa de manipulação",
    ],
    correct: "Abertura e confiança",
  },
  {
    question: "A maneira como uma pessoa reage ao apertar a mão de outra pode indicar:",
    options: [
      "Confiança e poder",
      "Medo ou insegurança",
      "Sentimento de superioridade",
      "Desejo de ser simpático",
    ],
    correct: "Confiança e poder",
  },
  {
    question: "Quando alguém mantém a cabeça inclinada para um lado, isso normalmente indica:",
    options: [
      "Desinteresse",
      "Atenção e empatia",
      "Confusão",
      "Arrogância",
    ],
    correct: "Atenção e empatia",
  },
  {
    question: "A forma como as pessoas posicionam seus pés em uma conversa pode revelar:",
    options: [
      "Sentimento de segurança",
      "Desejo de sair ou escapar",
      "Abertura para novas ideias",
      "Timidez",
    ],
    correct: "Desejo de sair ou escapar",
  },
  {
    question: "Quando uma pessoa finge estar interessada em uma conversa, mas seus olhos estão desviando, isso indica:",
    options: [
      "Falta de interesse",
      "Tentativa de ser educada",
      "Ansiedade",
      "Abertura para o diálogo",
    ],
    correct: "Falta de interesse",
  },
  {
    question: "Pessoas que sempre mantêm os braços abertos enquanto conversam geralmente demonstram:",
    options: [
      "Segurança e disposição",
      "Desconfiança",
      "Timidez",
      "Desejo de manipular",
    ],
    correct: "Segurança e disposição",
  },
  {
    question: "O que significa quando alguém olha para a boca de outra pessoa durante a conversa?",
    options: [
      "Falta de interesse",
      "Desejo de se aproximar ou beijar",
      "Confiança",
      "Medo",
    ],
    correct: "Desejo de se aproximar ou beijar",
  },
  {
    question: "Quando uma pessoa finge estar relaxada, mas está mexendo constantemente nas mãos ou pés, isso indica:",
    options: [
      "Conforto e segurança",
      "Ansiedade ou nervosismo",
      "Sinceridade",
      "Confiança",
    ],
    correct: "Ansiedade ou nervosismo",
  },
  {
    question: "Em persuasão, o uso de palavras como 'você' e 'nós' é eficaz porque:",
    options: [
      "Torna a pessoa mais receptiva e conectada",
      "Faz a pessoa se sentir desconfortável",
      "Apresenta uma abordagem agressiva",
      "Aumenta a confusão",
    ],
    correct: "Torna a pessoa mais receptiva e conectada",
  },
  {
    question: "O que significa quando uma pessoa endireita o corpo e se aproxima fisicamente de outra pessoa durante a conversa?",
    options: [
      "Desejo de mostrar superioridade",
      "Interesse e foco no outro",
      "Tentativa de intimidação",
      "Sentimento de insegurança",
    ],
    correct: "Interesse e foco no outro",
  },
  {
    question: "Quando alguém finge estar calmo mas está batendo os pés ou batendo com os dedos, isso pode indicar:",
    options: [
      "Confiança e segurança",
      "Impaciência ou frustração",
      "Tristeza",
      "Tensão controlada",
    ],
    correct: "Impaciência ou frustração",
  },
  {
    question: "O que geralmente significa quando alguém sorri enquanto fala, mas seus olhos estão frios e distantes?",
    options: [
      "Abertura e sinceridade",
      "Manipulação ou falsidade",
      "Felicidade genuína",
      "Confusão",
    ],
    correct: "Manipulação ou falsidade",
  },
  {
    question: "Quando uma pessoa olha para a direção da saída ou porta durante uma conversa, isso pode indicar:",
    options: [
      "Interesse pela conversa",
      "Desejo de sair ou evitar o assunto",
      "Curiosidade",
      "Confiança",
    ],
    correct: "Desejo de sair ou evitar o assunto",
  },
  {
    question: "Qual das opções abaixo é uma técnica comum de persuasão?",
    options: [
      "Criar uma sensação de urgência",
      "Fazer o outro se sentir inferior",
      "Rejeitar qualquer negociação",
      "Criar desconforto no outro",
    ],
    correct: "Criar uma sensação de urgência",
  },
  {
    question: "Quando uma pessoa mantém o corpo aberto e usa gestos largos, isso geralmente indica:",
    options: [
      "Desconfiança",
      "Abertura e honestidade",
      "Confusão",
      "Arrogância",
    ],
    correct: "Abertura e honestidade",
  },
  {
    question: "Se alguém constantemente balança a cabeça enquanto ouve você, isso geralmente significa:",
    options: [
      "Desinteresse",
      "Concordância e compreensão",
      "Tentativa de manipulação",
      "Confusão",
    ],
    correct: "Concordância e compreensão",
  },
  {
    question: "O que a posição das mãos na cintura geralmente indica em uma conversa?",
    options: [
      "Segurança e controle",
      "Confusão",
      "Medo ou insegurança",
      "Falta de confiança",
    ],
    correct: "Segurança e controle",
  },
  {
    question: "Quando uma pessoa altera sua voz de forma sutil, isso pode indicar:",
    options: [
      "Agressividade",
      "Tentativa de esconder a verdadeira emoção",
      "Alegria",
      "Confiança",
    ],
    correct: "Tentativa de esconder a verdadeira emoção",
  },
  {
    question: "O que significa quando alguém desvia rapidamente os olhos ao ser questionado?",
    options: [
      "Desinteresse",
      "Mentira ou evasão",
      "Felicidade",
      "Insegurança",
    ],
    correct: "Mentira ou evasão",
  },
  {
    question: "Quando uma pessoa começa a se mover em direção à saída ou porta durante uma conversa, isso geralmente indica:",
    options: [
      "Desinteresse em continuar a conversa",
      "Desejo de aprofundar a conversa",
      "Confiança",
      "Simpatia",
    ],
    correct: "Desinteresse em continuar a conversa",
  },
  {
    question: "Qual é a técnica do espelho em persuasão?",
    options: [
      "Imitar os gestos e comportamento de outra pessoa",
      "Fazer com que a outra pessoa se sinta desconfortável",
      "Criar uma sensação de urgência",
      "Oferecer vantagens inesperadas",
    ],
    correct: "Imitar os gestos e comportamento de outra pessoa",
  },
  {
    question: "Quando uma pessoa inclina a cabeça e olha para você diretamente, isso pode indicar:",
    options: [
      "Curiosidade ou interesse genuíno",
      "Desinteresse",
      "Tentativa de manipulação",
      "Arrogância",
    ],
    correct: "Curiosidade ou interesse genuíno",
  },
  {
    question: "Quando alguém fala em voz baixa ou suave durante uma conversa, isso pode indicar:",
    options: [
      "Confiança",
      "Insegurança",
      "Desinteresse",
      "Felicidade",
    ],
    correct: "Insegurança",
  },
  {
    question: "A leitura fria pode ser usada para:",
    options: [
      "Advinhar o futuro",
      "Criar uma conexão com outra pessoa e dar uma falsa impressão de conhecimento",
      "Manipular a mente de alguém",
      "Obter informações secretas",
    ],
    correct: "Criar uma conexão com outra pessoa e dar uma falsa impressão de conhecimento",
  },
  {
    question: "Quando uma pessoa se aproxima fisicamente de você sem invadir o espaço pessoal, isso geralmente indica:",
    options: [
      "Abertura e conforto",
      "Tentativa de intimidação",
      "Desinteresse",
      "Arrogância",
    ],
    correct: "Abertura e conforto",
  },
  {
    question: "Quando alguém mantém os pés apontados para a porta, isso geralmente significa:",
    options: [
      "Desejo de conversar mais",
      "Desejo de escapar ou terminar a conversa",
      "Interesse genuíno",
      "Timidez",
    ],
    correct: "Desejo de escapar ou terminar a conversa",
  },
];

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const errorAlert = document.createElement("div"); // Criar o alerta de erro
errorAlert.classList.add("error-alert");
const correctAlert = document.createElement("div"); // Criar o alerta de resposta correta
correctAlert.classList.add("correct-alert");
let currentQuestionIndex = 0;

function loadQuiz() {
  const currentQuestion = quizData[currentQuestionIndex];
  const quizBlock = document.createElement("div");
  quizBlock.classList.add("quiz-block");
  quizBlock.innerHTML = `
    <p>${currentQuestionIndex + 1}. ${currentQuestion.question}</p>
    ${currentQuestion.options
      .map(
        (option) =>
          `<label>
            <input type="radio" name="question${currentQuestionIndex}" value="${option}">
            ${option}
          </label>`
      )
      .join("")}
  `;
  quizContainer.innerHTML = '';  // Limpa o conteúdo da pergunta anterior
  quizContainer.appendChild(quizBlock);
  quizContainer.appendChild(errorAlert); // Adiciona o alerta de erro
  quizContainer.appendChild(correctAlert); // Adiciona o alerta de acerto
}

function calculateScore() {
  let score = 0;
  const selectedOption = document.querySelector(
    `input[name="question${currentQuestionIndex}"]:checked`
  );
  if (selectedOption && selectedOption.value === quizData[currentQuestionIndex].correct) {
    score++;
  }
  return score;
}

function showResult(score) {
  scoreDisplay.textContent = `Você acertou ${score} de ${quizData.length} perguntas!`;
  resultContainer.classList.remove("hidden");
}

function nextQuestion() {
  const score = calculateScore();
  if (score > 0) {
    // Se acertou, exibe o alerta de acerto e avança para a próxima questão
    correctAlert.textContent = "Resposta correta!";
    correctAlert.style.display = "block"; // Exibe o alerta de acerto
    setTimeout(() => {
      correctAlert.style.display = "none"; // Esconde o alerta após 2 segundos
    }, 2000);
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuiz();
    } else {
      showResult(score);
    }
  } else {
    // Se errou, exibe o alerta de erro
    errorAlert.textContent = "Resposta incorreta. Tente novamente!";// Se errou, exibe o alerta de erro
    errorAlert.textContent = "Resposta incorreta. Tente novamente!";
    errorAlert.style.display = "block"; // Exibe o alerta de erro
    setTimeout(() => {
      errorAlert.style.display = "none"; // Esconde o alerta após 2 segundos
    }, 2000);
  }
}

submitButton.addEventListener("click", () => {
  nextQuestion();
});

loadQuiz();  // Carrega a primeira questão