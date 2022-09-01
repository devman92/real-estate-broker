import * as React from 'react';
import Card from '@mui/material/Card';
import dynamic from 'next/dynamic'
import LargeTitle from './largeTitle';
import Grid from '@mui/material/Grid'
import TextCard from './textCard';
import CardOptions from './cardOptions';
import theme from '../../styles/theme/theme';
import styles from '../../styles/custom.module.css'

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
//
export default function VideoCard(props) {
  const options = ["View Locations"]
    const cardOptionsButtons = <CardOptions
        options={options}
    />
  return (
    <Card className={props.styling} >
      <div className={styles.player_wrapper}>
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
          <LargeTitle titleText="EXPLORE BEAUTY" surface_style={styles.glass_surface_white_med} />
        </Grid>
        <Grid item xs={11} sm={10} md={10}
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            //left: { xs: '1rem', sm: '18rem', md: '32rem', lg: '42rem', xl: '45rem' },
            top: '85%',
            left: '70%',
            zIndex: 2,
            width: 'full',
            transform: 'translate(-10%, -45%)'
          }}
        >
          <TextCard
            styling={styles.glass_surface_white_hard}
            highlightTextColor={theme.palette.primary.tan}
            highlightText="REST ASSURED"
            titleText="BEAUTIFUL NEIGHBORHOODS"
            bodyText="Explore peaceful and accessible locations."
            cardOptionsButtons={cardOptionsButtons}
          />
        </Grid>
        <ReactPlayer
          url='https://vimeo.com/447342126'
          className={styles.react_player}
          playing
          width="100%"
          height="100%"
          loop
          fullScreen={false}
          muted
        />
      </div>

    </Card>

  );
}