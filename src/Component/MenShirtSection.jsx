import React, { useState } from 'react';
import {
  Box, Grid, Typography, Select, MenuItem, Button, IconButton, useMediaQuery
} from '@mui/material';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import shirt1 from '../Assets/Images/Shirt_1.webp';
import shirt2 from '../Assets/Images/shirt-2.webp';
import shirt3 from '../Assets/Images/shirt-3.webp';
import shirt4 from '../Assets/Images/shirt-4.webp';

const shirts = [
  {
    id: 1,
    name: "Kipling Shirt - Khaki",
    fabric: "LINEN",
    price: 5000,
    img: shirt1,
  },
  {
    id: 2,
    name: "Mistari Shirt - Light Blue & White Print",
    fabric: "COTTON BLEND",
    price: 4000,
    img: shirt2,
  },
  {
    id: 3,
    name: "Half Sleeves Shirt - Blue & Red Stripes",
    fabric: "LINEN BLEND",
    price: 4500,
    img: shirt3,
  },
  {
    id: 4,
    name: "Mistari Shirt - Beige & Black Print",
    fabric: "LINEN BLEND",
    price: 4500,
    img: shirt4,
  }
];

const MenShirtSection = () => {
    const navigate = useNavigate();

  const [view, setView] = useState(4); // 2 or 4 column layout
  const [sortOrder, setSortOrder] = useState("featured");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sortedShirts = [...shirts].sort((a, b) => {
    if (sortOrder === "low") return a.price - b.price;
    if (sortOrder === "high") return b.price - a.price;
    return 0;
  });

  return (
    <Box p={isMobile ? 1 : 2}>
      {/* Top Bar */}
      <Box
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'}
        justifyContent="space-between"
        alignItems={isMobile ? 'flex-start' : 'center'}
        mb={2}
        gap={1}
      >
        <Typography variant="h6">SHIRTS FOR MEN</Typography>
        <Box display="flex" flexWrap="wrap" alignItems="center" gap={1}>
          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            size="small"
          >
            <MenuItem value="featured">Featured</MenuItem>
            <MenuItem value="low">Price: Low to High</MenuItem>
            <MenuItem value="high">Price: High to Low</MenuItem>
          </Select>
          <Button variant="outlined">FILTERS</Button>
          <IconButton onClick={() => setView(2)}><ViewModuleIcon /></IconButton>
          <IconButton onClick={() => setView(4)}><ViewComfyIcon /></IconButton>
        </Box>
      </Box>

      {/* Shirts Grid */}
      <Grid container spacing={3} justifyContent="center">
        {sortedShirts.map((shirt) => (
          <Grid
            item
            key={shirt.id}
            xs={12}
            sm={view === 4 ? 6 : 6}  // 2 per row on sm (or always 2 in your example)
            md={view === 4 ? 3 : 6}  // 4 per row on md if view=4, else 2
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box
             onClick={() => navigate(`/shirt/${shirt.id}`)}
              display="flex"
              flexDirection="column"
              border="1px solid #eee"
              borderRadius="8px"
              overflow="hidden"
              sx={{
                width: 280,     // fixed width to keep all equal width
                height: 420,    // fixed height
                boxSizing: 'border-box',
                backgroundColor: '#fff',
                boxShadow: '0 2px 8px rgb(0 0 0 / 0.1)',
                 cursor: 'pointer'
              }}
            >
              <Box sx={{ height: 240, width: '100%' }}>
                <img
                  src={shirt.img}
                  alt={shirt.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>

              <Box
                p={1}
                display="flex"
                flexDirection="column"
                // justifyContent="space-between"
                // flexGrow={1}
                sx={{ overflow: 'hidden' }}
              >
                <Typography
                  fontSize="12px"
                  color="gray"
                  sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                >
                  {shirt.fabric}
                </Typography>

                <Box
                  sx={{
                    flexGrow: 1,
                    overflowY: 'auto',
                    // maxHeight: 40,
                  }}
                >
                  <Typography
                    fontWeight="500"
                    fontSize="14px"
                    sx={{ wordBreak: 'break-word' }}
                  >
                    {shirt.name}
                  </Typography>
                </Box>

                <Typography >₹ {shirt.price.toLocaleString()}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MenShirtSection;
