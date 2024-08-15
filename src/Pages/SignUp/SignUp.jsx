import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  return (
    <div className="w-1/2 mx-auto min-h-[calc(100vh-288px)]">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
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
