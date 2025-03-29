// src/App.js
import React, { useState } from "react";
import { questions } from "./questions"; // Importando as perguntas de outro arquivo
import './App.css'; // Importando o CSS

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [name, setName] = useState(""); // Estado para o nome do jogador
  const [isNameSelected, setIsNameSelected] = useState(false); // Estado para verificar se o nome foi selecionado

  // Lista de nomes
  const nameList = ["Julia", "Gaby", "Lívia", "Leandro", "João", "Vinicius", "Ana", "Jorgiane", "Paulo", "Vacilei"];

  // Função para selecionar o nome do jogador
  const handleNameSelect = (selectedName) => {
    setName(selectedName);
    setIsNameSelected(true); // Define que o nome foi selecionado
  };

  // Função para tratar a resposta do jogador
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

  // Função para iniciar o jogo
  const handleStartGame = () => {
    setIsStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
  };

  // Função para reiniciar o jogo
  const handleRestartGame = () => {
    setIsStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
  };

  // Função para exibir uma frase personalizada dependendo do nome
  const getCustomMessage = () => {
    const customMessages = {
      Julia: "(...)",
      Gaby: "E o Pix, nada ainda?",
      Lívia: "Sumiu por tanto tempo que achamos que foi arrebatada com Elias",
      Leandro: "Tá misturando Whey na oração, filho? ",
      João: "Tem mistério chegando, tu se apruma, viu?",
      Vinicius: "Rapaz, tu vigia na Terra, viu?", 
      Ana : "To com uma dorzinha aqui no joelho, arruma um atestado?" , 
      Jorgiane: "É, tem muito o que dizer não",
      Paulo: "Livro de Tombares 2, 5: 'Esteja sempre pronto para ser tombado'", 
      Vacilei: "Mas qual era a dificuldade em apertar um botão?"
    };

    // Retorna a mensagem personalizada de acordo com o nome
    return customMessages[name] || `${name}, prepare-se para o quiz!`;
  };

  return (
    <div className="App">
      {!isNameSelected ? (
        <div className="name-selection">
          <h2>Selecione seu nome antes de começar:</h2>
          <p className="p1">Clique em vacilei se não votou na enquete</p>

          <div>
            {nameList.map((nameOption, index) => (
              <button
                key={index}
                onClick={() => handleNameSelect(nameOption)}
                className="button-name"
              >
                {nameOption}
              </button>
            ))}
          </div>
        </div>
      ) : !isStarted ? (
        <div>
          <h2>{getCustomMessage()}</h2>
          <button className="button-start" onClick={handleStartGame}>
            🎮 Iniciar Quiz
          </button>
        </div>
      ) : (
        <div>
          {!isFinished ? (
            <div>
              {/* Exibe o nome do jogador antes da pergunta */}
              <h2>{name}, {questions[currentQuestion].question}</h2>
              <div>
                {questions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="button-answer"
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
              <button className="button-restart" onClick={handleRestartGame}>
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
