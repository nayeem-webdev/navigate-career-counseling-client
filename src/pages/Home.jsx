import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import OurSuccessStory from "../components/OurSuccessStory";
import ReviewsAndFeedback from "../components/ReviewsAndFeedback";
const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Navigate | Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>{" "}
      <Hero />
      <ServicesSection />
      <OurSuccessStory />
      <ReviewsAndFeedback />
    </>
  );
};

export default Home;
