import { useState } from "react";
import "./styles.css";
import Fruit from "./components/Fruit";

function App() {
  // state (étéat, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);

  const [nouveauFruit, setNouveauFruit] = useState("");

  // const inputRef = useRef();

  // comportements
  const remove = (id) => {
    console.log(id);
    // 1. copie du state
    /*const fruitsCopy = fruits.slice(); // slice = copie.*/
    const fruitsCopy = [...fruits]; // éclate le tableau fruit avec ... et son contenu est ajouté dans un nouveau tableau

    // 2. Manipuler ma copie du state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id); // filtre les fruits qui n'on pas été cliqués

    // 3. modifier mon state avec le setter
    setFruits(fruitsCopyUpdated);
  };

  const handleSumbmit = (event) => {
    event.preventDefault();

    // 1. copie du state
    const fruitsCopy = [...fruits];

    // 2. manipulation de la copie
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAjouter = { id, nom };
    fruitsCopy.push(fruitAjouter);

    // 3. modifier le state avec le setter
    setFruits(fruitsCopy);
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  // affichage (render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit fruitInfo={fruit} onFruitDelete={remove} />
        ))}
      </ul>
      <form action="submit" onSubmit={handleSumbmit}>
        <input
          value={nouveauFruit}
          type="text"
          placeholder="Ajouter un fruit ..."
          onChange={handleChange}
        />
        <button>Ajouter +</button>
      </form>
    </div>
  );
}

export default App;

// Gestion du fomulaire
// 1. création du fomulaire
// 2. soumission du fomulaire
// 3. collecte des données du formulaire
// 3a. méthode 1: documentGetElementById "React"
// 3b. méthode 2: sync descendante / ascendante
