import React, { useEffect, useState } from "react";

import axios from "axios";

export default function recipeList() {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {});
  axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
    const persons = res.data;
    this.setState({ persons });
  });
}
