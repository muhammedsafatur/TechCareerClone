import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { CalendarToday } from '@mui/icons-material';  // Calendar icon import edildi
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
function CustomCard({ title, description, tags, buttonText, imageUrl, eventdate, lastdate }) {
  return (
    
    <Box
      sx={{
        width: '328px', // Sabit genişlik
        height: '519px', // Kartın toplam yüksekliği
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // İçeriği üstten başlatıyoruz
        alignItems: 'center',
        padding: '0',
        backgroundColor: '#FFFFFF',
        border: '1px solid #293349',
        borderRadius: '16px 16px 0 0', // Kartın üst köşeleri yuvarlatılmış
        boxSizing: 'border-box',
        margin: '10px',
        position: 'relative',
        overflow: 'hidden', // Kartın yuvarlak köşeleri dışına taşmayı engeller
      }}
    >
{/* Banner Image with Figma's CSS values */}
<Box
  sx={{
    width: '328px', // Genişlik 328px
    height: '171px', // Yükseklik sabit 171px
    padding: '16px 0px 0px 0px', // Padding yalnızca üst taraftan 16px
    gap: '0px', // gap sıfırlandı
    backgroundImage: `url(${imageUrl})`, // Resim URL'si
    backgroundSize: 'cover', // Görselin kutuya sığacak şekilde boyutlandırılması
    backgroundPosition: 'center', // Görselin ortalanması
    position: 'relative', // Pozisyon ayarı
    border: '1px solid rgba(216, 216, 216, 1)', // Figma'dan gelen border
  }}
>
  {/* Bookmark Button */}
  <Button
    sx={{
      position: 'absolute', // Pozisyonu sabitle
      top: '8px', // Üstten boşluk
      right: '8px', // Sağdan boşluk
      backgroundColor: '#FFFFFF', // Beyaz arka plan
      borderRadius: '50%', // Yuvarlak buton
      width: '40px', // Genişlik ve yükseklik
      height: '40px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Hafif gölge
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      minWidth: 0,
      '&:hover': {
        backgroundColor: '#F0F0F0', // Hover durumunda arka plan rengi
      },
    }}
  >
    <BookmarkBorderOutlinedIcon sx={{ color: '#293349', fontSize: '24px' }} />
  </Button>
</Box>



      {/* Content Area */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '16px',
          gap: '16px', // Flex gap'ini küçük tutarak öğeler arasındaki mesafeyi kontrol et
          width: '328px',
          height: '348px',
        }}
      >
        {/* Tags Section */}
        <Box sx={{width: '296px', gap: '8px', display: 'flex', flexDirection: 'row', justifyContent: 'left-center' }}>
          {tags.map((tag, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2px 15px',
                width: '34px',
                height: '26px',
                border: '1px solid #293349',
                borderRadius: '16px',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#293349' }}>{tag}</Typography>
            </Box>
          ))}
        </Box>

        {/* Event Date */}
        {eventdate && (
          <Box sx={{ width: '296px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4px' }}>
            <CalendarToday sx={{ color: '#1D1D1D', fontSize: '18px' }} /> {/* Calendar Icon */}
            <Typography sx={{ fontSize: '12px', color: '#1D1D1D' }}>{eventdate}</Typography> {/* Event Date */}
          </Box>
        )}

        {/* Title and Description */}
        <Box sx={{ width: '296px', gap: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography variant="h6" sx={{ fontWeight: '500', fontSize: '20px', color: '#1D1D1D' }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: '16px', color: '#878787' }}>
            {description}
          </Typography>
        </Box>

       {/* Date and Calendar Icon */}
<Box 
  sx={{ 
    width: '296px', 
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: '4px',
    borderTop: '1px solid #D8D8D8', // Üst sınır ekledik
    paddingTop: '16px', // Sınırın altındaki boşluk
    marginTop: '16px' // Üstündeki alanı ayırmak için
  }}
>
  <Typography sx={{ fontSize: '16px', color: '#878787', fontWeight: 'bold' }}> SON BAŞVURU TARİHİ:</Typography> 
  <Typography sx={{ paddingLeft: '15px', fontSize: '16px', color: '#1D1D1D' }}>{lastdate}</Typography>
</Box>


        {/* Button */}
        <Box sx={{ width: '296px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#00C26D',
              borderRadius: '4px',
              padding: '4px 52px',
              color: '#FFFFFF',
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CustomCard;
