'use client'
import { Box, Typography, Divider } from '@mui/material'
import Img from './Img'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

interface Info {
  name: string
  text: string
  role: string
}

interface CardProps {
  info: Info
  number: number
}

const Card: React.FC<CardProps> = ({ info, number }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          top: {
            xs: -50,
            md: -80,
          },
          position: 'absolute',
          width: '150px',
          height: '150px',

          '& img': {
            border: '4px solid',
            borderColor: 'secondary.main',
            boxShadow: 8,
          },
        }}
      >
        <Img
          src={`/images/persona${number + 1}.jpg`}
          radius={'50%'}
          alt={info.name}
        />
      </Box>
      <Box
        sx={{
          width: { xs: '260px', sm: '270px', md: '280' },
          height: '450px',
          textAlign: 'center',
          pb: 5,
          pt: 15,
          px: 5,
          bgcolor: 'common.white',
          boxShadow: 8,
          borderRadius: 2,
          '& svg': {
            color: 'secondary.main',
          },
        }}
      >
        <Typography>
          <FormatQuoteIcon />
          {info.text}
          <FormatQuoteIcon />
        </Typography>
        <Divider sx={{ my: 2, bgcolor: 'common.black' }} />
        <Box>
          <Typography variant='h6' sx={{ color: 'secondary.main' }}>
            {info.name}
          </Typography>
          <Typography>{info.role}</Typography>
        </Box>
      </Box>
    </Box>
  )
}
export default Card
