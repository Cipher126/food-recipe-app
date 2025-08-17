import React, { useContext } from "react";
import { GlobalContext } from "../../../Context";
import RecipeItem from "../../RecipeItem/RecipeItem";

const Home = () => {
  const { loading, recipes } = useContext(GlobalContext);

  if (loading)
    return <div className="text-center text-2xl font-semibold">Loading...</div>;
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipes && recipes.length > 0 ? (
        recipes.map((item, index) => <RecipeItem item={item} key={index} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-bold">
            No recipe to show. search for recipe
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
