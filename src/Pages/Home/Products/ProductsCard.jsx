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
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>Category: {category}</p>
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
          <p>Created On: {formattedDate}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
