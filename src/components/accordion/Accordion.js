import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component={'span'} sx={{ width: '33%', flexShrink: 0 }}>
           <h4>What does telemedicine mean?</h4>
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
           <p>Remote medical services, diagnosing and treating patients without consulting  them in-person, is called telemedicine. Telemedicnine, also called online doctor visit</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography component={'span'} sx={{ width: '33%', flexShrink: 0 }}>
              <h4> What is telemedicine used for?</h4>
          </Typography>
      
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography component={'span'} sx={{ width: '33%', flexShrink: 0 }}>
           <h4>What is equipment do you require for telemedicine?</h4>
          </Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography component={'span'} sx={{ width: '33%', flexShrink: 0 }}>
              <h4>What are the pros or advantages of  telemedicine?</h4>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
