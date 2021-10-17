import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "200px",
    padding: "0px",
    margin: "0px",
  },
  select: {
    height: "36px",
  },
  inputLabel: {
    paddingRight: "5px",
    marginRight: "50px",
  },
}));

export default function BasicSelect(props) {
  const classes = useStyles();
  const [color, setColor] = useState("");

  const handleChange = (event) => {
    setColor(event.target.value);
  };
  props.addColor(color);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth className={classes.formControl} size="small">
        <InputLabel className={classes.inputLabel}>Color</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={color}
          label="Age"
          onChange={handleChange}
          className={classes.select}
        >
          <MenuItem value="rosso">Rosso</MenuItem>
          <MenuItem value="giallo">Giallo</MenuItem>
          <MenuItem value="verde">Verde</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
