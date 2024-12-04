import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative h-[500px] bg-cover bg-center bg-slider1">
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 px-6 py-4">
            <h2 className="text-white text-4xl font-bold mb-2 text-center">
              Empower Communities
            </h2>
            <p className="text-white text-lg mb-4 text-center max-w-xl mx-auto">
              Empower communities by fostering collaboration, driving meaningful
              change, and creating opportunities for a brighter and more
              sustainable future.
            </p>
            <Link
              to=""
              href="#donate"
              className="btn bg-primaryColor text-lg text-white px-6 py-2 rounded-full hover:bg-secondaryColor transition-colors duration-300"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative h-[500px] bg-cover bg-center bg-slider2">
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 px-6 py-4">
            <h2 className="text-white text-4xl font-bold mb-2 text-center">
              Support Education
            </h2>
            <p className="text-white text-lg mb-4 text-center">
              Help provide quality education to children in need and build a
              brighter future.
            </p>
            <Link
              to=""
              href="#donate"
              className="btn bg-primaryColor text-lg text-white px-6 py-2 rounded-full hover:bg-secondaryColor transition-colors duration-300"
            >
              Contribute Now
            </Link>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="relative h-[500px] bg-cover bg-center bg-slider3">
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 px-6 py-4">
            <h2 className="text-white text-4xl font-bold mb-2 text-center">
              Provide Health Care
            </h2>
            <p className="text-white text-lg mb-4 text-center">
              Your donation can help provide essential medical services to those
              in need.
            </p>
            <Link
              to=""
              href="#donate"
              className="btn bg-primaryColor text-lg text-white px-6 py-2 rounded-full hover:bg-secondaryColor transition-colors duration-300"
            >
              Support Health
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
