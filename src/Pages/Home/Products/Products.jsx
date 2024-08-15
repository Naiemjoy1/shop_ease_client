import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("default");

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortCriteria === "price-low-high") {
      return a.price - b.price;
    } else if (sortCriteria === "price-high-low") {
      return b.price - a.price;
    } else if (sortCriteria === "date-newest") {
      return new Date(b.dateAdded) - new Date(a.dateAdded);
    } else {
      return 0;
    }
  });

  return (
    <div>
      <div className="mb-4">
        <select
          value={sortCriteria}
          onChange={handleSortChange}
          className="p-2 border rounded"
        >
          <option value="default">Sort By</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="date-newest">Date Added: Newest First</option>
        </select>
      </div>
      <div className="grid grid-cols-3 justify-between gap-6 mt-10">
        {sortedProducts.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
