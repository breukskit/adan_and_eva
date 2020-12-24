import React from 'react';
import { theme } from '../Theme';
import { Link } from 'react-router-dom';
import { useSetviewport } from '../useSetviewport';
import { createUseStyles } from 'react-jss';
import logo from '../assets/logo2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const useStyles = createUseStyles({
  navbarContainer: {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '96px',
    width: '100%',
    maxWidth: '1140px',
    margin: 'auto',
    padding: '1rem',
  },
  fullSizeNav: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  fullSizeList: {
    display: 'flex',
    alignItems: 'center',
  },
  fullSizeListItem: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingRight: '1rem',
    paddingLeft: '1rem',
    '&:hover': {
      cursor: 'pointer',
      background: 'rgb(240, 240, 240)',
      '& a': {
        color: theme.primaryColor,
      },
    },
    '& a': {
      color: theme.primaryTextColor,
      fontSize: '1.1rem',
      fontWeight: '600',
    },
  },
  fullSizeLeft: {
    display: 'flex',
  },
  fullSizeHeader: {
    marginLeft: '1rem',
  },
  logo: {
    marginLeft: '1rem',
    width: '50px',
  },
  logoMobile: {
    width: '50px',
  },
  mobileNav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const FullSizeNav = () => {
  const classes = useStyles();
  return (
    <nav className={classes.fullSizeNav}>
      <div className={classes.fullSizeLeft}>
        <img className={classes.logo} src={logo} alt="logo" />
        <div className={classes.fullSizeHeader}>
          <h2 style={{ textAlign: 'center', color: theme.headingColor }}>
            Adan &amp; Eva
          </h2>
          <h4 style={{ textAlign: 'center', color: theme.primaryTextColor }}>
            Holistic Health
          </h4>
        </div>
      </div>
      <ul className={classes.fullSizeList}>
        <li className={classes.fullSizeListItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={classes.fullSizeListItem}>
          <Link to="/about-us">About us</Link>
        </li>
        <li className={classes.fullSizeListItem}>
          <Link to="/services">Services</Link>
        </li>
        <li className={classes.fullSizeListItem}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={classes.fullSizeListItem}>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
};

const MobileNav = () => {
  const classes = useStyles();
  return (
    <nav className={classes.mobileNav}>
      <img className={classes.logoMobile} src={logo} alt="logo" />
      <div>
        <h2 style={{ textAlign: 'center', color: theme.headingColor }}>
          Adan &amp; Eva
        </h2>
        <h4 style={{ textAlign: 'center', color: theme.primaryTextColor }}>
          Holistic Health
        </h4>
      </div>
      <FontAwesomeIcon icon={faBars} size="lg" />
    </nav>
  );
};

export const Nav = () => {
  const classes = useStyles();
  const viewport = useSetviewport();
  return (
    <div className={classes.navbarContainer}>
      {viewport !== 'xs' && viewport !== 'small' && <FullSizeNav />}
      {viewport !== 'xl' && viewport !== 'large' && viewport !== 'medium' && (
        <MobileNav />
      )}
    </div>
  );
};
