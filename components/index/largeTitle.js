import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

//MATERIAL IMPORTS
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';

export default function LargeTitle(props) {
    return (

        <main className={props.surface_style}>
            <Grid container xs={12}
                sx={{
                    position: 'relative',
                    width: 'full',
                    justifyContent: 'center'
                }}
            >
                <Grid item xs={12} md={12}
                    sx={{
                        position: 'relative',
                        top: '0',
                        zIndex: 1
                    }}
                >
                    <Typography variant='h3' className={styles.elegant_title}
                        sx={{
                            textAlign: 'center',
                            fontFamily: 'monospace',
                            fontWeight: 300,
                            letterSpacing: { xs: '.1rem', sm: '.5rem', md: '.7rem', lg: '.9rem', xl: '1.1rem' },
                            color: 'primary.gold',
                            textDecoration: 'none',
                            fontSize: { xs: '18px', sm: '26px', md: '32px', lg: '36px', xl: '42px' },
                            zIndex: 1,
                            textShadow: '1px 1px #122620'
                        }}>
                        {props.titleText}
                    </Typography>
                </Grid>
            </Grid>
        </main>

    )
}
