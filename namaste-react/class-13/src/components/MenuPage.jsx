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
    <div className="flex flex-wrap justify-evenly  rounded-md bg-yellow-200">
      <div>
        <h1>{restaurantsData?.name} </h1>
        <img
          className="rounded-lg"
          src={IMG_URL + restaurantsData?.cloudinaryImageId}
        />
        <h2>Location : {restaurantsData?.areaName} </h2>
        <h2>State : {restaurantsData?.city} </h2>
        <h2>Cuisines : {restaurantsData?.cuisines?.join(" , ")} </h2>
        <h2>Rating : {restaurantsData?.avgRating} </h2>
        <h3>Resturant id: {id}</h3>
      </div>
      <div className="overflow-hidden">
        <h1>Menu</h1>
        {menuData?.map((elem) => {
          return (
            <div
              key={elem?.card?.info?.id}
              className="h-80 w-60 m-10 rounded-md bg-slate-800 p-5 hover:bg-sky-700 text-white"
            >
              <div className="menu-items">
                {elem?.card?.info?.name}
                <div>
                  <div> ₹ {elem?.card?.info?.price}</div>
                  <div> {elem?.card?.info?.category}</div>
                  <div>
                    {elem?.card?.info?.inStock == 1
                      ? "AVAILABLE"
                      : "NOT AVAILABLE"}
                  </div>
                  <div> {elem?.card?.info?.isVeg == 1 ? "VEG" : "NON VEG"}</div>
                  <img
                    className="w-3/4 rounded-lg"
                    height="80px"
                    src={IMG_URL + elem?.card?.info?.imageId}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuPage;
