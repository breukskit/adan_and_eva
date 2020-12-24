import React, { useState } from 'react';
import { theme } from '../Theme';
import { Link } from 'react-router-dom';
import { useSetviewport } from '../useSetviewport';
import { createUseStyles } from 'react-jss';
import logo from '../assets/logo2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const useStyles = createUseStyles({
  navbarContainer: {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '96px',
    width: '100%',
    // maxWidth: '1140px',
    // margin: 'auto',
    padding: '1rem',
    borderBottom: '1px solid rgba(0,0,0,0.15)',
  },
  fullSizeNav: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1140px',
    margin: 'auto',
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
    height: '100%',
  },
  mobileNavWrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mobileBars: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  dropdown: {
    position: 'absolute',
    top: '96px',
    left: '0',
    background: '#ffffff',
    width: '100%',
    padding: '1rem',
    borderBottom: '1px solid rgba(0,0,0,0.15)',
  },
  dropdownItem: {
    fontSize: '1.1rem',
    fontWeight: '600',
    padding: {
      top: '.5rem',
      right: '0',
      bottom: '.5rem',
      left: '.2rem',
    },
    '& a': {
      color: theme.primaryTextColor,
    },
    '&:hover': {
      cursor: 'pointer',
      background: 'rgb(240, 240, 240)',
      '& a': {
        color: theme.primaryColor,
      },
    },
  },
});

const FullSizeNav = () => {
  const classes = useStyles();
  return (
    <nav className={classes.fullSizeNav}>
      <div className={classes.fullSizeLeft}>
        <Link to="/">
          <img className={classes.logo} src={logo} alt="logo" />
        </Link>
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
  const [showDropdown, setShowDropdown] = useState(false);
  const classes = useStyles();
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <nav className={classes.mobileNav}>
      <div className={classes.mobileNavWrapper}>
        <Link to="/">
          <img className={classes.logoMobile} src={logo} alt="logo" />
        </Link>
        <div>
          <h2 style={{ textAlign: 'center', color: theme.headingColor }}>
            Adan &amp; Eva
          </h2>
          <h4 style={{ textAlign: 'center', color: theme.primaryTextColor }}>
            Holistic Health
          </h4>
        </div>
        <FontAwesomeIcon
          className={classes.mobileBars}
          icon={showDropdown ? faTimes : faBars}
          size="lg"
          onClick={handleDropdown}
        />
      </div>
      {showDropdown && <Dropdown />}
    </nav>
  );
};

const Dropdown = () => {
  const classes = useStyles();
  return (
    <div className={classes.dropdown}>
      <ul>
        <li className={classes.dropdownItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={classes.dropdownItem}>
          <Link to="/about-us">About us</Link>
        </li>
        <li className={classes.dropdownItem}>
          <Link to="/services">Services</Link>
        </li>
        <li className={classes.dropdownItem}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={classes.dropdownItem}>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
    </div>
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
