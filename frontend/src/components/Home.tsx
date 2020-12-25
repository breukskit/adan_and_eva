import React from 'react';

import { theme } from '../Theme';

import { Link } from 'react-router-dom';

import homePic from '../assets/2-min.jpg';

import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrog, faHeart, faLeaf } from '@fortawesome/free-solid-svg-icons';

const useStyles = createUseStyles({
  homeContainer: {
    maxWidth: '1140px',
    margin: 'auto',
  },
  heroPicContainer: {
    position: 'relative',
    width: '100%',
    marginBottom: '1.5rem',
    '&:after': {
      content: '""',
      position: 'absolute',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.4)',
    },
  },
  heroPic: {
    width: '100%',
    display: 'block',
    minHeight: '250px',
    maxHeight: '500px',
  },
  heroText: {
    position: 'absolute',
    top: 0,
    width: '100%',
    color: '#ffffff',
    zIndex: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: {
      top: 0,
      right: '.5rem',
      bottom: '.5rem',
      left: '.5rem',
    },
    '& $h1': {
      textAlign: 'center',
      fontSize: '3rem',
      marginTop: '2rem',
      marginBottom: '1.5rem',
      textStroke: '2px rgba(0,0,0,0.75)',
      textShadow: '2px 2px rgba(0,0,0,0.15)',
      '@media(max-width: 575px)': {
        fontSize: '2.2rem',
        marginTop: '1rem',
        textStroke: '1px rgba(0,0,0,0.75)',
      },
      '@media(max-width: 300px)': {
        fontSize: '1.6rem',
        textStroke: 0,
      },
    },
    '& $h3': {
      textAlign: 'center',
      fontSize: '2rem',
      fontWeight: 600,
      textShadow: '2px 2px rgba(0,0,0,0.15)',
      marginBottom: '2rem',
      '@media(max-width: 575px)': {
        fontSize: '1.4rem',
      },
      '@media(max-width: 300px)': {
        fontSize: '1rem',
      },
    },
    '& $a': {
      background: theme.primaryColor,
      padding: {
        top: '.5rem',
        right: '1.5rem',
        bottom: '.5rem',
        left: '1.5rem',
      },
      textTransform: 'uppercase',
      letterSpacing: '.1rem',
      color: '#ffffff',
      borderRadius: '5px',
      fontWeight: 600,
      transition: 'all 200ms',
      '&:hover': {
        cursor: 'pointer',
        background: '#1fa3a3',
        transform: 'scale(1.05)',
      },
    },
  },
  subHeader: {
    textAlign: 'center',
    background: 'rgba(0,0,0,0.95)',
    padding: {
      top: '2rem',
      right: '1rem',
      bottom: '2rem',
      left: '1rem',
    },
    color: '#ffffff',
    maxWidth: '1140px',
    fontWeight: 500,
    letterSpacing: '.075rem',
    '@media(max-width: 575px)': {
      fontSize: '1.2rem',
    },
    '@media(max-width: 300px)': {
      fontSize: '1rem',
    },
  },
  servicesSamples: {
    maxWidth: '1140px',
    margin: 'auto',
    padding: '2rem',
    '& $h2': {
      marginBottom: '2rem',
      color: theme.primaryTextColor,
    },
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '1rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    border: '1px solid rgba(0,0,0,0.15)',
    padding: '1.25rem',
    borderRadius: '5px',
    boxShadow: '3px 3px 10px 0px rgba(50, 50, 50, 0.5)',
    margin: '1rem',
    '& $p': {
      textAlign: 'center',
      lineHeight: '1.75rem',
      marginBottom: '1rem',
      fontSize: '1.1rem',
      fontWeight: 600,
      color: theme.primaryTextColor,
    },
    '& $a': {
      color: theme.primaryColor,
      fontSize: '1.2rem',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  cardHeader: {
    color: theme.primaryColor,
    fontSize: '1.5rem',
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& $h3': {
      textAlign: 'center',
      fontSize: '1.5rem',
    },
  },
  cardIcon: {
    marginBottom: '.2rem',
  },
  inlineLink: {
    color: theme.primaryColor,
  },
  belowCardsParagraph: {
    fontSize: '1.2rem',
    textAlign: 'center',
    lineHeight: '2rem',
  },
});

export const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeContainer}>
      <div className={classes.heroPicContainer}>
        <img
          loading="lazy"
          className={classes.heroPic}
          src={homePic}
          alt="Jungle lagoon"
        />
        <div className={classes.heroText}>
          <h1>Welcome to the Jungle!</h1>
          <h3>Ready to try a different life?</h3>
          <Link to="/contact">Book</Link>
        </div>
      </div>
      <h2 className={classes.subHeader}>
        We invite you to share our life in harmony with ourselves, each other
        and nature.
      </h2>
      <div className={classes.servicesSamples}>
        <h2>Some of our services and activities:</h2>
        <div className={classes.cardContainer}>
          <div className={classes.card}>
            <div className={classes.cardHeader}>
              <span>
                <FontAwesomeIcon className={classes.cardIcon} icon={faHeart} />
              </span>
              <h3>Yoga</h3>
            </div>
            <p>
              Ashtanga Yoga from the Tibetan Yoga-tradition that "vacuums" the
              physical system and creates a sense of union between the body,
              mind and soul.
            </p>
            <Link to="/services">Read More</Link>
          </div>
          <div className={classes.card}>
            <div className={classes.cardHeader}>
              <span>
                <FontAwesomeIcon className={classes.cardIcon} icon={faFrog} />
              </span>
              <h3>Temazcal</h3>
            </div>
            <p>
              Also known as "Mayan sweatlodge" or "shamanic shower" is a
              ceremony conducted in high temperatures where water, herbs, music,
              and energetic crystals is used to cleanse the body and purify the
              mind and spirit.
            </p>
            <Link to="/services">Read More</Link>
          </div>
          <div className={classes.card}>
            <div className={classes.cardHeader}>
              <span>
                <FontAwesomeIcon className={classes.cardIcon} icon={faLeaf} />
              </span>
              <h3>Community living in nature</h3>
            </div>
            <p>
              We live together in each others loving company in the heart of the
              beautiful Yucatan Jungle where life is given the ultimate
              conditions to blossom.
            </p>
            <Link to="/services">Read More</Link>
          </div>
        </div>
        <p className={classes.belowCardsParagraph}>
          <Link className={classes.inlineLink} to="/services">
            Click here
          </Link>{' '}
          to read more about what you could experience during your stay.{' '}
          <Link className={classes.inlineLink} to="/about-us">
            Click here
          </Link>{' '}
          to read more about the people behind this initiative.
        </p>
      </div>
    </div>
  );
};
