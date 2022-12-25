import { useSelector } from "react-redux";
import Slider from "react-slick";
import Card from "../../Cards/Main-card-toor/Card";
// import styles from "./slider.module.scss";

const TourSlider = () => {
  const tours = useSelector((state)=>state.tours.tours)
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
        {tours?.map((item)=>{
          return(
           <Card 
           id = {item._id}
           creatorTour = {item.creatorTour}
           hotelId = {item.hotelId}
           name = {item.name}
           rooms = {item.rooms}
           description = {item.description}
           route = {item.route.MainPointsOfVisit}
           info = {item.info}
           food = {item.food}
           restType = {item.restType}
           beach = {item.beach}
           flight = {item.flight}
           price = {item.info.price}
           />
          )
        })}       
      </Slider>
    </div>
  );
};

export default TourSlider;
