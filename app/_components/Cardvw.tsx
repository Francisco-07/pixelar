import { Box, Typography, Divider } from '@mui/material'
import Img from './Img'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
interface Info {
  name: string
  text: string
  role: string
}

interface CardvwProps {
  info: Info
  number: number
}
const Cardvw: React.FC<CardvwProps> = ({ info, number }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
      }}
    >
      <Box>
        <Typography variant='h2'>{info.name}</Typography>
        <Divider sx={{ bgcolor: 'common.white' }} />
        <Typography>
          <FormatQuoteIcon sx={{ color: 'secondary.main' }} />
          {info.text}
          <FormatQuoteIcon sx={{ color: 'secondary.main' }} />
        </Typography>
      </Box>
      <Box>
        <Img
          src={`/images/persona${number + 1}.jpg`}
          radius={'50%'}
          alt={info.name}
          width={'200px'}
          border='3px solid'
          bColor='common.white'
          boxShadow={4}
        />
      </Box>
    </Box>
  )
}
export default Cardvw
