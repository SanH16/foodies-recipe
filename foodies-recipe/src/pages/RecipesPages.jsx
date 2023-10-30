import React, { useEffect, useState } from "react";

import Search from "../components/Search";
import { APIrecipe } from "../apis/APIrecipe";
import { Col, Row, Tag } from "antd";

export default function RecipesPages() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    APIrecipe.getRecipes().then(setRecipe);
  }, []);
  return (
    <div>
      <h1>Recipes Pages</h1>
      <Search />
      {recipe &&
        recipe.map((val) => (
          <Row key={val.id}>
            <Col>
              <h2>{val.title}</h2>
              {val.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
              <p>
                <b>Description: </b>
                {val.description}
              </p>
              <p>
                <b>Instructions: </b>
                {val.instructions}
              </p>
            </Col>
          </Row>
        ))}
    </div>
  );
}
