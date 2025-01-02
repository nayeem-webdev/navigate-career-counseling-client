import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const Register = () => {
  const { loginWithEmail, loginWithPopUp, user, setPassMail } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleUserLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setPassMail(email);
    loginWithEmail(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successful");
        navigate(location?.state ? location.state : "/profile");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    loginWithPopUp(googleProvider)
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successful");
        navigate(location?.state ? location.state : "/profile");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Login Failed");
      });
  };

  // Pass Show hide
  const [hidePass, setHidePass] = useState(true);

  if (user) {
    return <Navigate to={location?.state ? location.state : "/profile"} />;
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Navigate | Login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>{" "}
      <PageHeader pageName="Login" heading={"Welcome Back!"} />
      <div className=" bg-gray-100 flex items-center justify-center py-10">
        <div className="w-full max-w-md bg-white shadow-md border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">
            Log In Your Account
          </h2>
          <form onSubmit={handleUserLogin} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 px-4 py-2 text-gray-900 focus:ring-accent focus:border-accent outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute top-3 right-3">
                  {hidePass ? (
                    <FaEye onClick={() => setHidePass(false)} />
                  ) : (
                    <FaEyeSlash onClick={() => setHidePass(true)} />
                  )}
                </div>
                <input
                  type={hidePass ? "password" : "text"}
                  id="password"
                  name="password"
                  required
                  placeholder="Enter your password"
                  className=" w-full border border-gray-300 px-4 py-2 text-gray-900 focus:ring-accent focus:border-accent outline-none"
                />
              </div>
            </div>
            <span
              onClick={() => navigate("/forgot-pass")}
              className="text-[12px] text-primary hover:underline cursor-pointer"
            >
              Forgot Password
            </span>
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-primary text-white py-2 font-medium hover:bg-opacity-90 transition space-x-2"
            >
              Login
            </button>
          </form>
          <div className="mt-6">
            <p className="text-sm text-gray-500 text-center mb-4">
              Or Log in with
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleGoogleLogin}
                className="flex items-center px-4 py-2 bg-gray-100 border border-gray-300 text-gray-700 hover:border-accent hover:bg-gray-200 transition space-x-2"
              >
                <FaGoogle />
                <span>Google</span>
              </button>
              <button className="flex items-center px-4 py-2 bg-gray-100 border border-gray-300 text-gray-700 hover:border-accent hover:bg-gray-200 transition space-x-2">
                <FaFacebook />
                <span>Facebook</span>
              </button>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Do not have an account?{" "}
              <Link
                to="/register"
                className="text-accent font-medium hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
