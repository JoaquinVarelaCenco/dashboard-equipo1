import React from "react";
import { useNavigate } from "react-router-dom";
import { newProduct } from "../../../services/apiServices";
import ProductForm from "../../../components/Forms/ProductForm";

function ProductView() {
  const navigate = useNavigate();

  function handleSubmit(product) {
    newProduct(product).then((res) => {
    });
    navigate("/products");
  }

  return <ProductForm handleSubmit={handleSubmit} />;
}

export default ProductView;
