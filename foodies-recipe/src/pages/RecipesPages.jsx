import React, { useEffect, useState } from "react";

import Search from "../components/Search";
import { APIrecipe } from "../apis/APIrecipe";
import { Button, Card, Col, Flex, Row, message } from "antd";
import { useNavigate } from "react-router-dom";
import ButtonFloat from "../components/ButtonFloat";

export default function RecipesPages() {
  const [recipe, setRecipe] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    APIrecipe.getRecipes().then(setRecipe);
  }, []);
  return (
    <div>
      <h1 className=" font-bold mb-4 text-[#494949]">Recipes Pages</h1>
      <Search />

      {recipe &&
        recipe.map((item) => (
          <Row key={item.id} gutter={16}>
            <Col span={18}>
              <Card className="rounded-3xl overflow-hidden shadow-lg mt-10">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-gray-700 text-base">
                    <b>Description: </b> {item.description}
                  </p>
                  <p className="text-gray-700 text-base">
                    <b>Instructions: </b> {item.instructions}
                  </p>
                </div>

                <div className="px-6 pt-4 pb-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button onClick={() => APIrecipe.deleteRecipe(item.id).then(() => navigate(0))}>delete</Button>
              </Card>
            </Col>
          </Row>
        ))}
      {/*  */}
      <ButtonFloat />
    </div>
  );
}
