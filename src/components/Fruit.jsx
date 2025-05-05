export default function Fruit(props) {
  // state

  // comportements

  // affichage (render)
  return (
    <li key={props.fruitInfo.id}>
      {props.fruitInfo.nom}
      <button onClick={() => props.onFruitDelete(props.fruitInfo.id)}>X</button>
    </li>
  );
}
