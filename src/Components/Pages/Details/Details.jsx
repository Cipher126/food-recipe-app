import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../../Context";

const Details = () => {
  const params = useParams();
  const { details, setDetails, favourite, handleAddToFavourite } =
    useContext(GlobalContext);

  useEffect(() => {
    async function getDetails() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/get?rId=${params.id}`
      );
      const data = await res.json();
      // console.log(data)
      if (data?.recipe) {
        setDetails(data?.recipe);
      }
    }

    getDetails();
  }, []);

  // console.log(details)

  return (
    <div className="container mx-auto py-10 grid  grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={details?.image_url}
            alt="img"
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {details?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {details?.title}
        </h3>
        <div>
          <button
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black cursor-pointer text-white"
            onClick={() => handleAddToFavourite(details)}
          >
            {favourite &&
            favourite.length > 0 &&
            favourite.findIndex(
              (item) => item?.recipe_id === details?.recipe_id
            ) !== -1
              ? "Remove from Favourites"
              : "Add to Favourites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:{" "}
          </span>
          <ul className="flex flex-col gap-3">
            {details?.ingredients.map((item, index) => (
              <li key={index}>
                <span className="text-2xl font-semibold text-black">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
