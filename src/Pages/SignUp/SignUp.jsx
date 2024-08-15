import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useAuth();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.error("Error during signUp", error);
      });
  };

  return (
    <div className="w-1/2 mx-auto min-h-[calc(100vh-288px)]">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
        <p>
          Already Have Account?
          <Link to="/signin">
            <span className="text-primary"> Sign In </span>
          </Link>
          here
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
