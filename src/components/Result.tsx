import React from "react";
import type { NumberArray } from "../types/types";

interface ResultProps {
  userNumbers: NumberArray;
  drawnNumbers: NumberArray;
  onReset: () => void;
}

const Result: React.FC<ResultProps> = ({
  userNumbers,
  drawnNumbers,
  onReset,
}) => {
  const hits = userNumbers.filter((n) => drawnNumbers.includes(n));

  return (
    <div className="container-result">
      {drawnNumbers.length > 0 && (
        <>
          <div className="container-viewer">
            <h1>Números Selecionados</h1>
            <div className="viewer">
              {userNumbers.map((num) => (
                <h2 key={num} className="number-view">
                  {num}
                </h2>
              ))}
            </div>
          </div>

          <div className="container-viewer">
            <h1>Números Sorteados</h1>
            <div className="viewer">
              {drawnNumbers.map((num) => (
                <h2 key={num} className="number-view">
                  {num}
                </h2>
              ))}
            </div>
          </div>

          <h2>
            Você Acertou: {hits.length} {hits.length > 0 && `(${hits.join(", ")})`}
          </h2>
        </>
      )}
      <button onClick={onReset} className="btn-default">Reiniciar</button>
    </div>
  );
};

export default Result;