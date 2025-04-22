import { useState } from "react";
import "./styles.css";

function App() {
  // state (étéat, données)
  const [compteur, setCompteur] = useState(1);

  // comportements

  // affichage (render)
  return (
    <div>
      <h1>{compteur}</h1>
      <button></button>
    </div>
  );
}

export default App;
