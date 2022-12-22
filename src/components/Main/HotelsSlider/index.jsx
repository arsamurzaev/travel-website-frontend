import Slider from "react-slick";
import HotelCard from "../../Cards/Main-card-hotels";

const HotelsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </Slider>
    </div>
  );
};

export default HotelsSlider;
