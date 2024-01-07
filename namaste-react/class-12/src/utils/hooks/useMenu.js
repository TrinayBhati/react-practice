import { useEffect, useState } from "react";

const useMenu = (id) => {
  const [restaurantsData, setRestaurantsData] = useState(null);
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  const fetchRestaurantsData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.67568619999999&lng=77.2596337&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    // console.log(
    //   json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // );
    setRestaurantsData(json?.data?.cards?.[0]?.card?.card?.info);
    setMenuData(
      json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
        ?.card?.card?.itemCards
    );
    // console.log(menuData[0]?.card?.info);
    // change array to 3,4,5 to get other offers
  };
  return { restaurantsData, menuData };
};
export default useMenu;
