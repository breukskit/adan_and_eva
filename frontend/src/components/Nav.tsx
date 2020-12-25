import React, { useState, useEffect } from 'react';
import { theme } from '../Theme';
import { Link } from 'react-router-dom';
import { useSetviewport } from '../useSetviewport';
import { createUseStyles } from 'react-jss';
import logo from '../assets/logo2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import './animation.css';

const useStyles = createUseStyles({
  navbarContainer: {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '96px',
    width: '100%',
    background: '#ffffff',
    // maxWidth: '1140px',
    // margin: 'auto',
    padding: '1rem',
    borderBottom: (showDropdown) =>
      showDropdown ? '' : '1px solid rgba(0,0,0,0.15)',
    // boxShadow: '3px 3px 10px 0px rgba(50, 50, 50, 0.5)',
    zIndex: 5,
  },
  fullSizeNav: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1140px',
    margin: 'auto',
  },
  fullSizeList: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  fullSizeListItem: {
    height: '100%',
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
      height: '100%',
      display: 'flex',
      alignItems: 'center',
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
    // padding: '1rem',
    // borderBottom: '1px solid rgba(0,0,0,0.15)',
    boxShadow: '3px 5px 3px 0px rgba(50, 50, 50, 0.5)',
    height: '0',
    transition: 'all 350ms ease-in-out',
    overflow: 'hidden',
  },
  dropdownList: {
    padding: '1rem',
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
      display: 'block',
      width: '100%',
      height: '100%',
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

interface IFullSizeNavProps {
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const FullSizeNav = (props: IFullSizeNavProps) => {
  const { setShowDropdown } = props;
  const classes = useStyles();
  useEffect(() => {
    setShowDropdown(false);
  }, [setShowDropdown]);
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

interface IMobileNavProps {
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = (props: IMobileNavProps) => {
  const { showDropdown, setShowDropdown } = props;
  const [menuHeight, setMenuHeight] = useState<null | number>(null);
  const classes = useStyles();
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const calcHeight = (el: HTMLElement) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };
  const exit = () => {
    setMenuHeight(0);
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
      <div
        className={classes.dropdown}
        style={{
          height: menuHeight!,
        }}
      >
        <CSSTransition
          in={showDropdown}
          unmountOnExit
          classNames="submenu"
          timeout={300}
          onEnter={calcHeight}
          onExit={exit}
        >
          <Dropdown
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />
        </CSSTransition>
      </div>
    </nav>
  );
};

interface IDropdownProps {
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = (props: IDropdownProps) => {
  const classes = useStyles();
  const { setShowDropdown } = props;
  return (
    <div>
      <ul className={classes.dropdownList}>
        <li className={classes.dropdownItem}>
          <Link onClick={() => setShowDropdown(false)} to="/">
            Home
          </Link>
        </li>
        <li className={classes.dropdownItem}>
          <Link onClick={() => setShowDropdown(false)} to="/about-us">
            About us
          </Link>
        </li>
        <li className={classes.dropdownItem}>
          <Link onClick={() => setShowDropdown(false)} to="/services">
            Services
          </Link>
        </li>
        <li className={classes.dropdownItem}>
          <Link onClick={() => setShowDropdown(false)} to="/contact">
            Contact
          </Link>
        </li>
        <li className={classes.dropdownItem}>
          <Link onClick={() => setShowDropdown(false)} to="/gallery">
            Gallery
          </Link>
        </li>
      </ul>
    </div>
  );
};

export const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const classes = useStyles(showDropdown);
  const viewport = useSetviewport();
  return (
    <div className={classes.navbarContainer}>
      {viewport !== 'xs' && viewport !== 'small' && (
        <FullSizeNav
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      )}
      {viewport !== 'xl' && viewport !== 'large' && viewport !== 'medium' && (
        <MobileNav
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      )}
    </div>
  );
};
