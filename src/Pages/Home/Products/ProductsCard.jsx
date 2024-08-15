import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaRegEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const ProductsCard = ({ product }) => {
  const { name, image, description, price, category, rating, createdAt } =
    product;
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  // Convert the createdAt date to a more readable format
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Make handleDelete async
  const handleDelete = async (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosPublic.delete(`/products/${product._id}`);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "There was a problem deleting the product.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="card bg-base-100 shadow-xl h-full flex flex-col relative">
      <figure>
        <img src={image} alt={name} className="w-full h-40 object-cover" />
      </figure>
      <div className="card-body p-5 flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <p className="flex items-center">
            <span className="font-bold">Rating: </span>
            <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
          </p>
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
              <div className="space-y-4">
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
                  <span className="font-bold">Price: </span>${price}
                </p>
                <p className="flex items-center">
                  <span className="font-bold">Rating: </span>
                  <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
                </p>
                <p>
                  <span className="font-bold">Release Date: </span>
                  {formattedDate}
                </p>
                <button className="btn btn-sm btn-primary">Buy Now</button>
              </div>
            </div>
            <label className="modal-backdrop" htmlFor={`modal-${name}`}>
              Close
            </label>
          </div>
        </div>
      </div>
      {user ? (
        <div className="absolute top-4 right-4 text-primary text-xl">
          <Link to={`products/${product._id}`}>
            <button>
              <FaRegEdit />
            </button>
          </Link>
        </div>
      ) : null}
      {user ? (
        <div className="absolute left-4 top-4 text-primary text-xl">
          <button onClick={() => handleDelete(product)}>
            <MdDelete />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ProductsCard;
