import Head from 'next/head'
import Image from 'next/image'

//MATERIAL IMPORTS
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';

//COMPONENT IMPORTS
import TextCard from './textCard';
import CardOptions from './cardOptions';
import LargeTitle from './largeTitle';

import theme from '../../styles/theme/theme';
import styles from '../../styles/custom.module.css'


export default function CompanyBackground() {
    const options = ["Licenses", "Affiliates", "Team"]
    const cardOptionsButtons = <CardOptions
                                    options={options}
                                />
    return (

        <main>
            <Grid item container xs={12}
                sx={{
                    position: 'relative',
                    width: 'full',
                    justifyContent: 'center',
                    alignContent: 'center'
                }}
            >
                <Grid item xs={12}
                    sx={{
                        zIndex: 0,
                        width: 'full'
                    }}
                >
                    <Image src="/images/company-background.jpg" alt="Vercel Logo" width={5472} height={3649} layout="responsive"/>
                </Grid>
                <Grid item xs={11} sm={10} md={10}
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        position: 'absolute',
                        //left: { xs: '1rem', sm: '18rem', md: '32rem', lg: '42rem', xl: '45rem' },
                        top: '50%',
                        left: '50%',
                        zIndex: 1,
                        width: 'full',
                        transform: 'translate(-5%, -50%)'
                    }}
                >
                    <TextCard 
                        styling={styles.glass_surface_white_hard}
                        highlightTextColor={theme.palette.primary.tan}
                        highlightText="REST ASSURED"
                        titleText="BUILT ON TRUST"
                        bodyText="We at Roldan Estates pride ourselves with only the best. Trained professionals to guilde you in the real estate wilderness..."
                        cardOptionsButtons={cardOptionsButtons}
                    />
                </Grid>
                <Grid item xs={12}
                    sx={{
                        position: 'absolute',
                        //left: { xs: '1rem', sm: '18rem', md: '32rem', lg: '42rem', xl: '45rem' },
                        top: '5%',
                        left: '15%',
                        zIndex: 1,
                        width: 'full',
                        transform: 'translate(0%, 0%)'
                    }}
                >
                    <LargeTitle titleText="ENJOY PEACE OF MIND"  surface_style={styles.glass_surface_white_light}/>
                </Grid>
                <Grid item xs={11}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        position: 'relative',
                        m: 1
                    }}
                >
                    <TextCard
                        styling={styles.glass_surface_white_light}
                        highlightTextColor={theme.palette.primary.tan}
                        paragraphColor={theme.palette.primary.main}
                        titleText="BUILT ON TRUST"
                        bodyText="We at Roldan Estates pride ourselves with only the best. Trained professionals to guilde you in the real estate wilderness..."
                        cardOptionsButtons={cardOptionsButtons}
                    />
                </Grid>
            </Grid>

        </main>

    )
}
