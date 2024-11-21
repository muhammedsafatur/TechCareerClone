import React from "react";
import PrimarySearchAppBar from "../components/Navbar";
import EventsSlider from "../components/EventsSlider";
import CardContainer from "../components/CardContainer";
import MiniSlider from "../components/MiniSlider";

function Home() {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <PrimarySearchAppBar />

     
      <EventsSlider />
      
      
      <div
        className="home-section"
        style={{
          backgroundColor: "#F5F9FF",
          paddingBottom: "100px", // Alt bar için boşluk ekleyin
        }}
      ><MiniSlider/>
        {/* Başlık: Başvurunu Bekleyen Etkinlikler */}
        <h1 className="section-title" backgroundColor="rgb(246, 246, 246)" style={styles.title}>Başvurunu Bekleyen Etkinlikler</h1>
        <CardContainer />

        {/* Tüm Etkinlikleri Gör Butonu */}
        <div style={styles.buttonContainer}>
          <a
            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-disableElevation"
            href="https://www.techcareer.net/events"
            data-test="events-section-all-events"
            style={styles.button}
          >
            Tüm Etkinlikleri Gör
          </a>
        </div>
      </div>
    </div>
  );
}

// Stil ekleme
const styles = {
  title: {
    textAlign: "center", // Ortaya hizalama
    fontSize: "36px", // Başlık boyutunu büyütme
    fontWeight: "bold", // Kalın yazı tipi
    marginTop: "20px", // Üstten biraz boşluk bırak
    backgroundColor:"F5F9FF"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center", // Butonu ortalar
    marginTop: "30px", // Üstten boşluk bırak
  },
  button: {
    padding: "10px 20px", // Buton içi dolgu
    backgroundColor: "#00C26D", // Buton rengi
    color: "#fff", // Yazı rengi beyaz
    border: "none", // Kenarlık yok
    borderRadius: "5px", // Yuvarlak köşeler
    fontSize: "18px", // Font büyüklüğü
    textDecoration: "none", // Link alt çizgisini kaldır
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer", // İmleç değişimi
  },
};

export default Home;
