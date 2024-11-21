import React from 'react';
import { Box } from '@mui/material';
import CustomCard from './CustomCard'; // CustomCard bileşenini içe aktar

function CardContainer() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',          // Kartlar arasında boşluk
        flexWrap: 'wrap',     // Kartlar satırlara sığacak şekilde saracak
        justifyContent: 'center', // Kartları yatayda ortala
        padding: '20px',      // Container etrafında padding ekledik
        marginTop: '20px',    // Üstten biraz boşluk bırakıldı
      }}
    >
      {/* Kart 1 */}
      <CustomCard
        title="FMSS Bilişim Android Development Bootcamp with Jetpack"
        description="Ücretsiz Bootcamp'e katıl, Jr. Android Developer ol!"
        tags={['Bootcamp', 'İş Fırsatı']}
        buttonText="Başvur"
        imageUrl="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FFMSS_Bilisim_Android_Bootcamp_336x180_a109cd4ab2%2FFMSS_Bilisim_Android_Bootcamp_336x180_a109cd4ab2.png&w=384&q=75"
        eventdate="01.01.2025"
        lastdate="01.02.2025"
      />
      
      {/* Kart 2 */}
      <CustomCard
        title="Luxoft Parking Hackathon"
        description="Yarış, Kazan, Luxoft'ta Staj Yap!"
        tags={['Hackathon', 'İş Fırsatı']}
        buttonText="Başvur"
        imageUrl="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2Fluxoft_hackathon_1200x628_35bf3f2190%2Fluxoft_hackathon_1200x628_35bf3f2190.png&w=384&q=75"
        eventdate="01.01.2025"
        lastdate="01.02.2025"
      />
      
      {/* Kart 3 */}
      <CustomCard
        title="Hacettepe Üniversitesi: AI Fest 2024"
        description="Yapay Zeka Topluluğu iş birliğiyle!"
        tags={['Hackathon']}
        buttonText="Başvur"
        imageUrl="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2F1200x628_51_a2bc519679%2F1200x628_51_a2bc519679.png&w=384&q=75"
        eventdate="10.12.2024"
        lastdate="15.12.2024"
      />
    </Box>
  );
}

export default CardContainer;
