import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import theme from '../../styles/theme/theme';

//MATERIAL IMPORTS
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';

//COMPONENT IMPORTS
import TextCard from './textCard';
import CardOptions from './cardOptions';
import LargeTitle from './largeTitle';


export default function Hero() {
    const options = ["Homes", "Business", "Land"]
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
                    <Image src="/images/home-hero.jpg" alt="Vercel Logo" width={6601} height={3384} />
                </Grid>
                <Grid item sm={6} md={5}
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
                        highlightTextColor='#B68D40'
                        highlightText="VIEW THE EXTRAORDINARY"
                        titleText="PREMIUM PROPERTIES"
                        bodyText="Carefully picked properties with huge upside potential and very little downside risk. Its a research company located in the midwest with imminent patent approvals for ..."
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
                    <LargeTitle titleText="FIND YOUR NEW HOME" surface_style={styles.glass_surface_white_light}/>
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
                        titleText="PREMIUM PROPERTIES"
                        bodyText="Carefully picked properties with huge upside potential and very little downside risk. Its a research company located in the midwest with imminent patent approvals for ..."
                        cardOptionsButtons={cardOptionsButtons}
                    />
                </Grid>
            </Grid>

        </main >

    )
}
