import React from 'react';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  homeContainer: {
    maxWidth: '1140px',
    margin: 'auto',
  },
});

export const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeContainer}>
      <h1 style={{ textAlign: 'center' }}>I am Home!</h1>
    </div>
  );
};
