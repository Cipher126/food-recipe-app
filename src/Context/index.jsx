import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [search, setSearchParams] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipe] = useState([]);
  const [details, setDetails] = useState(null);
  const [favourite, setFavourite] = useState([]);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    fetchRecipes(search);
  }

  async function fetchRecipes(query) {
    setLoading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${query}`
      );

      const data = await res.json();
      if (data?.recipes) {
        setRecipe(data?.recipes);
        navigate("/");
        setLoading(false);
        setSearchParams("");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParams("");
    }
  }

  useEffect(() => {
    if (favourite.length > 0) {
      localStorage.setItem("favourites", JSON.stringify(favourite));
    }
  }, [favourite]);

  useEffect(() => {
    const savedFavourites = localStorage.getItem("favourites");
    if (savedFavourites) {
      setFavourite(JSON.parse(savedFavourites));
    }
  }, []);

  function handleAddToFavourite(currRecipe) {
    let copyfavourites = [...favourite];
    let index = copyfavourites.findIndex(
      (item) => item.recipe_id === currRecipe.recipe_id
    );

    if (index === -1) {
      copyfavourites.push(currRecipe);
    } else {
      copyfavourites.splice(index, 1);
    }

    setFavourite(copyfavourites);
  }

  useEffect(() => {
    fetchRecipes("pizza");
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearchParams,
        handleSubmit,
        loading,
        recipes,
        details,
        setDetails,
        handleAddToFavourite,
        favourite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
