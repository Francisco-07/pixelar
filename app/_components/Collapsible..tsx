'use client'
import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface Qa {
  question: string
  answer: string
}

interface CollapsibleProps {
  qa: Qa
  number: number
}

const Collapsible: React.FC<CollapsibleProps> = ({ qa, number }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <div>
      <Accordion
        disableGutters
        expanded={expanded === String(number)}
        onChange={handleChange(String(number))}
        sx={(theme) => ({
          bgcolor: 'transparent',
          color: 'common.black',
          borderTop:
            number === 0 ? `1px solid ${theme.palette.common.black}` : 'none',
          borderBottom: `1px solid ${theme.palette.common.black}`,
          borderTopLeftRadius: 0,
          boxShadow: 0,
          '&:not(:last-child)': {
            borderBottom: 0,
          },
          '& svg': {
            color: 'common.black',
          },
          '& .MuiPaper-root': {
            borderTopLeftRadius: 0,
            borderRadius: 0,
          },
        })}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography>{qa.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{qa.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Collapsible
