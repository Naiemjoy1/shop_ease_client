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
        <img src={image} alt={name} className="w-full h-40 object-cover" />
      </figure>
      <div className="card-body p-5 flex flex-col justify-between">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
        </div>
        <div className="card-actions justify-end mt-2">
          {/* The button to open modal */}
          <label htmlFor={`modal-${name}`} className="btn btn-sm btn-primary">
            View Details
          </label>

          {/* Put this part before </body> tag */}
          <input
            type="checkbox"
            id={`modal-${name}`}
            className="modal-toggle"
          />
          <div className="modal" role="dialog">
            <div className="modal-box space-y-4">
              <figure>
                <img src={image} alt={name} className="w-full" />
              </figure>
              <div>
                <p className="card-title">Model: {name}</p>
                <p>
                  <span className="font-bold">Description: </span>
                  {description}
                </p>
                <p>
                  <span className="font-bold">Category: </span>
                  {category}
                </p>
                <p>
                  <span className="font-bold">Release Date: </span>
                  {formattedDate}
                </p>
              </div>
            </div>
            <label className="modal-backdrop" htmlFor={`modal-${name}`}>
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
