'use client'
import Form from '../_components/Form'
import { Container, Box, Typography, Divider } from '@mui/material'
import Title from '../_components/Title'

const Contact = () => {
  return (
    <Box
      id={'contacto'}
      sx={{
        background:
          'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(images/contact.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        clipPath: 'polygon(0 0, 100% 10%, 100% 100%, 0% 100%)',
        color: 'common.white',
        py: 15,
      }}
    >
      <Container id='contact'>
        <Title
          title='Contacto'
          color='white'
          subTitle='Ponte en contacto con nosotros y descubre cómo podemos ayudar a hacer realidad tus ideas'
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            justifyContent: 'center',
            alignItems: {
              xs: 'center',
              md: 'flex-start',
            },
            pt: 6,
            gap: 8,
          }}
        >
          <Box
            sx={{
              width: { sx: '100%', md: '330px' },
              display: 'flex',
              flexDirection: 'column',
              textAlign: { xs: 'center', md: 'start' },
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Box
              sx={{
                pt: {
                  xs: 0,
                  md: 6,
                },
              }}
            >
              <Typography sx={{ fontSize: '20px' }}>
                ¿Listo para dar vida a tu proyecto? Completa nuestro formulario
                de contacto o conéctate con nosotros a través de nuestras redes
                sociales. Estamos ansiosos por escuchar tus ideas.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: { sx: '100%', md: '400px' } }}>
            <Form />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
export default Contact
