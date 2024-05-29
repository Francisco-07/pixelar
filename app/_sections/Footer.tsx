import { Typography, Box, Container, Divider } from '@mui/material'
import { GitHub } from '@mui/icons-material'
import Img from '../_components/Img'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Link from 'next/link'

const Footer = () => {
  const media = [
    {
      link: '/',
      icon: <InstagramIcon />,
    },
    {
      link: '/',
      icon: <XIcon />,
    },
    {
      link: '/',
      icon: <LinkedInIcon />,
    },
    {
      link: '/',
      icon: <YouTubeIcon />,
    },
  ]
  return (
    <footer>
      <Box
        sx={{ bgcolor: 'common.black', pt: 15, mt: -1, color: 'common.white' }}
      >
        <Container>
          <Box
            sx={{
              display: 'flex',

              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Box
              sx={{
                pb: 5,
                '& div': {
                  width: {
                    xs: '260px',
                    sm: '300px',
                    md: '350px',
                  },
                },
              }}
            >
              <Link href={'/'}>
                <Img src='images/logo.svg' alt='logo' />
              </Link>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'flex-end',
                width: '100%',
                flexDirection: {
                  xs: 'column',
                  sm: 'row',
                },
                alignItems: {
                  xs: 'center',
                  sm: 'flex-start',
                },
                textAlign: {
                  xs: 'center',
                  sm: 'start',
                },
              }}
            >
              <Box sx={{ flex: 0.3 }}>
                <Typography
                  variant='h3'
                  sx={{
                    mb: 1.5,
                  }}
                >
                  Contacto
                </Typography>
                <Typography>+54 356 74 12 08​</Typography>
                <Typography>info@pixelar.com</Typography>
                <Typography>Guemes, Catalanes, 725</Typography>
              </Box>
              <Box sx={{ flex: 0.3 }}>
                <Typography
                  variant='h3'
                  sx={{
                    mb: 1.5,
                  }}
                >
                  Areas
                </Typography>
                <Typography>Desarrollo web</Typography>
                <Typography>UX/UI design</Typography>
                <Typography>Marketing digital</Typography>
                <Typography>SEO</Typography>
                <Typography>Hosting y dominios</Typography>
                <Typography>CMS</Typography>
              </Box>
              <Box
                sx={{
                  flex: 0.3,
                  '& a:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                <Typography
                  variant='h3'
                  sx={{
                    mb: 1.5,
                  }}
                >
                  Empresa
                </Typography>
                <Link href={'#acerca'}>
                  <Typography>Acerca de</Typography>
                </Link>
                <Link href={'#servicios'}>
                  <Typography>Servicios</Typography>
                </Link>
                <Link href={'#portfolio'}>
                  <Typography>Portfolio</Typography>
                </Link>
                <Link href={'#contacto'}>
                  <Typography>Contacto</Typography>
                </Link>
                <Link href={'#faq'}>
                  <Typography>FAQ</Typography>
                </Link>
                <Link href={'#testimoniales'}>
                  <Typography>Referencias</Typography>
                </Link>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ bgcolor: 'common.white', mt: 4 }} />
          <Box
            sx={{
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              py: 5,
              '& svg': {
                fontSize: 45,
                '&:hover': {
                  color: 'primary.main',
                },
              },
            }}
          >
            {media.map((socialM, i) => (
              <Link key={i} href={socialM.link}>
                {socialM.icon}
              </Link>
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              pb: 5,
              '& h6': {
                display: 'flex',
                textAlign: 'center',
                justifyContent: 'center',
              },
            }}
          >
            <a target='_blank' href='https://github.com/Francisco-07'>
              <Typography
                variant='h6'
                sx={{
                  '&:hover svg': {
                    color: 'primary.main',
                  },
                }}
              >
                Desarrollo Francisco Garciarena
                <GitHub sx={{ ml: 1, fontSize: 35 }} />
              </Typography>
            </a>
          </Box>
        </Container>
      </Box>
    </footer>
  )
}
export default Footer
