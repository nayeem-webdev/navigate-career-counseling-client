import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addToWishlist } from "../utils/wishlist";
import { addToServices } from "../utils/service";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Card = ({ data }) => {
  const { user } = useContext(AuthContext);

  const handleAddToWishlist = () => {
    user ? addToWishlist(data) : toast.error("please Login");
  };
  const handleBookSession = () => {
    user ? addToServices(data) : toast.error("please Login");
  };

  return (
    <div className="flex flex-col md:flex-row w-full border overflow-hidden shadow-lg">
      <div
        className="md:w-1/2 w-full h-64 md:h-auto bg-cover bg-center"
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      ></div>

      <div className="md:w-1/2 w-full p-6 flex flex-col justify-between bg-white">
        <div className="mb-4">
          <div className="flex gap-2 mb-4">
            <p className="bg-accent rounded-full text-white font-semibold px-4 py-1 text-xs">
              {data.category}
            </p>
          </div>
          <h3 className="text-2xl font-bold text-primary mb-3 hover:text-accent/90 transition cursor-pointer">
            {data.serviceName}
          </h3>
          <p className="text-md text-gray-500 mb-5">{data.briefDescription}</p>
          <p className="text-sm text-gray-500 mb-3">
            {" "}
            Date and Time: {data.dateTime}
          </p>
          <p className="text-sm text-gray-700 italic mb-3">
            by {data.counselor}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 ">Rating:</span>
            <span className="text-yellow-500 font-medium">{data.rating} ★</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-gray-800 text-2xl font-semibold">
            $ {data.price}.00
          </p>
          <button
            onClick={handleAddToWishlist}
            className={"text-2xl text-gray-600 hover:text-accent transition"}
          >
            <FaRegHeart />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={handleBookSession}
            className="bg-accent text-white font-semibold px-6 py-2 shadow hover:bg-accent/90 transition"
          >
            Book Now
          </button>
          <Link
            to={`/services/service/${data.id}`}
            className="border border-accent text-accent font-semibold px-6 py-2 shadow hover:bg-accent hover:text-white transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Card;
