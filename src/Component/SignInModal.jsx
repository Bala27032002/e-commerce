import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';

const SignInModal = ({ open, handleClose }) => {
  const [input, setInput] = useState('');

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    borderRadius: 1.5,
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        {/* Close button */}
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Logo */}
        <Typography
          variant="h6"
          textAlign="center"
          letterSpacing={5}
          fontWeight="bold"
          mt={-4}
        >
          NICOBAR
        </Typography>

        {/* Greeting */}
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="500"
          mt={2}
          color="#1e1e1e"
        >
          Hello there<span style={{ color: '#1e1e1e' }}>!</span>
        </Typography>

        <Typography
          variant="body2"
          textAlign="center"
          color="gray"
          mt={1}
          mb={3}
        >
          Sign in with
        </Typography>

        {/* Input field */}
        <TextField
          fullWidth
          placeholder="Email ID / Mobile number"
          variant="standard"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          InputProps={{
            style: { fontSize: '14px' }
          }}
        />

        {/* Continue Button */}
        <Button
          fullWidth
          variant="contained"
          disabled
          sx={{
            mt: 3,
            mb: 2,
                color: 'white',
            fontWeight: 'bold',
            fontSize: '14px',
          }}
        >
          CONTINUE
        </Button>

        {/* OR Divider */}
        <Box display="flex" alignItems="center" mb={2}>
          <Divider sx={{ flex: 1 }} />
          <Typography sx={{ mx: 2, fontSize: '14px', color: '#999' }}>or</Typography>
          <Divider sx={{ flex: 1 }} />
        </Box>

        {/* Google Button */}
        <Button
          fullWidth
          variant="outlined"
          sx={{ textTransform: 'none', fontSize: '14px' }}
          startIcon={<GoogleIcon />}
        >
          Continue with Google
        </Button>
      </Box>
    </Modal>
  );
};

export default SignInModal;
