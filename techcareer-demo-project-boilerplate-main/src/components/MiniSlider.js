import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./MiniSlider.css";

// Sağ buton
function ButtonRight(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} btn`} onClick={onClick}>
      <img src="/assets/butonlar/button-right1.png" alt="Right Button" />
    </div>
  );
}

// Sol buton
function ButtonLeft(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} btn`} onClick={onClick}>
      <img src="/assets/butonlar/button-left1.png" alt="Left Button" />
    </div>
  );
}

function MiniSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Tek seferde gösterilen kart
    slidesToScroll: 1, // Kaçar kaçar kayıyor
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <ButtonRight />,
    prevArrow: <ButtonLeft />,
  };

  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img src="https://www.techcareer.net/_next/image?url=%2Fassets%2Fimages%2Freferences%2F1.png&w=256&q=100" alt="logo1" />
        </div>
        <div>
          <img src="https://www.techcareer.net/_next/image?url=%2Fassets%2Fimages%2Freferences%2F8.png&w=256&q=100" alt="logo2" />
        </div>
        <div>
          <img src="https://www.techcareer.net/_next/image?url=%2Fassets%2Fimages%2Freferences%2F12.png&w=256&q=100" alt="logo3" />
        </div>
        <div>
          <img src="https://www.techcareer.net/_next/image?url=%2Fassets%2Fimages%2Freferences%2F15.png&w=256&q=100" alt="logo4" />
        </div>
        <div>
          <img src="https://www.techcareer.net/_next/image?url=%2Fassets%2Fimages%2Freferences%2F16.png&w=256&q=100" alt="logo5" />
        </div>
        <div>
          <img src="https://www.techcareer.net/_next/image?url=%2Fassets%2Fimages%2Freferences%2F19.png&w=256&q=100" alt="logo6" />
        </div>
        <div>
          <img src="https://www.techcareer.net/_next/image?url=%2Fassets%2Fimages%2Freferences%2F3.png&w=256&q=100" alt="logo7" />
        </div>
        <div>
          <img src="https://www.techcareer.net/_next/image?url=%2Fassets%2Fimages%2Freferences%2F21.png&w=256&q=100" alt="logo8" />
        </div>
        <div>
          <img src="https://www.techcareer.net/_next/image?url=%2Fassets%2Fimages%2Freferences%2F22.png&w=256&q=100" alt="logo9" />
        </div>
        <div>
          <img src="https://www.techcareer.net/_next/image?url=%2Fassets%2Fimages%2Freferences%2F23.png&w=256&q=100" alt="logo10" />
        </div>
        <div>
          <img src="https://www.techcareer.net/_next/image?url=%2Fassets%2Fimages%2Freferences%2F24.png&w=256&q=100" alt="logo11" />
        </div>
        <div>
          <img src="https://www.techcareer.net/_next/image?url=%2Fassets%2Fimages%2Freferences%2F2.png&w=256&q=100" alt="logo12" />
        </div>
      </Slider>
    </div>
  );
}

export default MiniSlider;
