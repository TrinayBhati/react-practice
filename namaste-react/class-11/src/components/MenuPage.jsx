import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../config";
import Skeleton from "./Skeleton";
import useMenu from "../utils/hooks/useMenu";

const MenuPage = () => {
  const { id } = useParams();
  //   console.log(params);
  //   const { id } = params; - destructuring above instead of here

  const { menuData } = useMenu(id);
  const { restaurantsData } = useMenu(id);

  return !restaurantsData ? (
    <Skeleton />
  ) : (
    <div className="main-body">
      <div>
        <h1>{restaurantsData?.name} </h1>
        <img src={IMG_URL + restaurantsData?.cloudinaryImageId} />
        <h2>Location : {restaurantsData?.areaName} </h2>
        <h2>State : {restaurantsData?.city} </h2>
        <h2>Cuisines : {restaurantsData?.cuisines?.join(" , ")} </h2>
        <h2>Rating : {restaurantsData?.avgRating} </h2>
        <h3>Resturant id: {id}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        {menuData?.map((elem) => {
          return (
            <ul key={elem?.card?.info?.id} className="menu-card">
              <li className="menu-items">
                {elem?.card?.info?.name}
                <ul>
                  <li> ₹ {elem?.card?.info?.price}</li>
                  <li> {elem?.card?.info?.category}</li>
                  <li>
                    {elem?.card?.info?.inStock == 1
                      ? "AVAILABLE"
                      : "NOT AVAILABLE"}
                  </li>
                  <li> {elem?.card?.info?.isVeg == 1 ? "VEG" : "NON VEG"}</li>
                  <img
                    height="80px"
                    src={IMG_URL + elem?.card?.info?.imageId}
                  />
                </ul>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default MenuPage;
