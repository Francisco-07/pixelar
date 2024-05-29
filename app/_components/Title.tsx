import { Typography, Box } from '@mui/material'
interface TitleProps {
  title: string
  subTitle?: string
  color: 'white' | 'black' | 'default'
}

const Title: React.FC<TitleProps> = ({ title, subTitle, color }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: {
          xs: 'column',
          lg: 'row',
        },
        color: `${color === 'white' ? 'common.white' : 'common.black'}`,
        '.border': {
          backgroundColor: 'secondary.main',
          width: '45px',
          height: '4px',
          mt: 1,
          display: {
            xs: 'inline-block',
            lg: 'none',
          },
        },
        '.slash': {
          backgroundColor: 'secondary.main',
          height: '105px',
          width: '4px',
          mx: 8,
          transform: 'rotate(45deg)',
          display: {
            xs: 'none',
            lg: 'inline-block',
          },
        },
      }}
    >
      <Typography variant='h2'>{title}</Typography>
      <span className='border' />
      <span className='slash' />
      <Typography
        variant='h5'
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block',
          },
        }}
      >
        {subTitle}
      </Typography>
    </Box>
  )
}
export default Title
