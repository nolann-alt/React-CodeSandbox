import { useState } from "react";
import "./styles.css";

function App() {
  // state (étéat, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);
  const voiture = <li>Tesla</li>;
  const voitures = [<li>Audi</li>, <li>BMW</li>, <li>Clio</li>];

  // comportements
  const remove = (id) => {
    console.log(id);
  };

  // affichage (render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={fruit.id}>
              {fruit.nom} <button onClick={remove}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
