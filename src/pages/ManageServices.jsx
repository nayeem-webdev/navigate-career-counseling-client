import { Helmet } from "react-helmet";
import ServiceCard from "../components/ServiceCard";
import PageHeader from "../components/PageHeader";
import WishlistCard from "../components/WishlistCard";
import { useEffect, useState } from "react";
import { getWishlistFLS } from "../utils/wishlist";
import ReloadButton from "../components/ReloadButton";
import { getServicesFLS } from "../utils/service";

const ManageServices = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const initialReviews = getWishlistFLS();
    setWishlist(initialReviews);
  }, []);

  const [services, setServices] = useState([]);

  useEffect(() => {
    const initialServices = getServicesFLS();
    setServices(initialServices);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Navigate | My Services</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <ReloadButton />{" "}
      <PageHeader
        pageName="Manage Services"
        heading="Manage Your Services"
        subHeading="View, update, and organize your booked services and wishlist."
      />
      <div className="container mx-auto px-4  py-6 flex flex-col lg:flex-row gap-4">
        <div className="lg:w-2/3">
          <h2 className="text-xl font-semibold mb-4">Booked Services</h2>
          <div className="grid grid-cols-1 gap-4 ">
            {services.length > 0 ? (
              services.map((service) => (
                <ServiceCard key={service.serviceID} service={service} />
              ))
            ) : (
              <p className="text-gray-500">No booked services available.</p>
            )}
          </div>
        </div>

        <div className="lg:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Wishlist</h2>
          <div className="grid grid-cols-1 gap-4">
            {wishlist.length > 0 ? (
              wishlist.map((item) => <WishlistCard key={item.id} item={item} />)
            ) : (
              <p className="text-gray-500">No services in your wishlist.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageServices;
