function Element(props) {
  return <h2>{props.name}</h2>;
}

function ListRendering() {
  const names = ["Brue", "Clark", "Diana"];
  return (
    <div>
      {names.map((name) => (
        <Element name={name} key={names.indexOf(name)} />
      ))}
    </div>
  );
}

export default ListRendering;