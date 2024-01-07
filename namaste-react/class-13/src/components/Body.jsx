import { useEffect, useState, useContext } from "react";
import Card from "./Card";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";
import { staticData } from "../config";
import useOnline from "../utils/hooks/useOnline";
import UserContext from "../utils/context/userContext";

const Body = () => {
  const [cardData, setCardData] = useState(null);
  const [filteredCardData, setFilteredCardData] = useState(null);

  const { setQuery } = useContext(UserContext);

  const search = useState("");
  const [searchText, setSearchText] = search; //  normal destructuring

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.67568619999999&lng=77.2596337&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setCardData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredCardData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const styleObj = {
    backgroundColor: "red",
  };

  const searchClick = () => {
    const searchData = filterData(cardData, searchText);
    setFilteredCardData(searchData);
  };

  const filterData = (list, searchText) => {
    const ans = list.filter((elem) =>
      elem?.info?.name?.toLowerCase().includes(searchText)
    );
    console.log("ans", ans);
    return ans;
  };
  const isOnline = useOnline();
  // console.log(isOnline);

  if (!isOnline) {
    return <h1> offline! check your connection</h1>;
  }

  return (
    <>
      <div className="p-5 bg-orange-600 my-5">
        <input
          type="text"
          className="search-input focus:bg-pink-500 p-4"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setQuery(e.target.value);
          }}
        ></input>
        <button
          className="p-2 m-5 bg-purple-800 text-white rounded-md"
          onClick={searchClick}
        >
          Search
        </button>
      </div>
      {cardData ? (
        <div className="flex flex-wrap justify-between">
          {filteredCardData?.length == 0 ? (
            <h1>no result found</h1>
          ) : (
            filteredCardData?.map((elem) => (
              <Link to={"/menu/" + elem?.info?.id} key={elem?.info?.id}>
                <Card elem={elem} />
              </Link>
            ))
          )}
        </div>
      ) : (
        <Skeleton />
      )}

      <h1 style={styleObj}>Body</h1>
    </>
  );
};

export default Body;
