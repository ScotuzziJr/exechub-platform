import { AppBar, Toolbar, Box, Button } from '@mui/material';

import ExecHubLogo from '../assets/images/ExecHub Logo Branco_1.png'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    const handleForDevelopersClick = () => {
        navigate('/form')
    }

  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar
        sx={{
          height: '64px', // Explicit height for the navbar
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        {/* Adjust the image size without affecting the navbar */}
        <img
          src={ExecHubLogo}
          alt="ExecHub Logo"
          style={{ height: '250px', width: 'auto' }} // Adjust image size
        />

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 3 }}>
            <Button
                sx={{
                color: '#fff',
                textTransform: 'none',
                '&:hover': { bgcolor: 'primary.dark' },
                }}
                onClick={handleForDevelopersClick}
            >
            For developers
          </Button>
          <Button
            sx={{
              color: '#fff',
              textTransform: 'none',
              '&:hover': { bgcolor: 'primary.dark' },
            }}
          >
            About Us
          </Button>
          <Button
            sx={{
              color: '#fff',
              textTransform: 'none',
              '&:hover': { bgcolor: 'primary.dark' },
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
