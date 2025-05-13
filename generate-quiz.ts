
export default function handler(req, res) {
  const { thema } = req.body;
  const exampleQuiz = [
    {
      frage: `Was gehört zum Thema ${thema}?`,
      antworten: [
        { text: "Richtige Antwort", richtig: true },
        { text: "Falsche Antwort 1", richtig: false },
        { text: "Falsche Antwort 2", richtig: false },
      ],
    },
  ];
  res.status(200).json({ quiz: exampleQuiz });
}
