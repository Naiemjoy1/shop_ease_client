import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [sortCriteria, setSortCriteria] = useState("default");
  const [brand, setBrand] = useState("all");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false); // Loading state

  const fetchProducts = async () => {
    setLoading(true); // Set loading to true when fetching starts
    try {
      const res = await fetch(
        `https://shop-ease-server-amber.vercel.app/products?page=${currentPage}&size=${itemsPerPage}&search=${searchQuery}&sort=${sortCriteria}&brand=${brand}&category=${category}&priceRange=${priceRange}`
      );
      const data = await res.json();
      setProducts(data.products);
      setTotalProducts(data.totalProducts);

      const uniqueBrands = [
        ...new Set(data.products.map((product) => product.brand)),
      ];
      const uniqueCategories = [
        ...new Set(data.products.map((product) => product.category)),
      ];
      setBrands(uniqueBrands);
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false); // Set loading to false when fetching is done
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [
    currentPage,
    itemsPerPage,
    searchQuery,
    sortCriteria,
    brand,
    category,
    priceRange,
  ]);

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
    setCurrentPage(0); // Reset to first page on filter change
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setCurrentPage(0); // Reset to first page on filter change
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCurrentPage(0); // Reset to first page on filter change
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
    setCurrentPage(0); // Reset to first page on filter change
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPage(0); // Reset to first page on filter change
  };

  const numberOfPages = Math.ceil(totalProducts / itemsPerPage);
  const pages = Array.from({ length: numberOfPages }, (_, index) => index);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleItemsPerPage = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(0); // Reset to first page on items per page change
  };

  return (
    <div>
      <div className="lg:flex justify-between gap-8">
        <div className="mb-4 flex flex-col gap-4 lg:w-1/4">
          <input
            type="text"
            placeholder="Search for products"
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 border rounded w-full"
          />

          <div className="space-y-2 grid lg:grid-cols-1 grid-cols-2 items-center gap-2">
            <select
              value={sortCriteria}
              onChange={handleSortChange}
              className="p-2 border rounded w-full"
            >
              <option value="default">Sort By</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="date-newest">Date Added: Newest First</option>
            </select>

            <select
              value={brand}
              onChange={handleBrandChange}
              className="p-2 border rounded w-full"
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
              className="p-2 border rounded w-full"
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
              className="p-2 border rounded w-full"
            >
              <option value="all">All Price Ranges</option>
              <option value="low">Low (0 - 50)</option>
              <option value="mid">Mid (50 - 100)</option>
              <option value="high">High (100+)</option>
            </select>
          </div>
        </div>

        <div className="lg:w-9/12">
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
            {products.map((product) => (
              <ProductsCard key={product._id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-evenly items-center">
            <button onClick={handlePrevPage} className="btn btn-sm btn-primary">
              Previous
            </button>
            <div>
              {pages.map((page) => (
                <button
                  onClick={() => setCurrentPage(page)}
                  key={page}
                  className={`btn btn-sm ${
                    page === currentPage ? "btn-active btn-primary" : ""
                  }`}
                >
                  {page + 1}
                </button>
              ))}
            </div>
            <button onClick={handleNextPage} className="btn btn-sm btn-primary">
              Next
            </button>
            <select
              value={itemsPerPage}
              onChange={handleItemsPerPage}
              className="ml-4"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
