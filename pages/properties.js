import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FoundationIcon from '@mui/icons-material/Foundation';
import { Typography } from '@mui/material';
import styles from '../styles/Home.module.css';
import theme from '../styles/theme/theme.js';

export default function Properties() {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: theme.palette.primary.main, pl: 2}}>
            <Grid container spacing={2}>
                <Grid item container xs={12} sm={6} md={3}>
                    <Grid item xs={12}>
                        <FoundationIcon sx={{ height: '100px', width: '150px', color: theme.palette.primary.gold }} />
                        <Typography className={styles.elegant_title} sx={{ color: theme.palette.primary.gold, fontWeight: 600 }}>ROLDAN ESTATES</Typography>
                        <Typography className={styles.elegant_paragraph} sx={{ color: theme.palette.primary.cream }}>Real Estate Brokerage</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Grid item xs={12}>
                        <Typography className={styles.elegant_paragraph2} sx={{ color: theme.palette.primary.cream }}>Contact Us</Typography>
                        <Typography className={styles.elegant_paragraph} sx={{ color: theme.palette.primary.tan, fontSize: 'small'  }}>308 Negro Arroyo Lane</Typography>
                        <Typography className={styles.elegant_paragraph} sx={{ color: theme.palette.primary.tan, fontSize: 'small'  }}>Albuquerque, New Mexico</Typography>
                        <Typography className={styles.elegant_paragraph} sx={{ color: theme.palette.primary.tan, fontSize: 'small'  }}>info.elite.estate@gmail.com</Typography>
                        <Typography className={styles.elegant_paragraph} sx={{ color: theme.palette.primary.tan, fontSize: 'small'  }}>(046) 433-1234</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Grid item xs={12}>
                        <Typography className={styles.elegant_paragraph2} sx={{ color: theme.palette.primary.cream }}>Search Properties in</Typography>
                        <Typography className={styles.elegant_paragraph} sx={{ color: theme.palette.primary.tan, fontSize: 'small'  }}>El Nido, Palawan</Typography>
                        <Typography className={styles.elegant_paragraph} sx={{ color: theme.palette.primary.tan, fontSize: 'small'  }}>San Vicente, Palawan</Typography>
                        <Typography className={styles.elegant_paragraph} sx={{ color: theme.palette.primary.tan, fontSize: 'small'  }}>Puerto Princesa, Palawan</Typography>
                        <Typography className={styles.elegant_paragraph} sx={{ color: theme.palette.primary.tan, fontSize: 'small'  }}>Taytay, Palawan</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Grid item xs={12}>
                        <Typography className={styles.elegant_paragraph2} sx={{ color: theme.palette.primary.cream }}>Team</Typography>
                        <Typography className={styles.elegant_paragraph} sx={{ color: theme.palette.primary.tan, fontSize: 'small'  }}>Saul Goodman</Typography>
                        <Typography className={styles.elegant_paragraph} sx={{ color: theme.palette.primary.tan, fontSize: 'small'  }}>Michael Scofield</Typography>
                        <Typography className={styles.elegant_paragraph} sx={{ color: theme.palette.primary.tan, fontSize: 'small'  }}>Daenerys Targaryen</Typography>
                        <Typography className={styles.elegant_paragraph} sx={{ color: theme.palette.primary.tan, fontSize: 'small'  }}>Roldan Diwa</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{backgroundColor: 'black', p:3, mt: 3}}>
                    <Typography sx={{ color: "gray", fontSize: 'small', textAlign: 'center' }} variant="subtitle1">
                        ©2022 Roldan Estates Real Estate Brokerage (REREB) is a member of the franchise system of RE Affiliates LLC. 
                        RE Affiliates LLC and REREB do not guarantee accuracy of all data including measurements, conditions, and features of property. 
                        Information is obtained from various sources and will not be verified by broker or MLS. DRE# 012345678</Typography>
                </Grid>
            </Grid>

        </Box>
    );
}
