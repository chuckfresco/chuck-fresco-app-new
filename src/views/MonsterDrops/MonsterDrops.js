import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import {
  About,
  AboutBottom,
  Features,
  Hero,
  Integrations,
  Jobs,
  News,
  Pricings,
  Reviews,
  Search,
  Team,
  Trucking,
  Video,
} from './components';

import {
  trucking,
  features,
  team,
  integrations,
  reviews,
  jobs,
  news,
  pricings,
} from './data';

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
      <Hero />

      {/* Optional: Wrap in a styled Section */}
      <Section>
        <MonsterDropsTable />
      </Section>

    </div>
  );
};

export default MonsterDrops;
