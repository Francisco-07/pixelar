import { Box, Container, Typography } from '@mui/material'
import Title from '../_components/Title'
import DomainIcon from '@mui/icons-material/Domain'
import SocialDistanceIcon from '@mui/icons-material/SocialDistance'
import CodeIcon from '@mui/icons-material/Code'
import ShieldIcon from '@mui/icons-material/Shield'

const Services = () => {
  const data = [
    {
      title: 'Marketing Digital',
      text: 'Estrategias efectivas de SEO para destacar tu marca.',
      icon: <SocialDistanceIcon />,
    },
    {
      title: 'Hosting y dominio',
      text: 'Nos encargamos del dominio y ofrecemos distintas formas de hosting.',
      icon: <DomainIcon />,
    },
    {
      title: 'Desarrollo & UI',
      text: 'Creando productos efectivos con base en UX y tendencias.',
      icon: <CodeIcon />,
    },
    {
      title: 'Administracion & CMS',
      text: 'CMS que te permiten gestionar tu contenido de manera sencilla y efectiva.',
      icon: <ShieldIcon />,
    },
  ]
  return (
    <Box
      id={'servicios'}
      sx={{
        width: '100vw',
        height: '100%',
        background:
          'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(images/services.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        py: 15,
        color: 'common.white',
        clipPath:
          'polygon(49% 0, 82% 4%, 100% 9%, 100% 100%, 57% 100%,28% 96%,   0 91%,  0 0  )',
      }}
    >
      <Container>
        <Box>
          <Title
            title='Servicios'
            subTitle='Ofrecemos servicios profesionales de diseño y desarrollo web que te ayudarán a destacar en el mundo digital'
            color='white'
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 7,
            pt: 6,
          }}
        >
          {data.map((info, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  md: 'row',
                },
                textAlign: {
                  xs: 'center',
                  md: 'start',
                },
                alignItems: 'center',
                gap: 3,
                width: '450px',
                '& svg': {
                  fontSize: 40,
                },
                '&:hover': {
                  '& .icon': {
                    bgcolor: 'primary.main',
                    '& > svg': {
                      color: 'common.white',
                    },
                  },
                },
              }}
            >
              <Box
                sx={{
                  border: '2px solid',
                  borderColor: 'primary.main',
                  bgcolor: 'common.white',
                  color: 'primary.main',
                  borderRadius: '50%',
                  p: 4,
                }}
                className='icon'
              >
                {info.icon}
              </Box>
              <Box>
                <Typography variant='h4'>{info.title}</Typography>
                <Typography>{info.text}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
export default Services
