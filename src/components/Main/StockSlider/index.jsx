import Slider from "react-slick";
import StockCard from "../../Cards/Main-card-stock";

const StockSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return ( 
        <Slider {...settings}>
            <StockCard/>
            <StockCard/>
            <StockCard/>
            <StockCard/>
            <StockCard/>
            <StockCard/>
        </Slider>
     );
}

export default StockSlider;