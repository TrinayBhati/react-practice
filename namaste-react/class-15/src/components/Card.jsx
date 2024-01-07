import { IMG_URL } from "../config";

const Card = ({ elem }) => {
  return (
    <div className="flex flex-col justify-center shadow-2xl w-60 h-80 m-1 rounded-md bg-slate-500 p-5">
      <img
        className="rounded-md h-2/3 mb-2 shadow-lg"
        src={IMG_URL + elem?.info?.cloudinaryImageId}
      />
      <h2>{elem?.info?.name}</h2>
      <h3>{elem?.info?.cuisines.join(", ")}</h3>
      <h4>{elem?.info?.avgRating}</h4>
    </div>
  );
};
export default Card;
