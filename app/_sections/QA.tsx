import Title from '../_components/Title'
import Collapsible from '../_components/Collapsible.'
import { Box, Container } from '@mui/material'

const QA = () => {
  const data = [
    {
      question:
        '¿Cuáles son los servicios que ofrecen en diseño y desarrollo web?',
      answer:
        'Ofrecemos servicios integrales de diseño y desarrollo web, que incluyen la creación de páginas web a medida, optimización de la experiencia del usuario, diseño responsivo y más.',
    },
    {
      question: '¿Cómo empiezo a trabajar con ustedes?',
      answer:
        'Puedes comenzar contactándonos a través de nuestro formulario. Estaremos encantados de discutir tus necesidades y proporcionarte una consulta inicial gratuita.',
    },
    {
      question: '¿Cuánto tiempo lleva el desarrollo de una página web?',
      answer:
        'El tiempo de desarrollo varía según la complejidad del proyecto. Proveemos plazos estimados durante la consulta inicial, y nos esforzamos por entregar proyectos de manera oportuna sin comprometer la calidad.',
    },
    {
      question: '¿Cuál es el costo del servicio?',
      answer:
        'El costo depende de diversos factores, como la complejidad del diseño, características específicas que necesitas y el alcance del proyecto. Te proporcionaremos una cotización personalizada después de discutir tus requisitos en detalle.',
    },
    {
      question:
        '¿Ofrecen mantenimiento continuo después de completar el proyecto?',
      answer:
        'Sí, ofrecemos servicios de mantenimiento para asegurarnos de que tu página web funcione sin problemas. Esto incluye actualizaciones de contenido, correcciones de errores y cualquier soporte técnico necesario.',
    },
    {
      question: '¿Proporcionan servicios de alojamiento web?',
      answer:
        'Sí, ofrecemos recomendaciones para servicios de alojamiento web confiables y también podemos ayudarte en la configuración inicial si así lo prefieres.',
    },
    {
      question:
        '¿Puedo ver ejemplos de proyectos anteriores que hayan completado?',
      answer:
        'Por supuesto, podes mirar nuestro portfolio mas arriba con algunos de nuestros proyectos anteriores. Esto te dará una idea de nuestro estilo de diseño y la calidad de nuestro trabajo.',
    },
    {
      question:
        '¿Cómo manejan las actualizaciones y las tendencias tecnológicas en el diseño web?',
      answer:
        'Estamos comprometidos a mantenernos actualizados con las últimas tendencias y avances tecnológicos en el diseño web. Nuestro equipo se esfuerza por implementar prácticas y tecnologías actuales para asegurar que tus proyectos estén al dia.',
    },
  ]
  return (
    <Container sx={{ py: 15, bgcolor: 'common.white' }} id={'faq'}>
      <Title
        title='Más información'
        subTitle='Preguntas frecuentes'
        color='black'
      />
      <Box sx={{ pt: 6 }}>
        {data.map((qa, i) => (
          <Collapsible qa={qa} key={i} number={i} />
        ))}
      </Box>
    </Container>
  )
}
export default QA
