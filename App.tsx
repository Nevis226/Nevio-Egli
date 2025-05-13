
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LernBoostApp() {
  const [punkte, setPunkte] = useState(0);
  const [thema, setThema] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAntwort = (richtig: boolean) => {
    if (richtig) setPunkte(punkte + 10);
  };

  const handleGenerateQuiz = async () => {
    setLoading(true);
    const response = await fetch("/api/generate-quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ thema }),
    });
    const data = await response.json();
    setQuiz(data.quiz);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700">LernBär 🇨🇭</h1>
        <p className="text-gray-600">Deine LernApp mit KI-Unterstützung</p>
      </header>

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-2">🎯 Quiz generieren mit KI</h2>
          <input
            type="text"
            className="border w-full p-2 rounded mb-2"
            placeholder="Thema eingeben (z. B. Mietrecht)"
            value={thema}
            onChange={(e) => setThema(e.target.value)}
          />
          <Button onClick={handleGenerateQuiz} disabled={loading}>
            {loading ? "Erstelle Quiz..." : "Quiz generieren"}
          </Button>
        </div>

        {quiz.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-green-700">📘 Dein KI-Quiz</h2>
            {quiz.map((frage: any, i: number) => (
              <Card key={i} className="bg-white">
                <CardContent className="space-y-2">
                  <p className="font-medium">{frage.frage}</p>
                  {frage.antworten.map((a: any, j: number) => (
                    <Button
                      key={j}
                      onClick={() => handleAntwort(a.richtig)}
                      variant="outline"
                      className="w-full text-left"
                    >
                      {a.text}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            ))}
            <p className="text-right text-lg font-semibold text-blue-600">
              Punkte: {punkte}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
