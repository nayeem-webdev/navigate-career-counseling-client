import PropTypes from "prop-types";
import { TbReload } from "react-icons/tb";

const ReloadButton = ({ positionClass }) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <button
      onClick={handleReload}
      className={`fixed flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white shadow-lg hover:bg-accent/90 transition ${positionClass}`}
      aria-label="Reload Page"
    >
      <TbReload className="text-xl" />
    </button>
  );
};

ReloadButton.propTypes = {
  positionClass: PropTypes.string,
};

ReloadButton.defaultProps = {
  positionClass: "bottom-4 right-4",
};

export default ReloadButton;
