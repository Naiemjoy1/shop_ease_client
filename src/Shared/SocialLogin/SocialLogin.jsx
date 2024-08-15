import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="flex justify-evenly items-center">
      <button className="flex justify-between items-center btn btn-primary btn-sm">
        <FaGoogle /> Google
      </button>
      <button className="flex justify-between items-center btn btn-primary btn-sm">
        <FaGithub /> GitHub
      </button>
      <button className="flex justify-between items-center btn btn-primary btn-sm">
        <FaFacebook /> Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
