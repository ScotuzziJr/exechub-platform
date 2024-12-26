import { Box, Button, TextField, Typography } from '@mui/material'

import HeroSectionImage from '../assets/images/HeroSectionImage.jpg'
import NavBar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    
    const handleSearchClick = () => {
      navigate('/form')
    }

  return (
    <>
      <NavBar />

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          backgroundImage: `url('${HeroSectionImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <Typography variant="h2" sx={{ mb: 3 }}>
            Hire smarter, grow faster with ExecHub.
          </Typography>
          
          <Box
            sx={{
              width: "50%"
            }}
          >
          <Typography sx={{ mb: 3 }}>
            ExecHub connects companies with top IT professionals. With a comprehensive database of 
            professional profiles, companies can easily find the perfect fit for their positions, 
            streamlining the hiring process. 
          </Typography>
          </Box>
          <Box
            component="form"
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              maxWidth: '400px',
              width: '100%',
            }}
          >
            <TextField
              fullWidth
              placeholder="Search for professionals..."
              variant="outlined"
              sx={{
                bgcolor: 'white',
                borderRadius: '5px',
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}

              onClick={handleSearchClick}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Hero
