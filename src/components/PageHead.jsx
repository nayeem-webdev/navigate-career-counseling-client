import PropTypes from "prop-types";

const PageHead = ({ pageName, heading, subHeading, story }) => {
  return (
    <section className="bg-primary text-center text-white w-full pt-28 pb-16">
      <div className="container mx-auto px-6 flex items-center flex-col">
        {/* Page Name */}
        <p className="text-sm uppercase text-white/60 mb-2">{pageName}</p>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h1>

        {/* Subheading */}
        <h2 className="text-xl md:text-2xl font-normal mb-6">{subHeading}</h2>

        {/* Story */}
        <p className="text-base md:text-lg leading-relaxed max-w-3xl">
          {story}
        </p>
      </div>
    </section>
  );
};

PageHead.propTypes = {
  pageName: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  story: PropTypes.string,
};
export default PageHead;
