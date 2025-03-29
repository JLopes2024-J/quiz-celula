import React, { useState } from "react";

const questions = [
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
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (index) => {
    const correctAnswer = questions[currentQuestion].correct;
    if (index === correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  const handleStartGame = () => {
    setIsStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
  };

  const handleRestartGame = () => {
    setIsStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="App" style={{ textAlign: "center", padding: "20px" }}>
      {!isStarted ? (
        <button
          onClick={handleStartGame}
          style={{ padding: "10px", marginBottom: "20px", fontSize: "18px" }}
        >
          🎮 Iniciar Quiz
        </button>
      ) : (
        <div>
          {!isFinished ? (
            <div>
              <h2>{questions[currentQuestion].question}</h2>
              <div>
                {questions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    style={{
                      padding: "10px",
                      margin: "5px",
                      backgroundColor: "lightblue",
                      borderRadius: "5px",
                    }}
                  >
                    {answer}
                  </button>
                ))}
              </div>
              <p>Pontuação: {score}</p>
            </div>
          ) : (
            <div>
              <h2>Fim do jogo!</h2>
              <p>Sua pontuação: {score} de {questions.length}</p>
              <button
                onClick={handleRestartGame}
                style={{
                  padding: "10px",
                  margin: "10px",
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                Reiniciar Quiz
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
