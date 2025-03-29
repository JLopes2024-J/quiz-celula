// src/questions.js

export const questions = [
  {
    question: "Em que ano João Paulo II foi eleito Papa?",
    answers: ["1978", "1981", "1965", "1990"],
    correct: 0,
  },
  {
    question: "Qual era o nome de batismo de João Paulo II?",
    answers: ["Karol Wojtyła", "Angelo Roncalli", "Joseph Ratzinger", "Jorge Bergoglio"],
    correct: 0,
  },
  {
    question: "Qual foi o país de origem de João Paulo II?",
    answers: ["Itália", "Polônia", "Espanha", "Alemanha"],
    correct: 1,
  },
  {
    question: "Qual foi o principal atentado que ele sofreu?",
    answers: ["Facada no Vaticano", "Atentado a tiros na Praça de São Pedro", "Explosão na Basílica de São Pedro", "Sequestro em viagem"],
    correct: 1,
  },
  {
    question: "Qual grande evento para jovens foi criado por João Paulo II?",
    answers: ["Jornada Mundial da Juventude", "Encontro Mundial das Famílias", "Festival Internacional da Fé", "Missão Católica Global"],
    correct: 0,
  },
  {
    question: "Em que país Madre Teresa nasceu?",
    answers: ["Índia", "Albania", "Bósnia", "Itália"],
    correct: 1,
  },
  {
    question: "Qual foi o nome da ordem religiosa fundada por Madre Teresa?",
    answers: ["Missionárias da Caridade", "Irmãs de São José", "Irmãs de São Francisco", "Carmelitas"],
    correct: 0,
  },
  {
    question: "Em que cidade Madre Teresa passou a maior parte de sua vida e trabalho?",
    answers: ["Paris", "Roma", "Calcutá", "Londres"],
    correct: 2,
  },
  {
    question: "Em que ano Madre Teresa recebeu o Prêmio Nobel da Paz?",
    answers: ["1975", "1985", "1993", "1979"],
    correct: 3,
  },
  {
    question: "Qual era o nome verdadeiro de Madre Teresa?",
    answers: ["Teresa de Calcutá", "Agnes Gonxha Bojaxhiu", "Maria Teresa de Calcutá", "Mãe Teresa"],
    correct: 1,
  },
];

// Função para embaralhar o array de perguntas
export const shuffleQuestions = () => {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]]; // Troca os elementos
  }
};
