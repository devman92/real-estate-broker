//MATERIAL IMPORTS
import Grid from '@mui/material/Grid';

//COMPONENT IMPORTS
import TextCard from './textCard';
import CardOptions from './cardOptions';
import VideoCard from './videoCard';
import theme from '../../styles/theme/theme';
import styles from '../../styles/custom.module.css'

export default function AerialShowcase(props) {
    const options = ["View Locations"]
    const cardOptionsButtons = <CardOptions
        options={options}
    />
    return (

        <main>
            <VideoCard
                styling={styles.glass_surface_white_hard}
                titleText="EXPLORE BEAUTY"
                titleTextColor={theme.palette.primary.gold}
            />
            <Grid item container xs={12}
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
                        paragraphColor={theme.palette.primary.main}
                        titleText="BEAUTIFUL NEIGHBORHOODS"
                        bodyText="Explore peaceful and accessible locations."
                        cardOptionsButtons={cardOptionsButtons}
                    />
                </Grid>

            </Grid>

        </main>

    )
}
