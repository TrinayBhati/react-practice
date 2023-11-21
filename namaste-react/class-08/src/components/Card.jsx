const Card = ({ elem }) => {
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          elem?.info?.cloudinaryImageId
        }
      />
      <h2>{elem?.info?.name}</h2>
      <h3>{elem?.info?.cuisines.join(", ")}</h3>
      <h4>{elem?.info?.avgRating}</h4>
    </div>
  );
};
export default Card;
