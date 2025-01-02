import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-center px-6 py-12">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Navigate | Error Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>{" "}
      <div className="max-w-lg w-full">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="mt-4 text-2xl text-primary">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <p className="mt-2 text-lg text-gray-600">
          We couldn&apos;t find the page you&apos;re looking for. It might have
          been moved or deleted.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-accent transition"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
