// src/NameSelectionPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './App.css'; // Importando o CSS

// Lista de nomes e mensagens
const names = [
  { name: "João", message: "Vamos lá, João, mostre seu conhecimento!" },
  { name: "Maria", message: "Maria, você é incrível! Pronta para o desafio?" },
  { name: "Pedro", message: "Pedro, você está preparado para o quiz?" },
  { name: "Ana", message: "Ana, vamos testar seu conhecimento!" }
];

function NameSelectionPage() {
  const [selectedName, setSelectedName] = useState(null);

  const handleNameSelection = (name) => {
    setSelectedName(name);
  };

  return (
    <div className="name-selection-page">
      <h1>Escolha seu nome para começar o quiz!</h1>
      <div className="name-list">
        {names.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNameSelection(item)}
            className="button-name"
          >
            {item.name}
          </button>
        ))}
      </div>

      {selectedName && (
        <div>
          <p>{selectedName.message}</p>
          <Link to={{
            pathname: "/quiz",
            state: { name: selectedName.name, message: selectedName.message }
          }}>
            <button className="button-start">
              Iniciar Quiz
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default NameSelectionPage;
