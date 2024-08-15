import React from "react";

const ProductsCard = ({ product }) => {
  const { name, image, description, price, category, rating, createdAt } =
    product;

  // Convert the createdAt date to a more readable format
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card bg-base-100 shadow-xl h-full flex flex-col">
      <figure>
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>Category: {category}</p>
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
          <p>Created On: {formattedDate}</p>
        </div>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
