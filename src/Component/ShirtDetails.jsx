import { useParams } from 'react-router-dom';
import { Box, Typography, Button, Grid, Chip, TextField, Divider } from '@mui/material';
import shirt1 from '../Assets/Images/Shirt_1.webp';
import shirt2 from '../Assets/Images/shirt-2.webp';

// Dummy data
const shirts = [
  {
    id: 1,
    name: 'Kipling Shirt - Khaki',
    price: 5000,
    color: 'Khaki',
    images: [shirt1, shirt2],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    material: '100% Linen',
    description:
      'An everyday classic with a spirit of discovery stitched in. Blending the calm of the desert with the wild spirit of the jungle...',
  },
];

function ShirtDetails() {
  const { id } = useParams();
  const shirt = shirts.find((item) => item.id === parseInt(id));

  if (!shirt) return <Typography>Shirt not found</Typography>;

  return (
    <Grid container spacing={4} padding={4}>
      {/* Left Images Section */}
      <Grid item xs={12} md={6}>
        <Box>
          <img src={shirt.images[0]} alt="main" style={{ width: '100%', borderRadius: 4 }} />
          <Box display="flex" gap={2} mt={2}>
            {shirt.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                style={{ width: '80px', height: '80px', borderRadius: 4, objectFit: 'cover', cursor: 'pointer' }}
              />
            ))}
          </Box>
        </Box>
      </Grid>

      {/* Right Info Section */}
      <Grid item xs={12} md={6}>
        <Typography variant="h5" fontWeight={600}>{shirt.name}</Typography>
        <Typography variant="body1" color="text.secondary" mt={1}>
          An everyday classic with a spirit of discovery stitched in. Blending the calm of the desert with the wild spirit of the jungle...
        </Typography>

        <Typography variant="h6" mt={2}>₹ {shirt.price.toLocaleString()}</Typography>

        <Typography variant="subtitle2" mt={2}><strong>Colour:</strong> {shirt.color}</Typography>
        <Typography variant="subtitle2" mt={1}><strong>Material:</strong> {shirt.material}</Typography>

        <Typography mt={3} fontWeight={500}>Size:</Typography>
        <Box display="flex" gap={1} flexWrap="wrap" mt={1}>
          {shirt.sizes.map((size) => (
            <Chip
              key={size}
              label={size}
              variant="outlined"
              sx={{ borderRadius: 1 }}
            />
          ))}
        </Box>

        <Box mt={3}>
          <Typography variant="body2" mb={1}>Delivery Date</Typography>
          <Box display="flex" gap={2} alignItems="center">
            <TextField size="small" placeholder="Enter your PIN code" />
            <Button variant="text">CHECK</Button>
          </Box>
          <Typography variant="caption" color="text.secondary" mt={1}>
            Express delivery available in Delhi, Mumbai & Bangalore.
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Button variant="contained" fullWidth size="large" sx={{ backgroundColor: '#000', color: '#fff' }}>
          ADD TO BAG
        </Button>
      </Grid>
    </Grid>
  );
}

export default ShirtDetails;
    