import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Card from "../components/Card";
import PageHead from "../components/PageHead";
import { Helmet } from "react-helmet";

const Services = () => {
  const { data: cardData } = useContext(AuthContext);
  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Navigate | Services</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>{" "}
      <PageHead
        pageName={"Services"}
        heading={"Explore Our Services"}
        subHeading={
          "Providing personalized career guidance to help you achieve your professional dreams."
        }
      />
      <div className=" container py-20 px-6 w-full lg:w-11/12 mx-auto grid grid-cols-1 gap-6 ">
        {cardData.map((data) => (
          <Card key={data.serviceID} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Services;
