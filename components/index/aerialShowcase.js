import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

//MATERIAL IMPORTS
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';

//COMPONENT IMPORTS
import ButtonCard from './buttonCard';
import VideoCard from './videoCard';
import theme from '../../config/theme';
import LargeTitle from './largeTitle';
import CardOptions from './cardOptions';
import TextCard from './textCard';

export default function AerialShowcase(props) {
    const options = ["View Locations"]
    const cardOptionsButtons = <CardOptions
        options={options}
    />
    return (

        <main>
            <VideoCard
                styling={styles.glass_clear}
                titleText="EXPLORE BEAUTY"
                titleTextColor={theme.palette.primary.gold}
            />
            <Grid container xs={12}
                sx={{
                    position: 'relative',
                    width: 'full',
                    justifyContent: 'center',
                    alignContent: 'center',
                }}
            >
                <Grid item xs={11}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        position: 'relative',
                        m: 1
                    }}
                >
                    <TextCard
                        styling={styles.glass_surface_white_light}
                        highlightTextColor={theme.palette.primary.tan}
                        highlightText="REST ASSURED"
                        titleText="BEAUTIFUL NEIGHBORHOODS"
                        bodyText="Explore peaceful and accessible locations."
                        cardOptionsButtons={cardOptionsButtons}
                    />
                </Grid>

            </Grid>

        </main>

    )
}
