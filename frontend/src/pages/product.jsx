import React from "react";
import { useParams } from "react-router-dom";
import { bookmarks } from "../bookmarks";

const Productpage = () => {
  const { productId } = useParams();
  const product = bookmarks.find((product) => product.id === productId);

  return <div>HERE</div>;
};

export default Productpage;
