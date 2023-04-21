import React from "react";
import { Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ResultsCard(props){
  // destructure props
  const {readyToCalc} = props;
  return(
    <Paper elevation={3} sx={{padding: "10px", textAlign:"center"}}>
          <Typography variant="overline">Outputs</Typography><br />
          <span>{readyToCalc? 
            "Success message":
            "User input required. Press 'Calculate' when ready"}
          </span>
          <Accordion TransitionProps={{unmountOnExit: true}}>
            <AccordionSummary 
                expandIcon={<ExpandMoreIcon />} 
                id="debug-acc-header">
              <Typography>Debug Info</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <ul>
            <li>TBD</li>
          </ul>
            </AccordionDetails>
          </Accordion>
          TBD
        </Paper>
  )
}