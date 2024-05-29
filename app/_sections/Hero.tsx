'use client'
import { Box, Container, Typography, Divider } from '@mui/material'
import Btn from '../_components/Btn'

import Img from '../_components/Img'
const Hero = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        background:
          'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(images/hero.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        clipPath: 'polygon(100% 0, 100% 85%, 52% 96%, 0 100%, 0 0)',
        color: 'common.white',
        position: 'relative',
      }}
    >
      <Container
        sx={{
          pt: 17,
        }}
      >
        <Box
          sx={{
            '& h1': {
              fontSize: {
                xs: '80px',
                sm: '200px',
              },
            },
          }}
        >
          <Typography variant='h1'>Pixelar</Typography>
        </Box>
        <Divider sx={{ bgcolor: 'common.white' }} />
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            alignItems: 'flex-start',
          }}
        >
          <Box>
            <Typography variant='h3'>Creamos experiencias digitales</Typography>
            <Typography variant='h5'>
              Transformamos conceptos en realidad digital, una página a la vez.
            </Typography>
          </Box>
          <Btn contained={true} href='#contacto' fontSize={22}>
            Contactanos
          </Btn>
        </Box>
      </Container>
    </Box>
  )
}
export default Hero
