import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import Button from "@mui/material/Button";

export default function InputsCard(props){
  // required props:
  // state variable for numeric input value {in1Val}
  // state variable for unit radio value {in2Val}
  // state variable for select value {selVal}
  // state variable for select display text {selDisp}
  // handleChange function {hdlChg}
  // handleSubmit function {hdlSub}
  // array of options for select {selList}

  // const selEntries = props.fastList.map((val, ind)=>(<MenuItem key={ind} value={val}>{props.selDisp[ind]}</MenuItem>));


  return(
    <Paper elevation={3} sx={{...{ marginTop: "10px", marginBottom: "10px", padding:"10px" },...props.sx}}>
      <Typography variant="overline" >Inputs</Typography>
      <br />
      <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={props.hdlSub}
    >
      <div>
      <FormControl sx={{margin:"10px"}}>
      <TextField
          required
          id="text-input"
          label="Input Text"
          type="number"
          name="fbru"
          // value={props.fbruVal}
          // onChange={props.hdlChg}
        />
      </FormControl>
      <FormControl sx={{margin:"10px"}}>
      <FormLabel id="radio-buttons-group-label">Radio</FormLabel>
      <RadioGroup
        row
        aria-labelledby="radio-buttons-group-label"
        name="radio"
        // value={props.unitVal}
        // onChange={props.hdlChg}
      >
        <FormControlLabel value="true" control={<Radio />} label="true" />
        <FormControlLabel value="false" control={<Radio />} label="false" />
      </RadioGroup>
    </FormControl>
    </div>
    <div>
    <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="fastener-select-helper-label">Select...</InputLabel>
        <Select
          required
          labelId="select-helper-label"
          id="select-helper"
          label="Select Label"
          name="fast_sel"
          value={props.selVal}
          onChange={props.hdlChg}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        </Select>
        <FormHelperText>Helper text</FormHelperText>
      </FormControl>
    </div>
    <Button variant="contained" type="submit">Calculate</Button>
    </Box>
    </Paper>
  )
}