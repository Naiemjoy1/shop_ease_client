import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UpdateProducts = () => {
  const product = useLoaderData();
  const { name, image, description, price, category, rating } = product;
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: name || "",
      image: image || "",
      description: description || "",
      price: price || "",
      category: category || "",
      rating: rating || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await axiosPublic.patch(
        `/products/${product._id}`,
        data
      );
      if (response.status === 200) {
        console.log("Product updated successfully");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} has been updated`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Update Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-bold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="input input-bordered w-full"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="image" className="block font-bold">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            {...register("image", { required: "Image URL is required" })}
            className="input input-bordered w-full"
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="description" className="block font-bold">
            Description:
          </label>
          <textarea
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
            className="textarea textarea-bordered w-full"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="price" className="block font-bold">
            Price:
          </label>
          <input
            type="number"
            id="price"
            {...register("price", {
              required: "Price is required",
              valueAsNumber: true,
            })}
            className="input input-bordered w-full"
          />
          {errors.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="category" className="block font-bold">
            Category:
          </label>
          <input
            type="text"
            id="category"
            {...register("category", { required: "Category is required" })}
            className="input input-bordered w-full"
          />
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="rating" className="block font-bold">
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            {...register("rating", {
              required: "Rating is required",
              valueAsNumber: true,
              min: 0,
              max: 5,
            })}
            className="input input-bordered w-full"
            step="0.1"
            min="0"
            max="5"
          />
          {errors.rating && (
            <p className="text-red-500">{errors.rating.message}</p>
          )}
        </div>
        <div className="flex justify-end">
          <button type="submit" className="btn btn-primary">
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProducts;
