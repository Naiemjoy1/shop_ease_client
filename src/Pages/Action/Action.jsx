import React, { useState } from "react";
import useProducts from "../../Hooks/useProducts";
import ProductsCard from "../Home/Products/ProductsCard";
import ActionCard from "./ActionCard";

const Action = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10); // Number of products per page
  const [products, totalProducts, loading, refetch] = useProducts(page, size);

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalProducts / size);

  const handleNextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className="container mx-auto my-10">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
            {products.map((product) => (
              <ActionCard
                key={product._id}
                product={product}
                refetch={refetch}
              />
            ))}
          </div>
          <div className="mt-6 flex justify-between">
            <button
              onClick={handlePreviousPage}
              disabled={page === 0}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Previous
            </button>
            <span>
              Page {page + 1} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={page >= totalPages - 1}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Action;
