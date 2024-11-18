import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function EtkinlikCard() {
  return (
    <Card
      sx={{
        width: '328px',        // Fixed width
        height: '519px',       // Fixed height
        top: '20px',           // Top positioning
        left: '20px',          // Left positioning
        gap: '0px',            // Gap between children (not necessary in this case)
        borderRadius: '16px 16px 0px 0px',  // Border radius for top corners
        border: '1px solid',  // Border style (top border)
        opacity: 1,            // Opacity, set to 1 to make it visible (0 for hidden)
        position: 'relative',  // To apply the top/left positioning
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
