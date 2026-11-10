
import './App.css';

function App() {

  const fruit = [
    "Pomme",
    "Banane",
    "Orange",
    "Fraise",
    "Mangue",
    "Raisin"
  ];

  return (
    <div>
      <h1>Liste des fruits</h1>

      <ul>
        {fruit.map((f, index) => (
          <li key={index}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

function afficherFilms() {
  const nouvelleFenetre = window.open("", "_blank");

  nouvelleFenetre.document.write(`
    <html>
      <head>
        <title>Liste des films</title>
      </head>
      <body>
        <h1>Liste des films</h1>
        <ul>
          <li>Fausse note</li>
          <li>L'Enfant du soleil</li>
          <li>El Jaida</li>
          <li>Dachra</li>
          <li>Porto Farina</li>
        </ul>
      </body>
    </html>
  `);

  nouvelleFenetre.document.close();
}

export default App;

