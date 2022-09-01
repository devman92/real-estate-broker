import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import theme from '../../styles/theme/theme';
import styles from '../../styles/Home.module.css';

export default function LabeledTextField(props) {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"  
    >
      <TextField id="outlined-basic" fullWidth={props.fullWidthBool} label={props.label} multiline={props.multilineBool} rows={props.rowsNum} variant="filled" size="small" color="secondary" sx={{backgroundColor:"#F4EBD0", borderRadius:"8px"}}/>
    </Box>
  );
}
