import React from 'react';
import Slider from "react-slick"; 
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
    customPaging: (i) => (
      <div style={{ backgroundColor: "#00b666", borderRadius: "50%", width: "15px", height: "15px" }}></div>
    ),
  };

  const slides = [
    { image: "https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2F1112_412_2_cd52574011%2F1112_412_2_cd52574011.png&w=1200&q=100", url: "https://survey.alchemer.com/s3/8068418/N240021" },
    { image: "https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2Fsenior_aday_tecrubeli_yazilimci_2630787120%2Fsenior_aday_tecrubeli_yazilimci_2630787120.png&w=1200&q=100", url: "https://kariyer.typeform.com/to/D3yn9U0w?typeform-source=www.techcareer.net" },
    { image: "https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FTR_1112_412_de17b90249%2FTR_1112_412_de17b90249.png&w=1200&q=100", url: "https://www.techcareer.net/dictionary" },
    { image: "https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FBanner_TR_1112_412_6c2ce3564b%2FBanner_TR_1112_412_6c2ce3564b.png&w=1200&q=100", url: "https://www.techcareer.net/courses" },
    { image: "https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2Fluxoft_hackathon_1112x412_3468c22c84%2Fluxoft_hackathon_1112x412_3468c22c84.png&w=1200&q=100", url: "https://www.techcareer.net/hackathon/luxoft-parking-hackathon" },
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.shapeDots}>
        <img src="assets/shape-dots.svg" alt="Dots Shape" style={{ width: "40px", height: "40px", marginLeft: "330px" }} />
      </div>
      <div style={styles.kesikCizgi}>
        <img src="assets/kesik-yan-cizgi.svg" alt="Kesik Çizgi" style={{ width: "110px", height: "110px", marginRight: "250px" }} />
      </div>
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
      <div style={styles.bottomBar}></div>

      {/* Mobil CSS stilini buraya ekleyelim */}
      <style>
        {`
          .slick-dots li {
            margin: 0 8px;
          }

          .slick-dots li button {
            margin-bottom: 50px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #00b666;
            border: none;
            outline: none;
            padding: 0;
            opacity: 0.7;
            transition: opacity 0.3s ease;
          }

          .slick-dots li button::before {
            content: '';
          }

          .slick-dots li.slick-active button {
            opacity: 1;
          }

          /* Mobile styles */
          @media (max-width: 768px) {
            .slick-prev, .slick-next {
              width: 30px;
              height: 30px;
              font-size: 16px;
            }

            .contentBox {
              height: 250px;
              padding: 10px;
            }

            .image {
              max-height: 80%;
              object-fit: cover;
            }

            .slick-dots li button {
              width: 10px;
              height: 10px;
            }

            .slick-dots li.slick-active button {
              opacity: 1;
            }

            /* Küçültme: Nokta ve Kesik çizgi */
            .shapeDots img {
              width: 30px;
              height: 30px;
            }

            .kesikCizgi img {
              width: 100px;
              height: 100px;
            }

            .slick-slide {
              overflow: hidden;
            }
          }
        `}
      </style>
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
    border: "2px solid #00b666",
    borderRadius: "12px",
    boxShadow: "0px 10px 20px rgba(0, 182, 102, 0.5)",
    backgroundColor: "#fff",
  },
  image: {
    width: "auto",
    maxHeight: "100%",
    objectFit: "contain",
    borderRadius: "5px",
  },
  bottomBar: {
    width: "100%",
    height: "100px",
    backgroundColor: "#293349",
    marginTop: "5px",
  },
};

export default EventsSlider;
