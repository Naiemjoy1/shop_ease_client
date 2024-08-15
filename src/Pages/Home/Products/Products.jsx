import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("default");
  const [brand, setBrand] = useState("all");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const uniqueBrands = [...new Set(data.map((product) => product.brand))];
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setBrands(uniqueBrands);
        setCategories(uniqueCategories);
      });
  }, []);

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredProducts = products
    .filter((product) => {
      if (brand !== "all" && product.brand !== brand) return false;
      if (category !== "all" && product.category !== category) return false;
      if (priceRange === "low" && product.price > 50) return false;
      if (priceRange === "mid" && (product.price < 50 || product.price > 100))
        return false;
      if (priceRange === "high" && product.price < 100) return false;
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery))
        return false;
      return true;
    })
    .sort((a, b) => {
      if (sortCriteria === "price-low-high") {
        return a.price - b.price;
      } else if (sortCriteria === "price-high-low") {
        return b.price - a.price;
      } else if (sortCriteria === "date-newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else {
        return 0;
      }
    });

  return (
    <div>
      <div className="mb-4 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Search for products"
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border rounded"
        />

        <div className="flex justify-between">
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

          <select
            value={brand}
            onChange={handleBrandChange}
            className="p-2 border rounded"
          >
            <option value="all">All Brands</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          <select
            value={category}
            onChange={handleCategoryChange}
            className="p-2 border rounded"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={priceRange}
            onChange={handlePriceRangeChange}
            className="p-2 border rounded"
          >
            <option value="all">All Price Ranges</option>
            <option value="low">Low (0 - 50)</option>
            <option value="mid">Mid (50 - 100)</option>
            <option value="high">High (100+)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 justify-between gap-6 mt-10">
        {filteredProducts.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
