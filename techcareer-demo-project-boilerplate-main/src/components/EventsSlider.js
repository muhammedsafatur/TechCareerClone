import React from 'react';
import Slider from "react-slick"; // Make sure to install react-slick and slick-carousel

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function EventsSlider() {
  const ArrowButton = ({ direction, onClick }) => {
    return (
      <div
        onClick={onClick}
        style={{
          position: "absolute",
          top: "50%",
          [direction]: "-50px",
          transform: "translateY(-50%)",
          backgroundColor: "#FFFF",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        <span style={{ color: "#00b666", fontSize: "20px" }}>
          {direction === "left" ? "<" : ">"}
        </span>
      </div>
    );
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowButton direction="right" />,
    prevArrow: <ArrowButton direction="left" />,
  };

  // Slider içeriği
  const slides = [
    {
      image: "https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2F1112_412_2_cd52574011%2F1112_412_2_cd52574011.png&w=1200&q=100",
      url: "https://survey.alchemer.com/s3/8068418/N240021",
    },
    {
      image: "https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2Fsenior_aday_tecrubeli_yazilimci_2630787120%2Fsenior_aday_tecrubeli_yazilimci_2630787120.png&w=1200&q=100",
      url: "https://kariyer.typeform.com/to/D3yn9U0w?typeform-source=www.techcareer.net",
    },
    {
      image: "https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FTR_1112_412_de17b90249%2FTR_1112_412_de17b90249.png&w=1200&q=100",
      url: "https://www.techcareer.net/dictionary",
    },
    {
      image: "https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FBanner_TR_1112_412_6c2ce3564b%2FBanner_TR_1112_412_6c2ce3564b.png&w=1200&q=100",
      url: "https://www.techcareer.net/courses",
    },
    {
      image: "https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2Fluxoft_hackathon_1112x412_3468c22c84%2Fluxoft_hackathon_1112x412_3468c22c84.png&w=1200&q=100",
      url: "https://www.techcareer.net/hackathon/luxoft-parking-hackathon",
    },
  ];

  return (
    <div style={styles.wrapper}>
      {/* Ek görseller */}
      <div style={styles.shapeDots}>
        <img
          src="assets/shape-dots.svg"
          alt="Dots Shape"
          style={{ width: "50px", height: "50px", marginLeft: "330px" }}
        />
      </div>
      <div style={styles.kesikCizgi}>
        <img
          src="assets/kesik-yan-cizgi.svg"
          alt="Kesik Çizgi"
          style={{ width: "142px", height: "142px", marginRight: "250px" }}
        />
      </div>

      {/* Slider */}
      <div style={styles.content}>
        <Slider {...settings} style={styles.slider}>
          {slides.map((slide, index) => (
            <div key={index} style={styles.contentBox}>
              <a href={slide.url} target="_blank" rel="noopener noreferrer">
                <img src={slide.image} alt={`Slide ${index + 1}`} style={styles.image} />
              </a>
            </div>
          ))}
        </Slider>
      </div>

      {/* Alt Mavi Bar */}
      <div style={styles.bottomBar}></div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    width: "100vw",
    margin: "0 auto",
    backgroundColor: "rgb(246, 248, 255)",
    overflow: "hidden",
  },
  shapeDots: {
    position: "absolute",
    top: "20px",
    left: "2px",
    zIndex: 5,
  },
  kesikCizgi: {
    position: "absolute",
    top: "20px",
    right: "20px",
    zIndex: 5,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "0",
    position: "relative",
  },
  slider: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  contentBox: {
    width: "100%",
    height: "400px",
    margin: "0",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #e0e0e0",
    borderRadius: "12px",
    boxShadow: "4px 4px 0px 2px rgba(0, 182, 102, 0.6)",
    backgroundColor: "#fff",
  },
  image: {
    width: "auto",
    maxHeight: "100%",
    objectFit: "contain",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  bottomBar: {
    width: "100%",
    height: "100px",
    backgroundColor: "#293349",
    marginTop: "5px",
  },
};

export default EventsSlider;
