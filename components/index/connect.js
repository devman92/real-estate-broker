import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import LabeledTextField from './textField';
import Button from '@mui/material/Button';
import theme from '../../styles/theme/theme';
import styles from '../../styles/Home.module.css';


export default function Connect() {
    return (
        <Box sx={{ backgroundColor: "#242323", p: 3 }}>
            <Grid container spacing={2}>
                <Grid item container xs={12}>
                    <Grid item xs={12}>
                        <Typography className={styles.elegant_title} sx={{ color: theme.palette.primary.gold, fontWeight: 600 }}>CONNECT WITH US</Typography>
                        <Typography className={styles.elegant_paragraph} sx={{ color: theme.palette.primary.cream }}>Let our trusted team help guide you every step of the way. Feel free to send us a message. We will get back to you very shortly.</Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={12} spacing={1}>
                    <Grid item xs={12}>
                        <LabeledTextField label="Your email address" fullWidthBool={false} multilineBool={false} rowsNum={1}/>
                    </Grid>
                    <Grid item xs={12}>
                        <LabeledTextField label="Your message" fullWidthBool={true} multilineBool={true} rowsNum={6}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained">Send</Button>
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    );
}
