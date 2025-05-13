import { useState } from 'react';

function App() {
  const [punkte, setPunkte] = useState(0);
  const [thema, setThema] = useState('');
  const [quiz, setQuiz] = useState([]);

  const handleAntwort = (richtig) => {
    if (richtig) setPunkte(punkte + 10);
  };

  const handleGenerateQuiz = () => {
    const dummyQuiz = [
      {
        frage: `Was gehört zum Thema "${thema}"?`,
        antworten: [
          { text: 'Richtige Antwort', richtig: true },
          { text: 'Falsche Antwort 1', richtig: false },
          { text: 'Falsche Antwort 2', richtig: false },
        ],
      },
    ];
    setQuiz(dummyQuiz);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>LernBär 🐻</h1>
      <p>Thema eingeben:</p>
      <input value={thema} onChange={(e) => setThema(e.target.value)} placeholder="z.B. Mietrecht" />
      <button onClick={handleGenerateQuiz}>Quiz generieren</button>
      <hr />
      {quiz.map((frage, i) => (
        <div key={i}>
          <p>{frage.frage}</p>
          {frage.antworten.map((a, j) => (
            <button key={j} onClick={() => handleAntwort(a.richtig)}>{a.text}</button>
          ))}
        </div>
      ))}
      <p>Punkte: {punkte}</p>
    </div>
  );
}

export default App;
