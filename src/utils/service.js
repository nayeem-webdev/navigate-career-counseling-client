import { toast } from "react-toastify";

// Get Review From Local Storage
const getServicesFLS = () => {
  const servicesJSON = localStorage.getItem("services");
  if (servicesJSON) {
    const services = JSON.parse(servicesJSON);
    return services;
  } else {
    return [];
  }
};

// adding services
const addToServices = (item) => {
  const services = getServicesFLS();
  const isExist = services.find((wList) => wList.id === item.id);
  if (isExist) return toast.error("Already Booked!");
  services.push(item);
  localStorage.setItem("services", JSON.stringify(services));
  toast.success("Session Booked!");
};

export { addToServices, getServicesFLS };
