const Card = ({ elem }) => {
  return (
    <div className="card">
      <img src={elem.image} />
      <h2>{elem.name}</h2>
      <h3>{elem.cuisines.join(", ")}</h3>
      <h4>{elem.rating}</h4>
    </div>
  );
};
export default Card;
