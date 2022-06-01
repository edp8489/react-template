import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import {light, dark} from "./Components/styles.js";
import {NavBar, Footer} from "./Components/NavBar";
import InputsCard from "./Components/InputsCard";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// defined using let instead of const in case you want to set
// other elements later based on primary/secondary colors
let lightTheme = light
let darkTheme = dark

// uncomment next line to define additional customizations
// theme = createTheme(theme, {**});

// import data file
// @TODO change this to a database query
// const appData = require("./data/data.json")

// generate lists for select menu
// const selDisp = appData["tbd"].map(x=>mathUtils.selectFormat(x.metadata))
// const selVal = appData["tbd"].map(x=>x.metadata.id)

export default function App() {
  const [darkMode, toggleDark] = React.useState(false);
  const [readyToCalc, setReady] = React.useState(false);
  const [state, setState] = React.useState({});
  
  let theme = darkMode ? darkTheme : lightTheme;

  // template handleChange function if any state contains a nested object
  /*
  const handleChange = function(e) {
    setState(prevState => {
      return{...prevState, ...{[e.target.name]:e.target.value}}
    })
    e.preventDefault()
  }
  */
 
  /*
  const calculate = function(e){
    e.preventDefault()
  }
  */
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="App" sx={{ width: "75%", marginLeft:"12.5%", marginRight:"12.5%" }}>
        <NavBar themeToggle={() => toggleDark( !darkMode )} />
        <Paper elevation={3} sx={{ marginTop: "20px", padding:"10px" }}>
          <Typography component="div">
          <Box sx={{typography:"h3", textAlign:"center"}}>Title</Box>
          <br />
          <Box sx={{typography:"p", textAlign:"center"}}>
            (in work)<br />
            <i>This tool ... (short summary) </i>
          </Box>
          <br />
          <Box sx={{typography:"subtitle", textAlign:"center"}}>Usage</Box>
          <Box sx={{typography:"p", textAlign:"left"}}>
            <i>...Instructions for use...</i>
            <br /> <br />
            <b>Input 1:</b> Short summary<br />
            <b>Input 2:</b> ...<br />
          </Box>
          <br />
          <Box sx={{typography:"subtitle", textAlign:"center"}}>Returns</Box>
          <Box sx={{typography:"p"}}>
            <i>Summary of outputs</i>
          </Box>
          </Typography>
        </Paper>
        <InputsCard 
          sx={{textAlign:"center"}} />
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
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
