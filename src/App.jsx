import { useState } from "react";
import "./styles.css";

function App() {
  // state (étéat, données)
  const [compteur, setCompteur] = useState(1);

  // comportements
  const handleClick = () => {
    // alert("handleClick");

    console.log("compteur : ", compteur);
    setCompteur(compteur + 1);
    console.log("compteur : ", compteur);
  };

  // affichage (render)
  return (
    <div>
      <h1>{compteur}</h1>
      <button onClick={handleClick}>Incrémente</button>
    </div>
  );
}

export default App;
