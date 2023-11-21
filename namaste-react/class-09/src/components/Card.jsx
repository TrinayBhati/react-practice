import { IMG_URL } from "../config";

const Card = ({ elem }) => {
  return (
    <div className="card">
      <img src={IMG_URL + elem?.info?.cloudinaryImageId} />
      <h2>{elem?.info?.name}</h2>
      <h3>{elem?.info?.cuisines.join(", ")}</h3>
      <h4>{elem?.info?.avgRating}</h4>
    </div>
  );
};
export default Card;
