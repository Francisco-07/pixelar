import { Box, Container } from '@mui/material'
import Cardvw from '../_components/Cardvw'
import ClipPath from '../_components/ClipPath'

const Testimonials2 = () => {
  const info = [
    {
      name: 'Diego Torres',
      clip: 'polygon(0 2%, 100% 45%, 100% 100%, 0 100%)',
      color: 'secondary.dark',
      role: 'Analista de Datos',
      text: 'Profesionales excepcionales, datos precisos y estrategias efectivas. Lograron aumentar nuestras conversiones y ROI. ¡Una elección inteligente para cualquier empresa!',
    },
    {
      name: 'Andrés López',
      clip: 'polygon(0 55%, 100% 2%, 100% 100%, 0 100%)',
      color: 'common.black',
      role: 'Team leader',
      text: 'Experiencia inigualable, equipo altamente capacitado. Aumentaron nuestra visibilidad y tráfico orgánico significativamente. ¡Increíble servicio de principio a fin!',
    },
    {
      name: 'Laura Sánchez',
      clip: 'polygon(0 55%, 100% 2%, 100% 100%, 0 100%)',
      color: 'common.white',
      role: 'Directora de Marketing',
      text: 'Impresionante agencia, líderes en innovación. Estrategias sólidas, resultados asombrosos. ¡Altamente recomendada para cualquier empresa que busque destacarse!',
    },
  ]

  return (
    <Box
      id={'testimoniales'}
      sx={{
        color: 'common.white',
      }}
    >
      {info?.map((data, i) => (
        <Box key={i}>
          {i === 0 ? (
            <ClipPath
              clipPath='polygon(0 0, 0 100%, 100% 100%)'
              bgColor={'common.black'}
              mb={'-5px'}
            />
          ) : null}
          <Box
            sx={{
              bgcolor: `${i % 2 === 0 ? 'common.black' : 'secondary.dark'}`,
            }}
          >
            <Container
              sx={{
                py: 10,
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                '& div': {
                  flexDirection: {
                    xs: 'column-reverse',
                    sm: `${i % 2 === 0 ? 'row-reverse' : 'row'}`,
                  },
                },
                '& h2': {
                  textAlign: {
                    xs: 'center',
                    sm: `${i % 2 === 0 ? 'start' : 'end'}`,
                  },
                },
                '& p': {
                  textAlign: {
                    xs: 'center',
                    sm: 'start',
                  },
                },
              }}
            >
              <Cardvw info={data} number={i} key={i} />
            </Container>
            {i < 2 ? (
              <ClipPath clipPath={data.clip} bgColor={data.color} mb={'-5px'} />
            ) : null}
          </Box>
          {i === 2 ? (
            <ClipPath
              clipPath='polygon(0 0, 100% 0, 100% 45%, 0% 100%)'
              bgColor={'common.black'}
              mt={'-5px'}
            />
          ) : null}
        </Box>
      ))}
    </Box>
  )
}
export default Testimonials2
