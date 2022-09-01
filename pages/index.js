import Head from 'next/head'
import styles from '../styles/Home.module.css'

//MATERIAL IMPORTS
import Grid from '@mui/material/Grid';

//COMPONENT IMPORTS
import Hero from '../components/index/hero';
import CompanyBackground from '../components/index/companyBackground';
import AerialShowcase from '../components/index/aerialShowcase';
import Footer from '../components/index/footer';
import Connect from '../components/index/connect';

export default function Home() {
  return (
    <div className={styles.container_fullwidth}>
      <Head>
        <title>Elite Estates</title>
        <meta name="description" content="Find your dream home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container rowSpacing={1}>
        <Grid item xs={12}>
          <Hero />
        </Grid>
        <Grid item xs={12}>
          <AerialShowcase />
        </Grid>
        <Grid item xs={12}>
          <CompanyBackground />
        </Grid>
        <Grid item xs={12}>
          <Connect />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  )
}
