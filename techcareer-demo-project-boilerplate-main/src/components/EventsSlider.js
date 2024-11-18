import React from 'react';
import Slider from 'react-slick'; // Slick Carousel kütüphanesini içeri aktarıyoruz
import { Box, Container, Button } from '@mui/material'; // Material UI bileşenlerini içeri aktarıyoruz
import 'slick-carousel/slick/slick.css'; // Slick Carousel stil dosyasını içeri aktarıyoruz
import 'slick-carousel/slick/slick-theme.css'; // Slick Carousel tema stil dosyasını içeri aktarıyoruz

// Özel Arrow bileşeni - Slider oklarını özelleştirmek için kullanılır
const CustomArrow = ({ direction, ...props }) => (
  <Box
    {...props} // Arrow bileşenine gelen tüm özellikleri alır
    sx={{
      position: 'absolute', // Okları konumlandırır
      top: '50%', // Okları dikeyde ortalar
      zIndex: 2, // Z-index ile ön planda gösterir
      width: '60px', // Ok genişliği
      height: '60px', // Ok yüksekliği
      backgroundColor: '#ffffff', // Okların arka plan rengi
      borderRadius: '50%', // Okları yuvarlak hale getirir
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Hafif gölge ekler
      display: 'flex', // İçerikleri fleks kutu ile düzenler
      justifyContent: 'center', // Okları yatayda ortalar
      alignItems: 'center', // Okları dikeyde ortalar
      cursor: 'pointer', // Fareyi ok üstüne getirdiğinde işaretçi değişir
      transition: 'all 0.3s ease', // Hover durumunda geçiş animasyonu
      '&:hover': { // Ok üzerine gelindiğinde uygulanacak stil
        transform: 'scale(1.1)', // Ok boyutunu büyütür
      },
      [direction === 'prev' ? 'left' : 'right']: '20px', // Okun yönüne göre konumlandırma (sol/sağ)
      transform: 'translateY(-50%)', // Okları dikeyde tam ortalar
    }}
  >
    <Box
      component="span" // Ok simgesini içeren bir span oluşturur
      sx={{
        fontSize: '28px', // Ok simgesinin font büyüklüğü
        color: '#00C26D', // Yeşil ok rengi
        fontWeight: 'bold', // Ok simgesine kalın yazı tipi uygular
        display: 'block', // Block seviyesinde simge gösterimi
        lineHeight: '1', // Satır yüksekliği
      }}
    > 
      {direction === 'prev' ? '<' : '>'}                                           
    </Box> 
  </Box>
);
  // 'prev' için '<',next' için '>' ok simgeleri
