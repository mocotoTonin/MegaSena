import React from "react";
import type { NumberArray } from "../types/types";
import Button from "./Button";

interface NumberSelectorProps {
  userNumbers: NumberArray;
  setUserNumbers: (numbers: NumberArray) => void;
  onDraw: () => void;
  onError: (message: string) => void;
}

const NumberSelector: React.FC<NumberSelectorProps> = ({
  userNumbers,
  setUserNumbers,
  onDraw,
  onError
}) => {
  const toggleNumber = (num: number) => {
    if (userNumbers.includes(num)) {
      setUserNumbers(userNumbers.filter((n) => n !== num));
    } else if (userNumbers.length < 6) {
      setUserNumbers([...userNumbers, num]);
    }
  };

  return (
    <div className="container-selector">
      <div className="user-numbers">
        <h1>Selecione seus números:</h1>
        <div className="viewer">
          {userNumbers.map((num) => (
            <h2 key={num} className="number-view">
              {num}
            </h2>
          ))}
        </div>
      </div>

      <div className="number-grid">
        {Array.from({ length: 60 }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => toggleNumber(num)}
            className={`number ${userNumbers.includes(num) ? "-selected" : ""}`}
          >
            {num}
          </button>
        ))}
      </div>

      {/* BOTÃO CUSTOMIZADO */}
      <Button
        text="Sortear"
        onClick={() =>
          userNumbers.length === 6
            ? onDraw()
            : onError("Selecione exatamente 6 números!")
        }
      />
    </div>
  );
};

export default NumberSelector;