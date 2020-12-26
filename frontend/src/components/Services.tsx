import React from 'react';

import { theme } from '../Theme';

import yogaJungle from '../assets/yoga-jungle.jpg';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  servicesContainer: {
    maxWidth: '1140px',
    margin: 'auto',
  },
  header: {
    textAlign: 'center',
    paddingTop: '1rem',
    marginBottom: '1.5rem',
  },
  subHeader: {
    fontWeight: 500,
    textAlign: 'center',
    lineHeight: '1.75rem',
    marginBottom: '2rem',
    padding: {
      top: 0,
      right: '1rem',
      bottom: 0,
      left: '1rem',
    },
  },
  methodsContainer: {
    maxWidth: '800px',
    margin: 'auto',
  },
  method: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    marginBottom: '2.5rem',
    '@media(max-width: 766px)': {
      gridTemplateColumns: '1fr',
    },
  },
  methodTextContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: {
      top: 0,
      right: '1rem',
      bottom: 0,
      left: '1rem',
    },
    '@media(max-width: 766px)': {
      marginBottom: '1rem',
      maxWidth: '90%',
      margin: 'auto',
    },
  },
  methodHeader: {
    marginBottom: '1.5rem',
    color: theme.primaryColor,
  },
  methodDescription: {
    lineHeight: '1.5rem',
    fontSize: '1.1rem',
  },
  methodImgContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  methodImg: {},
});

export const Services = () => {
  const classes = useStyles();
  return (
    <div className={classes.servicesContainer}>
      <h1 className={classes.header}>Services</h1>
      <h3 className={classes.subHeader}>
        Below you will find a description of the things we like to do in our
        community and the methods and practices that we use to enhance life.
      </h3>
      <div className={classes.methodsContainer}>
        <div className={classes.method}>
          <div className={classes.methodTextContent}>
            <h2 className={classes.methodHeader}>Yoga</h2>
            <p className={classes.methodDescription}>
              Yoga is not just a set of acrobatic exercises - it is a way of
              life. It is a special kind of relationship between the different
              parts of the being.
              <br />
              <br />
              When one practices yoga he or she is cleaning, both in a physical
              and energetical sense. This cleaning paves the way for energy to
              flow freely through the system. When an individual has this kind
              of flow he or she experiences a profound sense of health, in both
              body and mind.
              <br />
              In our community we practice Ashtangayoga which is a traditional,
              methodical approach.
            </p>
          </div>
          <div className={classes.methodImgContainer}>
            <img
              className={classes.methodImg}
              src={yogaJungle}
              alt="Woman doing yoga in the jungle"
            />
          </div>
        </div>
        <div className={classes.method}>
          <div className={classes.methodImgContainer}>
            <img
              className={classes.methodImg}
              src={yogaJungle}
              alt="Woman doing yoga in the jungle"
            />
          </div>
          <div className={classes.methodTextContent}>
            <h2 className={classes.methodHeader}>Pyramid excursions</h2>
            <p className={classes.methodDescription}>
              Yoga is not just a set of acrobatic exercises - it is a way of
              life. It is a special kind of relationship between the different
              parts of the being.
              <br />
              <br />
              When one practices yoga he or she is cleaning, both in a physical
              and energetical sense. This cleaning paves the way for energy to
              flow freely through the system. When an individual has this kind
              of flow he or she experiences a profound sense of health, in both
              body and mind.
              <br />
              In our community we practice Ashtangayoga which is a traditional,
              methodical approach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
