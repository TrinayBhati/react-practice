import { useEffect, useState } from "react";
import Card from "./Card";
import Skeleton from "./Skeleton";

const Body = () => {
  const [cardData, setCardData] = useState(null);
  const [filteredCardData, setFilteredCardData] = useState(null);

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
      elem?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("ans", ans);
    return ans;
  };

  return !cardData ? (
    <Skeleton />
  ) : (
    <>
      <div className="search-component">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button className="search-btn" onClick={searchClick}>
          Search
        </button>
      </div>
      <div className="main-body">
        {filteredCardData?.length == 0 ? (
          <h1>no result found</h1>
        ) : (
          filteredCardData?.map((elem) => (
            <Card elem={elem} key={elem?.info?.id} />
          ))
        )}
      </div>

      <h1 style={styleObj}>Body</h1>
    </>
  );
};

export default Body;
