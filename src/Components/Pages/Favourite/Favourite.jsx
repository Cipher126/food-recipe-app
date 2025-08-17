import React from "react";
import { GlobalContext } from "../../../Context";
import { useContext } from "react";
import RecipeItem from "../../RecipeItem/RecipeItem";

const Favourite = () => {
  const { loading, favourite } = useContext(GlobalContext);

  if (loading)
    return <div className="text-center text-2xl font-semibold">Loading...</div>;
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favourite && favourite.length > 0 ? (
        favourite.map((item, index) => <RecipeItem item={item} key={index} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-bold">
            Nothing added to favourites yet
          </p>
        </div>
      )}
    </div>
  );
};

export default Favourite;
