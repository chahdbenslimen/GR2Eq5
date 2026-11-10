import React from 'react';

function App() {

  // Tableau des films avec leurs identifiants
  const films = [
    { id: 1, nom: "Fausse note" },
    { id: 2, nom: "L'Enfant du soleil" },
    { id: 3, nom: "El Jaida" },
    { id: 4, nom: "Dachra" },
    { id: 5, nom: "Porto Farina" }
  ];

  return (
    <div>
      <h1>Liste des films</h1>

      <ul>
        {films.map((film) => (
          <li key={film.id}>
            {film.nom}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;