import PropTypes from "prop-types";
import { removeWishlist } from "../utils/wishlist";

const WishlistCard = ({ item }) => {
  
  const { serviceName, price, counselor } = item;

  const handleDeleteWishList = (item) => {
    removeWishlist(item);
  };
  return (
    <div className="bg-white border p-4 flex justify-between items-center">
      <div>
        <h3 className="font-semibold text-lg text-primary">{serviceName}</h3>
        <p className="text-sm text-gray-600">Counselor: {counselor}</p>
        <p className="text-sm text-gray-600">Price: ${price}</p>
      </div>
      <button
        onClick={() => handleDeleteWishList(item)}
        className="bg-accent text-white text-sm px-3 py-1 rounded hover:bg-accent/80 transition"
      >
        Delete
      </button>
    </div>
  );
};
WishlistCard.propTypes = {
  item: PropTypes.object.isRequired,
};
export default WishlistCard;
