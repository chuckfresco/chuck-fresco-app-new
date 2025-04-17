import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet'; // 👈 Add Helmet
import { Section } from 'components/organisms';
import {
  Hero,
} from './components';

import MonsterDropsTable from './MonsterDropsTable';

const useStyles = makeStyles(theme => ({
  sectionTrucking: {
    maxWidth: '100%',
    paddingRight: 0,
    paddingLeft: 0,
  },
  featuresSection: {
    background: 'url(https://assets.maccarianagency.com/the-front/illustrations/patterns-bg.svg) no-repeat center',
    backgroundSize: 'contain',
  },
  integrationsSection: {
    background: '#0c133e',
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  reviewSection: {
    background: theme.palette.primary.dark,
  },
  aboutSection: {
    background: '#0c133e',
  },
}));

const MonsterDrops = () => {
  const classes = useStyles();

  return (
    <div>
      <Helmet>
        <title>Monster Drop Table | Forgotten Runiverse Guide</title>
        <meta name="description" content="Browse all monster drops and loot in Runiverse, including materials and skills dropped by creatures across all regions." />
        <meta property="og:title" content="Monster Drops | Forgotten Runiverse Guide" />
        <meta property="og:description" content="Get full details on monster drops, materials, and skills to enhance your adventure in the Runiverse." />
        <meta property="og:image" content="https://chuckfresco.com/assets/monster-drops.jpg" />
        <meta property="og:url" content="https://chuckfresco.com/monster-drops" />
      </Helmet>

      <Hero />

      <Section>
        <MonsterDropsTable />
      </Section>
    </div>
  );
};

export default MonsterDrops;
