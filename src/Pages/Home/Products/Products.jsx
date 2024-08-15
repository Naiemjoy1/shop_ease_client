import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 justify-between gap-6">
      {products.map((product) => (
        <ProductsCard product={product}></ProductsCard>
      ))}
    </div>
  );
};

export default Products;
