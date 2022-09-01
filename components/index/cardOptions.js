import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import styles from '../../styles/Home.module.css'
import theme from '../../styles/theme/theme';

export default function CardOptions(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        {props.options.map((option) => {return(<Button key={option} className={styles.hoverButton} sx={{fontFamily: 'Cinzel'}}>{option}</Button>)})}
      </ButtonGroup>
    </Box>
  );
}
