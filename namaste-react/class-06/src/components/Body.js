import { useState } from "react";
import { data } from "../config";
import Card from "./Card";

const Body = () => {
  const [cardData, setCardData] = useState(data);
  const search = useState("");
  const [searchText, setSearchText] = search; //  normal destructuring

  const styleObj = {
    backgroundColor: "red",
  };

  const searchClick = () => {
    const searchData = filterData(cardData, searchText);
    setCardData(searchData);
  };

  const filterData = (list, searchText) => {
    const ans = list.filter((elem) =>
      elem.name.toLowerCase().includes(searchText)
    );
    console.log("ans", ans);
    return ans;
  };

  return (
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
        {searchText}
      </div>
      <div className="main-body">
        {cardData.map((elem) => (
          <Card elem={elem} key={elem.id} />
        ))}
      </div>

      <h1 style={styleObj}>Body</h1>
    </>
  );
};

export default Body;
