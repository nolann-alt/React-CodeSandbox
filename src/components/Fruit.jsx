export default function Fruit(props) {
  // state
  const fruitInfo = props.fruitInfo;
  const remove = props.onFruitDelete;

  // comportements

  // affichage (render)
  return (
    <li key={fruitInfo.id}>
      {fruitInfo.nom}
      <button onClick={() => remove(fruitInfo.id)}>X</button>
    </li>
  );
}
