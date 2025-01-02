import { useContext } from "react";
import Card from "./Card";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const { data } = useContext(AuthContext);
  const latestThreeData = data.slice(0, 3);
  return (
    <section className="container py-20 mx-auto px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold text-primary mb-4">
          Explore Our Services
        </h2>
        <p className="text-lg text-gray-600">
          Providing personalized career guidance to help you achieve your
          professional dreams.
        </p>
      </div>

      <div className="w-full lg:w-11/12 mx-auto grid grid-cols-1 gap-6 ">
        {latestThreeData.map((data) => (
          <Card key={data.serviceID} data={data} />
        ))}
      </div>
      <div className="text-center pt-10">
        <Link
          className="bg-primary text-white font-semibold px-6 py-2 shadow hover:bg-primary/90 transition"
          to={"/services"}
        >
          {" "}
          View All Services
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
