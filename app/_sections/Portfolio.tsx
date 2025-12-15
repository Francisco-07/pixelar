'use client'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Img from '../_components/Img'
import Title from '../_components/Title'
import Link from 'next/link'
import Btn from '../_components/Btn'

const Portfolio = () => {
  const data = [
    {
      title: 'CMR',
    },
    {
      title: 'Photoblog',
    },
    {
      title: 'Pixelar',
    },
  ]

  return (
    <Container
      id={'portfolio'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        py: 15,
        bgcolor: 'common.white',
      }}
    >
      <Title
        title='Portfolio'
        subTitle='Explora nuestros proyectos y experimenta la calidad de nuestras creaciones web'
        color='black'
      />
      <Box
        sx={{
          pt: 6,
          display: 'flex',
          position: 'relative',
          gap: 5,
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
            flex: 0.3,
          }}
        >
          <Box
            sx={{
              position: 'sticky',
              height: '200px',
              display: 'flex',
              top: '10%',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              '& svg': {
                fontSize: 60,
                transform: 'rotate(180deg)',
                color: 'primary.main',
              },
              '.border': {
                backgroundColor: 'primary.main',
                width: '45px',
                height: '4px',
              },
            }}
          >
            <Typography variant='h3'>Casos de exito</Typography>
            <span className='border' />
            <Btn contained={false} href='#testimoniales' fontSize={17}>
              Nuestros clientes
            </Btn>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 5,
            flex: {
              xs: '1',
              md: '0.7',
            },
          }}
        >
          {data.map((info, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
                width: '100%',
                height: {
                  xs: '200px',
                  sm: '300px',
                },
                gap: 2.5,
                p: 5,
                background:
                  `linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)),url(images/pagina${i}.jpg)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderRadius: 2,
                boxShadow: 8,
                '&:hover': {
                  background:
                  `linear-gradient(rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80)),url(images/pagina${i}.jpg)`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  borderRadius: 2,
                  '& .link': {
                    color: 'primary.main',
                    textDecoration: 'underline',
                  },
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'flex-end',
                  color: 'common.white',
                }}
              >
                <Typography variant='h3'>{info.title}</Typography>
                <Link href={'/'}>
                  <Typography
                    className='link'
                    sx={{
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                  >
                    {'Ver la pagina >>'}
                  </Typography>
                </Link>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  )
}
export default Portfolio
