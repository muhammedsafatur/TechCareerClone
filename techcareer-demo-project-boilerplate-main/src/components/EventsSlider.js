import React from 'react';
import Slider from "react-slick"; // Make sure to install react-slick and slick-carousel

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function EventsSlider() {
  // Sağ ve Sol ok tuşları bileşeni
  const ArrowButton = ({ direction, onClick }) => {
    return (
      <div
        onClick={onClick}
        style={{
          position: "absolute",
          top: "50%",
          [direction]: "20px", // Sol veya sağda olacak şekilde konumlandırma
          transform: "translateY(-50%)",
          backgroundColor: "#FFFF",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 10, // Yön oklarının diğer içeriklerin üstünde görünmesini sağlar
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
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowButton direction="right" />, // Sağ yön ok
    prevArrow: <ArrowButton direction="left" />,  // Sol yön ok
  };

  return (
    <div style={styles.wrapper}>
      {/* Ana İçerik */}
      <div style={styles.content}>
        {/* Slider Component */}
        <Slider {...settings} style={styles.slider}>
          <div style={styles.contentBox}>
            {/* Tek bir görsel gösterilecek */}
            <img
              src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2F1112_412_2_cd52574011%2F1112_412_2_cd52574011.png&w=1200&q=100"
              alt="Slide 1"
              style={styles.image}
            />
          </div>
          <div style={styles.contentBox}>
            <img
              src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2F1112_412_2_cd52574011%2F1112_412_2_cd52574011.png&w=1200&q=100"
              alt="Slide 2"
              style={styles.image}
            />
          </div>
          <div style={styles.contentBox}>
            <img
              src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2F1112_412_2_cd52574011%2F1112_412_2_cd52574011.png&w=1200&q=100"
              alt="Slide 3"
              style={styles.image}
            />
          </div>
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
    width: "auto", // Tasarıma uygun genişlik
    marginTop: "auto",
    marginLeft: "auto", // Center the wrapper horizontally
    marginRight: "auto", // Center the wrapper horizontally
    backgroundColor: "rgb(246, 248, 255)",
    height: "auto", // Arka planın tüm alana yayılmasını sağla
    backgroundImage: "/public/assets/Carousel.png", // Buraya resim URL'sini ekleyebilirsiniz
    backgroundSize: "fit", // Arka planın tam ekranı kaplamasını sağlar
    backgroundPosition: "center", // Arka planın ortalanmasını sağlar
    overflow: "hidden", // İçeriğin taşmasını engeller
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
  },

  dots: {
    flex: 1,
    backgroundColor: "#293349",
    height: "5px",
  },

  line: {
    flex: 5,
    backgroundColor: "#00C26D",
    height: "auto",
  },

  content: {
    display: "auto",
    alignItems: "auto",
    justifyContent: "auto", // Center the content horizontally
    marginTop: "auto",
    height: "auto", // Dikey boyutu ayarladık
    marginBottom: "0", // Alt bar ile olan mesafeyi sıfırladık
    position: "relative", // Butonlar için gerekli konumlandırma
    width: "auto", // İçeriğin genişliği
  },

  slider: {
    width: "auto" ,// İçerik genişliği tam ekran
    height: "auto", // Yükseklik tam ekran
  },

  contentBox: {
    width: "auto", // İçeriğin genişliği
    height: "auto", // Sabit yükseklik, gerekirse güncellenebilir
    backgroundColor: "#293349",
    borderRight: "15px solid #00C26D",
    borderBottom: "15px solid #00C26D",
    display: "flex", // Görseller için düzen
    justifyContent: "center", // Görseli ortalama
    alignItems: "center",
    padding: "10px",
    overflow: "hidden",
    margin: "auto", // Center the contentBox horizontally
  },

  image: {
    width: "auto", // Görselin genişliği %100
    height: "auto", // Görselin yüksekliği otomatik ayar
    objectFit: "cover", // Ensures the image maintains aspect ratio
    borderRadius: "5px", // Görselin köşelerini yuvarlama
  },

  bottomBar: {
    width: "auto", // Full width
    height: "100px",
    backgroundColor: "#293349",
    marginTop: "20px", // Space between the slider and bottom bar
  },
};

export default EventsSlider;
