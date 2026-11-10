
import { useState } from 'react';

function App() {

  const [nom, setNom] = useState('');
  const [saveur, setSaveur] = useState('Noix de coco');
  const [commentaire, setCommentaire] = useState('');

  function envoyerFormulaire(e) {
    e.preventDefault();

    alert(
      "Nom complet : " + nom +
      "\nSaveur préférée : " + saveur +
      "\nCommentaire : " + commentaire
    );
  }

  return (
    <div>
      <h1>Application React</h1>

      <form onSubmit={envoyerFormulaire}>

        <label>Nom complet :</label>

        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Veuillez saisir votre nom complet"
        />

        <br /><br />

        <label>Choisissez votre saveur préférée :</label>

        <select
          value={saveur}
          onChange={(e) => setSaveur(e.target.value)}
        >
          <option value="Pamplemousse">Pamplemousse</option>
          <option value="Noix de coco">Noix de coco</option>
          <option value="Mangue">Mangue</option>
        </select>

        <br /><br />

        <label>Commentaire :</label>

        <br />

        <textarea
          value={commentaire}
          onChange={(e) => setCommentaire(e.target.value)}
          placeholder="Saisir votre commentaire"
        />

        <br /><br />

        <button type="submit">
          Envoyer
        </button>

      </form>
    </div>
  );
}

export default App;
