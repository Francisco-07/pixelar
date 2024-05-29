'use client'
import Title from '../_components/Title'
import { Container, Box, Typography } from '@mui/material'
import Img from '../_components/Img'
import Btn from '../_components/Btn'

const About = () => {
  return (
    <Container
      id={'acerca'}
      sx={{ py: 15, display: 'flex', flexDirection: 'column' }}
    >
      <Title
        title='Sobre nosotros'
        subTitle='Transformamos tus ideas en páginas modernas y dinámicas'
        color='black'
      />
      <Box
        sx={{
          display: 'flex',
          pt: 6,
          flexDirection: { xs: 'column-reverse', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'start' },
          }}
        >
          <Typography variant='h5' sx={{ letterSpacing: 5 }}>
            ESPECIALISTAS EN DISEÑO DE PÁGINAS WEB
          </Typography>
          <Typography variant='h4'>PIXELAR DISEÑO WEB</Typography>
          <Typography>
            En Pixelar, ofrecemos servicios especializados de diseño web.
            Desarrollamos páginas de alto impacto con el objetivo de maximizar
            resultados. Nos destacamos por generar soluciones a medida y ofrecer
            un diseño personalizado para cada cliente.
          </Typography>
          <Btn contained={false} href='#servicios'>
            Servicios
          </Btn>
        </Box>
        <Box
          sx={{
            '& div': {
              width: {
                xs: '280px',
                sm: '300px',
                md: '400px',
              },
              height: '100%',
            },
          }}
        >
          <Img src='/images/responsive.jpg' alt='responsive' />
        </Box>
      </Box>
    </Container>
  )
}
export default About
