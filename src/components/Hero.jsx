import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Swiper Section */}
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        effect="fade"
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="h-screen"
      >
        <SwiperSlide>
          <img
            src="/assets/slide-1.jpg"
            alt="Slide 1"
            className="object-cover w-full h-screen"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/slide-2.jpg"
            alt="Slide 2"
            className="object-cover w-full h-screen"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/slide-3.jpg"
            alt="Slide 3"
            className="object-cover w-full h-screen"
          />
        </SwiperSlide>
      </Swiper>

      {/* Hero Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent flex flex-col justify-end pb-12 px-6 z-20">
        <h1 className="text-white text-4xl md:text-5xl font-semibold leading-tight">
          Navigate Your Path to Success
        </h1>
        <p className="mt-4 text-white text-lg md:text-xl max-w-3xl">
          Personalized career guidance and expert counseling to help you achieve
          your goals.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            to="/services"
            className="bg-accent text-white px-6 py-3 text-lg font-semibold hover:bg-accent/80 transition"
            aria-label="Rent a luxury apartment"
          >
            Our Services
          </Link>
          <Link
            to="/manage-services"
            className="bg-accent text-white px-6 py-3 text-lg font-semibold hover:bg-accent/80 transition"
            aria-label="Rent a luxury apartment"
          >
            Manage Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
