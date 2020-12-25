import React from 'react';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  servicesContainer: {
    maxWidth: '1140px',
    margin: 'auto',
  },
  header: {
    textAlign: 'center',
  },
});

export const Services = () => {
  const classes = useStyles();
  return (
    <div className={classes.servicesContainer}>
      <h1 className={classes.header}>Services</h1>
      <h3>
        Below you will find a description of the things we like to do in our
        community and the methods and practices that we use to enhance life.
      </h3>
    </div>
  );
};
