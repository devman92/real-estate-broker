import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from '../../styles/Home.module.css'

export default function ButtonCard(props) {
  return (
    <Card sx={{ width: 'full', p: '0', m: '0' }} className={props.surface_style}>
      {props.cardOptionsButtons}
    </Card>
  );
}
