import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const res = await axiosPublic.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        const productData = {
          name: data.name,
          description: data.description,
          price: parseFloat(data.price),
          category: data.category,
          rating: parseFloat(data.rating),
          image: res.data.data.display_url,
        };

        const response = await axiosPublic.post("/products", productData);

        if (response.data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} has been added successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      console.error("Error uploading image or adding product:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add the product. Please try again.",
      });
    }
  };

  return (
    <div className="container mx-auto my-10">
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
        <div className="form-control">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <input
            type="file"
            name="image"
            className="file-input file-input-bordered file-input-sm w-full max-w-xs"
            {...register("image", { required: true })}
          />
          {errors.image && <span>This field is required</span>}
        </div>
        <div className="flex justify-end">
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
