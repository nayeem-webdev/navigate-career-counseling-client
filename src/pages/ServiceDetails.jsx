import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { addReview, getReviewFLS } from "../utils/review";
import { addToServices } from "../utils/service";
import { toast } from "react-toastify";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);

  const servicesJSON = useLoaderData();
  const services = JSON.parse(servicesJSON);
  const clickedID = useParams();
  const showService = services.find((ser) => ser.id == clickedID.id);

  const [showReviews, setShowReviews] = useState([]);

  const handlePostReview = (e) => {
    e.preventDefault();
    const reviewText = e.target.review.value;
    const postedReview = {
      id: clickedID.id,
      uid: user.uid,
      name: user.displayName,
      review: reviewText,
    };
    addReview(postedReview);

    const updatedReviews = getReviewFLS().filter(
      (rev) => rev.id == clickedID.id
    );
    setShowReviews(updatedReviews);
    e.target.reset();
  };

  useEffect(() => {
    const initialReviews = getReviewFLS().filter(
      (rev) => rev.id == clickedID.id
    );
    setShowReviews(initialReviews);
  }, [clickedID.id]);

  const handleBookSession = () => {
    user ? addToServices(showService) : toast.error("please Login");
  };
  const {
    image,
    serviceName,
    category,
    fullDescription,
    features = [],
    price,
    dateTime,
    counselor,
    rating,
  } = showService || {};

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Navigate | Service Details</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>{" "}
      {/* Hero Section */}
      <section className="relative h-[80vh] pt-[72px]">
        <img
          src={image}
          alt={serviceName}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent flex flex-col justify-end pb-12 px-6 z-20">
          <div className="flex flex-col lg:flex-row justify-between">
            <div>
              <h1 className="text-white text-4xl md:text-5xl font-semibold leading-tight">
                {serviceName}
              </h1>
              <p className="mt-4 text-white text-lg md:text-xl italic">
                by {counselor}
              </p>
              <div className="flex gap-2 mt-4 items-center">
                <span className="text-lg md:text-xl text-white">Rating:</span>
                <span className="bg-yellow-500 rounded-full text-white font-semibold px-4 py-1 text-lg md:text-xl">
                  {rating} ★
                </span>
              </div>
            </div>

            <button
              onClick={handleBookSession}
              className="bg-accent text-white px-6 py-3 text-lg font-semibold hover:bg-accent/80 transition self-end lg:self-center"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
      {/* Service Details Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-6">
          {/* Basic Info */}
          <div className=" bg-white p-6 shadow-lg w-full md:w-1/3 flex flex-col items-start">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              {serviceName}
            </h2>
            <p className="bg-accent rounded-full text-white font-semibold px-4 py-1 text-xs mb-6">
              {category}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Date & Time: {dateTime}
            </p>
            <p className="text-sm text-gray-500 mb-4">Counselor: {counselor}</p>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm text-gray-500">Rating:</span>
              <span className="text-yellow-500">{rating} ★</span>
            </div>
            <p className="text-3xl font-bold text-accent mb-6">$ {price}.00</p>
            <button
              onClick={handleBookSession}
              className="bg-accent text-white px-6 py-3 text-lg font-semibold hover:bg-accent/80 transition"
            >
              Book Now
            </button>
          </div>

          {/* Description Section */}
          <div className="bg-white p-6 shadow-lg w-full md:w-2/3">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Program Details
            </h3>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              {fullDescription}
            </p>
            <h3 className="text-xl font-semibold text-primary mb-4">
              Key Features
            </h3>
            <ul className="list-disc ml-5">
              {features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Info Section (optional) */}
        <div className="bg-white p-6 shadow-lg">
          <h4 className="text-lg font-semibold text-primary mb-2">
            Post Your Review
          </h4>
          <form onSubmit={handlePostReview}>
            <div className="mb-4">
              <textarea
                id="review"
                required
                name="review"
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                placeholder="Write your review here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white p-2 rounded"
            >
              Submit Review
            </button>
          </form>
          <h3 className="text-xl font-semibold text-primary mb-4 mt-6">
            Reviews & Feedback
          </h3>

          <div className="mb-4">
            {showReviews.length
              ? showReviews.map((rev) => (
                  <div className="mb-4" key={rev.uid}>
                    <p className="font-semibold text-lg">{rev.name}</p>
                    <p className="text-base text-gray-600">{rev.review}</p>
                  </div>
                ))
              : "No Reviews"}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
