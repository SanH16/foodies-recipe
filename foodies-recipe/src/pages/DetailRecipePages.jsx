import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonStyle, DetailWrapper, Info } from "../constant/Styled";

function DetailRecipePages() {
  const [details, setDetails] = useState({});
  const [activeButton, setActiveButton] = useState("Instructions");
  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${import.meta.env.VITE_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    // console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <ButtonStyle
          className={activeButton === "Instructions" ? "active" : ""}
          onClick={() => setActiveButton("Instructions")}
        >
          Instructions
        </ButtonStyle>

        <ButtonStyle
          className={activeButton === "Ingredients" ? "active" : ""}
          onClick={() => setActiveButton("Ingredients")}
        >
          Ingredients
        </ButtonStyle>

        {activeButton === "Instructions" && (
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}

        {activeButton === "Ingredients" && (
          <>
            <div>
              <h3>
                {details.sourceName} (
                {details.dishTypes.map((dishType, index) => {
                  return <span key={index}>{dishType}</span>;
                })}
                )
              </h3>
            </div>
            <div>
              <ul>
                {details.extendedIngredients.map((ingredientItem, index) => {
                  return (
                    <li key={ingredientItem.id && index}>
                      <img
                        src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredientItem.image}`}
                        alt={`(${ingredientItem.image})`}
                      />
                      <span>{ingredientItem.original}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </Info>
    </DetailWrapper>
  );
}

export default DetailRecipePages;
