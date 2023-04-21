import React from "react";
import { Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function SummaryCard(props) {

  return (
    <Paper elevation={3} sx={{ marginTop: "20px", padding: "10px" }}>
      <Typography component="div">
        <Box sx={{ typography: "h3", textAlign: "center" }}>Title</Box>
        <br />
        <Box sx={{ typography: "p", textAlign: "center" }}>
          (in work)<br />
          <i>This tool ... (short summary) </i>
        </Box>
        <br />
        <Box sx={{ typography: "subtitle", textAlign: "center" }}>Usage</Box>
        <Box sx={{ typography: "p", textAlign: "left" }}>
          <i>...Instructions for use...</i>
          <br /> <br />
          <b>Input 1:</b> Short summary<br />
          <b>Input 2:</b> ...<br />
        </Box>
        <br />
        <Box sx={{ typography: "subtitle", textAlign: "center" }}>Returns</Box>
        <Box sx={{ typography: "p" }}>
          <i>Summary of outputs</i>
        </Box>
      </Typography>
    </Paper>
  )
}