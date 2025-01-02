import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white border flex">
      <img
        src={service.image}
        alt={service.serviceName}
        className="w-2/5 object-cover"
      />
      <div className="w-3/5 p-4">
        <h3 className="text-lg font-bold">{service.serviceName}</h3>
        <p className="text-sm text-gray-500 mb-2">{service.briefDescription}</p>
        <p className="text-sm text-gray-600">Category: {service.category}</p>
        <p className="text-sm text-gray-600">Counselor: {service.counselor}</p>
        <p className="text-sm text-gray-600">Date: {service.dateTime}</p>
      </div>
    </div>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};
export default ServiceCard;
