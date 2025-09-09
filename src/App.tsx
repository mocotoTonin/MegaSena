import "./App.css";
import NumberSelector from "./components/NumberSelector";
import Result from "./components/Result";
import Toast from "./components/Toast";
import type { NumberArray } from "./types/types";
import { useState } from "react";

function App() {
  const [userNumbers, setUserNumbers] = useState<NumberArray>([]);
  const [drawnNumbers, setDrawnNumbers] = useState<NumberArray>([]);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const drawNumbers = () => {
    if (userNumbers.length !== 6) {
      setToastMessage("Selecione exatamente 6 números!");
      return;
    }

    const numbers: NumberArray = [];
    while (numbers.length < 6) {
      const n = Math.floor(Math.random() * 60) + 1;
      if (!numbers.includes(n)) numbers.push(n);
    }

    setDrawnNumbers(numbers);
    setHasDrawn(true);
  };

  const resetGame = () => {
    setUserNumbers([]);
    setDrawnNumbers([]);
    setHasDrawn(false);
  };

  return (
    <div className="main-container">
      <h1 className="title">
        <span className="arrow">⤥</span>
        <span className="title-text">Teste sua sorte</span>
        <span className="arrow">⤦</span>
      </h1>

      {!hasDrawn && (
        <NumberSelector
          userNumbers={userNumbers}
          setUserNumbers={setUserNumbers}
          onDraw={drawNumbers}
          onError={(msg) => setToastMessage(msg)}
        />
      )}

      {hasDrawn && (
        <Result
          userNumbers={userNumbers}
          drawnNumbers={drawnNumbers}
          onReset={resetGame}
        />
      )}

      {/* Toasts */}
      <div className="toast-container">
        {toastMessage && (
          <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
        )}
      </div>
    </div>
  );
}

export default App;