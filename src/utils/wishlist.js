import { toast } from "react-toastify";

// Get Review From Local Storage
const getWishlistFLS = () => {
  const wishlistJSON = localStorage.getItem("wishlist");
  if (wishlistJSON) {
    const wishlist = JSON.parse(wishlistJSON);
    return wishlist;
  } else {
    return [];
  }
};

// adding Wishlist
const addToWishlist = (item) => {
  const wishlist = getWishlistFLS();
  const isExist = wishlist.find((wList) => wList.id === item.id);
  if (isExist) return toast.error("Already on Wishlist!");
  wishlist.push(item);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  toast.success("Added to Wishlist!");
};

// remove Wishlist
const removeWishlist = (item) => {
  const wishlist = getWishlistFLS();
  const remainingWishlist = wishlist.filter((wItem) => wItem.id !== item.id);

  localStorage.setItem("wishlist", JSON.stringify(remainingWishlist));
  toast.success("Removed from Wishlist!");
};

export { addToWishlist, removeWishlist, getWishlistFLS };
