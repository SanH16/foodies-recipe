import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Grid } from "../constant/Styled";

function SearchedPages() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const params = useParams();

  const getSearched = async (search) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${search}`
    );
    const recipes = await data.json();

    setSearchedRecipes(recipes.results);
    // console.log(recipes.results);
  };

  useEffect(() => {
    getSearched(params.searched);
  }, [params.searched]);

  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

export default SearchedPages;
