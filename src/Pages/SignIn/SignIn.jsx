import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const SignIn = () => {
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign In</button>
        </div>
        <p>
          New Here?
          <Link to="/signup">
            <span className="text-primary"> Sign Up </span>
          </Link>
          here
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignIn;
