import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FormStyle } from "../constant/Styled";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <div>
        <FaSearch onClick={handleSubmit} />
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
    </FormStyle>
  );
}

export default Search;
