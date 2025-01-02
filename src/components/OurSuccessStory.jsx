import { FaNetworkWired, FaUserFriends, FaUserTie } from "react-icons/fa";
import { FaAtom } from "react-icons/fa6";

const OurSuccessStory = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/slide-4.jpg')",
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="absolute inset-0 bg-white bg-opacity-60 backdrop-blur-[2px]"></div>

      <div className="relative max-w-6xl mx-auto px-4 py-28 text-center">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold text-primary mb-4">
            Our Success Story
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            At <span className="text-accent font-bold">Navigate</span>, we
            empower professionals to excel in their careers by offering
            <span className="text-accent font-semibold"> Career Guidance</span>,
            <span className="text-accent font-semibold"> Mock Interviews</span>,
            <span className="text-accent font-semibold"> Career Planning</span>,
            and
            <span className="text-accent font-semibold">
              {" "}
              Networking Opportunities
            </span>
            . Join us and take the next step in your professional journey!
          </p>
        </div>

        <p className="text-lg mb-8"></p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div className="flex flex-col items-center ">
            <div className="bg-primary p-6 rounded-full ">
              <FaUserTie className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-lg font-medium">Career Guidance</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-primary p-6 rounded-full ">
              <FaUserFriends className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-lg font-medium">Mock Interviews</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-primary p-6 rounded-full ">
              <FaAtom className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-lg font-medium">Career Planning</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-primary p-6 rounded-full ">
              <FaNetworkWired className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-lg font-medium">Networking</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSuccessStory;
