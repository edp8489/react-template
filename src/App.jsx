import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import {light, dark} from "./Components/styles.js";
import {NavBar, Footer} from "./Components/NavBar";
import SummaryCard from "./Components/SummaryCard";
import InputsCard from "./Components/InputsCard";
import ResultsCard from "./Components/ResultsCard";

// analytics
import TagManager from 'react-gtm-module'
const tagManagerArgs = {
    gtmId: 'GTM-TTMV4VF'
}
TagManager.initialize(tagManagerArgs)

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
        <SummaryCard />
        <InputsCard 
          sx={{textAlign:"center"}} />
        <ResultsCard />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
