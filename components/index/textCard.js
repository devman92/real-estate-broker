import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from '../../styles/custom.module.css'


export default function TextCard(props) {
  return (
    <Card sx={{ width: 'full', mb:2 }} className={props.styling}>


      <CardContent>
        <Typography gutterBottom variant="body2" component="div" className={styles.elegant_paragraph2}
          sx={{
            color: props.highlightTextColor
          }}>
          {props.titleText}
        </Typography>
        {/* <Typography gutterBottom variant="h6" component="div" className={styles.elegant_paragraph2}>
          {props.titleText}
        </Typography> */}
        <Typography variant="subtitle2" className={styles.elegant_paragraph2} sx={{
          color: props.paragraphColor
        }}>
          {props.bodyText}
        </Typography>
      </CardContent>
      {props.cardOptionsButtons}

    </Card>
  );
}
