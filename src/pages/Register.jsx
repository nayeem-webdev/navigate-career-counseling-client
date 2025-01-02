import { Link, Navigate, useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, updateUser, user } = useContext(AuthContext);
  const [passFocus, setPassFocus] = useState(false);

  // Pass verify
  const [isLong, setIsLong] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);

  const verifyPass = (e) => {
    const passValue = e.target.value;

    // Check Characters
    const hasUppercase = /[A-Z]/.test(passValue);
    const hasLowercase = /[a-z]/.test(passValue);
    const hasSymbol = /[!@#$%*]/.test(passValue);
    const isLong = passValue.length >= 8;

    // Check Delete Character
    setHasUppercase(hasUppercase);
    setHasLowercase(hasLowercase);
    setHasSymbol(hasSymbol);
    setIsLong(isLong);

    // Set Pass Verify
    if (hasUppercase) {
      setHasUppercase(true);
    }
    if (hasLowercase) {
      setHasLowercase(true);
    }
    if (hasSymbol) {
      setHasSymbol(true);
    }
    if (isLong) {
      setIsLong(true);
    }
  };

  const handleUserRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;

    if (isLong && hasSymbol && hasLowercase && hasUppercase) {
      createUser(email, password)
        .then((res) => {
          console.log(res.user);
          updateUser({ displayName: name, photoURL: photoURL })
            .then(() => {
              navigate("/profile");
              toast.success("Account Creation Successful");
            })
            .catch((err) => {
              console.log(err.message);
              toast.error("Update Account Failed");
            });
        })
        .catch((err) => {
          console.log(err.message);
          toast.error("Account Creation Failed");
        });
    } else {
      alert("wrong Pass");
    }
  };

  // Pass Show hide
  const [hidePass, setHidePass] = useState(true);

  if (user) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Navigate | Register</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>{" "}
      <PageHeader pageName="Register" heading={"Join Us Today"} />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
        <div className="w-full max-w-md bg-white shadow-md border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">
            Create Your Account
          </h2>
          <form onSubmit={handleUserRegister} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full border border-gray-300 px-4 py-2 text-gray-900 focus:ring-accent focus:border-accent outline-none"
              />
            </div>
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
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 px-4 py-2 text-gray-900 focus:ring-accent focus:border-accent outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo URL
              </label>
              <input
                type="url"
                id="photo"
                name="photoURL"
                required
                placeholder="Enter your photo URL"
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


                  required
                  placeholder="Enter your password"
                  className=" w-full border border-gray-300 px-4 py-2 text-gray-900 focus:ring-accent focus:border-accent outline-none"
                  onFocus={() => setPassFocus(true)}
                  onChange={verifyPass}
                />
              </div>
            </div>
            {passFocus && (
              <ul>
                <li
                  className={`text-[12px] ${
                    hasUppercase ? "text-green-600" : "text-red-600"
                  } `}
                >
                  Must have an uppercase letter.
                </li>
                <li
                  className={`text-[12px] ${
                    hasLowercase ? "text-green-600" : "text-red-600"
                  } `}
                >
                  Must have a lowercase letter.
                </li>
                <li
                  className={`text-[12px] ${
                    hasSymbol ? "text-green-600" : "text-red-600"
                  } `}
                >
                  Must have a symbol ! @ # $ % *.
                </li>
                <li
                  className={`text-[12px] ${
                    isLong ? "text-green-600" : "text-red-600"
                  } `}
                >
                  Must be 8 characters long.
                </li>
              </ul>
            )}
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-primary text-white py-2 font-medium hover:bg-opacity-90 transition space-x-2"
            >
              <i className="fas fa-user-plus"></i>
              <span>Register</span>
            </button>
          </form>
          <div className="mt-6">
            <p className="text-sm text-gray-500 text-center mb-4">
              Or Log in with
            </p>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center px-4 py-2 bg-gray-100 border border-gray-300 text-gray-700 hover:border-accent hover:bg-gray-200 transition space-x-2">
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
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-accent font-medium hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
