import React from 'react';

import { Link } from 'react-router-dom';

import { useSetviewport } from '../useSetviewport';

import { createUseStyles } from 'react-jss';

import logo from '../assets/logo2.svg';

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
        color: '#0F8888',
      },
    },
    '& a': {
      color: '#4C4C4C',
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
});

const FullSizeNav = () => {
  const classes = useStyles();
  return (
    <nav className={classes.fullSizeNav}>
      <div className={classes.fullSizeLeft}>
        <img className={classes.logo} src={logo} alt="logo" />
        <div className={classes.fullSizeHeader}>
          <h2 style={{ textAlign: 'center' }}>Adan &amp; Eva</h2>
          <h4 style={{ textAlign: 'center' }}>Holistic Health</h4>
        </div>
      </div>
      <ul className={classes.fullSizeList}>
        <li className={classes.fullSizeListItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={classes.fullSizeListItem}>
          <Link to="/">About us</Link>
        </li>
        <li className={classes.fullSizeListItem}>
          <Link to="/">Services</Link>
        </li>
        <li className={classes.fullSizeListItem}>
          <Link to="/">Contact</Link>
        </li>
        <li className={classes.fullSizeListItem}>
          <Link to="/">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
};

export const Nav = () => {
  const classes = useStyles();
  const viewport = useSetviewport();
  return (
    <div className={classes.navbarContainer}>
      {viewport !== 'xs' && viewport !== 'small' && <FullSizeNav />}
    </div>
  );
};
