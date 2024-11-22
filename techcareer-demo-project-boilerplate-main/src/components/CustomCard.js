import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { CalendarToday } from '@mui/icons-material';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

function CustomCard({ title, description, tags, buttonText, imageUrl, eventdate, lastdate, buttonMargin }) {
  return (
    <Box
      sx={{
        width: '328px',
        height: '519px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '0',
        backgroundColor: '#FFFFFF',
        border: '1px solid #293349',
        borderRadius: '16px 16px 0 0',
        boxSizing: 'border-box',
        margin: '10px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Banner Image */}
      <Box
        sx={{
          width: '328px',
          height: '171px',
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          border: '1px solid rgba(216, 216, 216, 1)',
        }}
      >
        {/* Bookmark Button */}
        <Button
          sx={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            backgroundColor: '#FFFFFF',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            minWidth: 0,
            '&:hover': {
              backgroundColor: '#F0F0F0',
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
          gap: '16px',
          width: '328px',
          height: '348px',
        }}
      >
        {/* Tags Section */}
        <Box sx={{ width: '296px', gap: '8px', display: 'flex', flexDirection: 'row', justifyContent: 'left-center' }}>
          {tags.map((tag, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2px 15px',
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
            <CalendarToday sx={{ color: '#1D1D1D', fontSize: '18px' }} />
            <Typography sx={{ fontSize: '12px', color: '#1D1D1D' }}>{eventdate}</Typography>
          </Box>
        )}

        {/* Title and Description */}
        <Box sx={{ width: '296px', gap: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography variant="h6" sx={{ fontWeight: '500', fontSize: '20px', color: '#1D1D1D' }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: '16px', color: '#878787' }}>{description}</Typography>
        </Box>

        {/* Last Date */}
        <Box
          sx={{
            width: '296px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '4px',
            borderTop: '1px solid #D8D8D8',
            paddingTop: '16px',
            marginTop: '16px',
          }}
        >
          <Typography sx={{ fontSize: '16px', color: '#878787', fontWeight: 'bold' }}>SON BAŞVURU TARİHİ:</Typography>
          <Typography sx={{ paddingLeft: '15px', fontSize: '16px', color: '#1D1D1D' }}>{lastdate}</Typography>
        </Box>

        {/* Button */}
        <Box sx={{ width: '296px', display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#00C26D',
              borderRadius: '4px',
              padding: '4px 52px',
              color: '#FFFFFF',
              margin: buttonMargin || '16px 0', // Varsayılan margin
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
