import Card from '../_components/Card'
import { Box, Container } from '@mui/material'
import Title from '../_components/Title'
import Cardvw from '../_components/Cardvw'

const Testimonials = () => {
  const info = [
    {
      name: 'Diego Torres',
      role: 'Analista de Datos',
      text: 'Profesionales excepcionales, datos precisos y estrategias efectivas. Lograron aumentar nuestras conversiones y ROI. ¡Una elección inteligente para cualquier empresa!',
    },
    {
      name: 'Andrés López',
      role: 'Team leader',
      text: 'Experiencia inigualable, equipo altamente capacitado. Aumentaron nuestra visibilidad y tráfico orgánico significativamente. ¡Increíble servicio de principio a fin!',
    },
    {
      name: 'Laura Sánchez',
      role: 'Directora de Marketing',
      text: 'Impresionante agencia, líderes en innovación. Estrategias sólidas, resultados asombrosos. ¡Altamente recomendada para cualquier empresa que busque destacarse!',
    },
  ]

  return (
    <Box
      id={'testimoniales'}
      sx={{
        background:
          'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(images/testimonial.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        clipPath: 'polygon(0 6%, 100% 0, 100% 100%, 0 100%)',
        color: 'common.black',
        py: 15,
      }}
    >
      <Container>
        <Box>
          <Title
            title='Testimoniales'
            subTitle='Conoce la opinion de nuestros clientes'
            color='white'
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 12,
            gap: {
              xs: 10,
              md: 5,
            },
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
          }}
        >
          {info?.map((data, i) => (
            <Card info={data} number={i} key={i} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
export default Testimonials
