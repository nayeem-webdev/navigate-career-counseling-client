import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const ForgotPass = () => {
  const { resetPassword, passMail } = useContext(AuthContext);
  const handleResetPass = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent!");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Password reset Failed!");
      });
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Navigate | Forgot Password</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <PageHeader pageName="Forgot Password" heading="Reset Your Password" />

      <div className="bg-gray-100 flex items-center justify-center py-10">
        <div className="w-full max-w-md bg-white shadow-md border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">
            Forgot Your Password?
          </h2>

          <form onSubmit={handleResetPass} className="space-y-4">
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
                defaultValue={passMail}
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 px-4 py-2 text-gray-900 focus:ring-accent focus:border-accent outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center bg-primary text-white py-2 font-medium hover:bg-opacity-90 transition space-x-2"
            >
              <FaEnvelope />
              <span>Send Password Reset Link</span>
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Remembered your password?{" "}
              <Link
                to="/login"
                className="text-accent font-medium hover:underline"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
