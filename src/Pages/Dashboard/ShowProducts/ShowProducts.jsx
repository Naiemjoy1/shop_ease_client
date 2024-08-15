import React from "react";
import useProducts from "../../../Hooks/useProducts";

const ShowProducts = () => {
  const [products] = useProducts();

  console.log("products", products);

  // Ensure products is an array before mapping
  if (!Array.isArray(products)) {
    return <div>No products available</div>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Map over products if it's an array */}
            {products.map((product, index) => (
              <tr key={product._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={
                            product.image || "https://via.placeholder.com/150"
                          }
                          alt={product.name}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.name}</div>
                      <div className="text-sm opacity-50">
                        {product.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {product.company}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {product.jobTitle}
                  </span>
                </td>
                <td>{product.favoriteColor || "N/A"}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowProducts;
