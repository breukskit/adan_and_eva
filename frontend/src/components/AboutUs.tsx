import React from 'react';

import bienvenidos from '../assets/11-min.jpg';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  aboutUsContainer: {
    maxWidth: '1140px',
    margin: 'auto',
  },
  header: {
    textAlign: 'center',
    fontSize: '2.5rem',
    padding: '1rem',
    marginBottom: '.5rem',
  },
  introduction: {
    fontSize: '1.1rem',
    lineHeight: '1.75rem',
    textAlign: 'center',
    padding: '1rem',
  },
  heroImg: {
    width: '100%',
  },
});

export const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.aboutUsContainer}>
      <img className={classes.heroImg} src={bienvenidos} alt="Signs" />
      <h1 className={classes.header}>Our community</h1>
      <p className={classes.introduction}>
        We are a group of people that have concluded that life should be
        something vibrant and meaningful and that we are willing to spend our
        lives working towards that goal. We are very sincere in this conclusion
        - so much so that we have left everything behind to go into the Mexican
        jungle and start a community amongst the Maya Indians of the Yucatan
        peninsula. Here, life is close to nature and we focus on health and
        happiness rather than economic growth and efficiency. Here, life is
        something to be enjoyed and nurtured with love rather than endured.
      </p>
    </div>
  );
};
