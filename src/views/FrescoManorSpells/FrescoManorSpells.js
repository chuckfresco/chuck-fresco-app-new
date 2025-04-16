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
  Products,
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
  featuredProducts,
} from './data';

import SpellsTable from './SpellsTable';

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
  halfWidthSection: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10, 
    margin: 0,
    width: '100%',
    maxWidth: '100%',
  },

  reducedPadSection: {
    paddingBottom: 10, 
    paddingTop: 20, 

  },
  
}));

const FrescoManorSpells = () => {
  const classes = useStyles();

  return (
    <div>
      <Hero />

           <Section className={classes.reducedPadSection}>
              <Products data={featuredProducts} />
            </Section>

      {/* Full-width section */}
      <Section id="spells-table" className={classes.halfWidthSection}>
        <SpellsTable />
      </Section>

    </div>
  );
};

export default FrescoManorSpells;
