import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      navigate("/");
    });
  };
  return (
    <div className="flex justify-evenly items-center">
      <button
        onClick={handleGoogleSignIn}
        className="flex justify-between items-center btn btn-primary btn-sm"
      >
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