const EventsSlider = () => {
  // Slider içeriği: Slayt verileri
  const slides = [
    {
      id: 1,
      image: "https://cdn.gcp.techcareer.net/luxoft_hackathon_1112x412_3468c22c84/luxoft_hackathon_1112x412_3468c22c84.png", // Slaytın görseli
      link: "https://www.techcareer.net/hackathon/luxoft-parking-hackathon", // Slayta tıklanınca gidilecek link
      alt: "Luxoft Parking Hackathon", // Alternatif metin
    },
    {
      id: 2,
      image: "https://cdn.gcp.techcareer.net/2024_duyurular_1112x412_ccf8c238f3/2024_duyurular_1112x412_ccf8c238f3.png", // Slaytın görseli
      link: "https://survey.alchemer.com/s3/8068418/N240021", // Slayta tıklanınca gidilecek link
      alt: "TechReport2024 Yazılımcı Anketi", // Alternatif metin
    },
  ];

  // Slick Slider ayarları: Slider'ı özelleştirmek için kullanılan yapılandırma
  const settings = {
    dots: true, // Alt kısımdaki dairesel okları gösterir
    infinite: true, // Slaytlar sonsuz döngüde kayar
    speed: 1000, // Slayt geçiş hızı (milisaniye cinsinden)
    slidesToShow: 1, // Ekranda bir seferde gösterilecek slayt sayısı
    slidesToScroll: 1, // Her kaydırmada kaç slayt kayacak
    autoplay: true, // Otomatik kaydırma
    autoplaySpeed: 5000, // Otomatik kaydırma süresi (milisaniye)
    fade: true, // Slaytlar arasında geçiş efektini aktif eder (solma efekti)
    arrows: true, // Okları gösterir
    prevArrow: <CustomArrow direction="prev" />, // Önceki ok bileşeni
    nextArrow: <CustomArrow direction="next" />, // Sonraki ok bileşeni
  };

  return (
    <Box sx={{ backgroundColor: '#F5F9FF', py: 4, position: 'relative' }}>
      {/* Dekoratif Süsler: Slider'ın üzerine eklenmiş grafik öğeleri */}
      <Box sx={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1 }}>
        <img
          src="https://www.techcareer.net/assets/images/call-to-actions/home/shape-dots.svg" // Dekoratif şekil
          alt=""
          style={{ width: '50px', height: '50px' }}
          draggable="false" // Resmin sürüklenmesini engeller
        />
      </Box>
      <Box sx={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1 }}>
        <img
          src="https://www.techcareer.net/assets/images/call-to-actions/home/kesik-yan-cizgi.svg" // Diğer dekoratif öğe
          alt=""
          style={{ width: '142px', height: '142px' }}
          draggable="false" // Resmin sürüklenmesini engeller
        />
      </Box>

      {/* Slider: Slayt içeriklerinin bulunduğu bölüm */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Slider {...settings}>
          {/* Her slaytı döngüye alarak oluşturuyoruz */}
          {slides.map((slide) => (
            <Box key={slide.id}>
              <Button
                component="a" // Linke dönüştürür
                href={slide.link} // Link URL'sini ekler
                sx={{
                  p: 0, // Butonun padding'ini sıfırlar
                  borderRadius: 2, // Butonun köşelerini yuvarlar
                  overflow: 'hidden', // Taşan içeriği gizler
                  display: 'block', // Butonu blok seviyesinde gösterir
                  textDecoration: 'none', // Buton üzerindeki alt çizgiyi kaldırır
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)', // Hover durumunda gölge ekler
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative', // İçerik pozisyonu
                    '&::after': { // Buton üzerine ekstra stil ekler (gölgeleme)
                      content: '""', // Boş içerik ekler
                      position: 'absolute', // Pozisyonu kesinleştirir
                      top: '10px', // Üstten 10px boşluk bırakır
                      right: '-20px', // Sağdan 20px boşluk bırakır
                      bottom: '-20px', // Alttan 20px boşluk bırakır
                      width: 'calc(100% + 20px)', // Gölgenin genişliğini ayarlar
                      height: 'calc(100% + 20px)', // Gölgenin yüksekliğini ayarlar
                      background:
                        'linear-gradient(to bottom right, transparent 50%, #00C26D 100%)', // Gölgeyi yeşil renk geçişiyle oluşturur
                      borderRadius: '12px', // Köşeleri yuvarlar
                      zIndex: -1, // Arka planda gösterir
                    },
                  }}
                >
                  <img
                    src={slide.image} // Slaytın görseli
                    alt={slide.alt} // Alternatif metin
                    style={{
                      width: '100%', // Resmin genişliği konteynırın genişliğini kaplar
                      height: 'auto', // Resmin yüksekliği otomatik olarak ayarlanır
                      maxHeight: '412px', // Maksimum yükseklik sınırı
                      borderRadius: '8px', // Resmin köşelerini yuvarlar
                      objectFit: 'cover', // Resmin kutuya sığması için boyutlandırma
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Resme gölge ekler
                    }}
                    draggable="false" // Resmin sürüklenmesini engeller
                  />
                </Box>
              </Button>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default EventsSlider; // Bileşeni dışa aktarır
