import React from 'react';

import one from '../assets/gallery/1-min.jpg';
import two from '../assets/gallery/8-min.jpg';
import three from '../assets/gallery/10-min.jpg';
import four from '../assets/gallery/14-min.jpg';
import five from '../assets/gallery/16-min.jpg';
import six from '../assets/gallery/23-min.jpg';
import seven from '../assets/gallery/26-min.jpg';
import eight from '../assets/gallery/30-min.jpg';
import nine from '../assets/gallery/32-min.jpg';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  galleryContainer: {
    maxWidth: '1140px',
    margin: 'auto',
    paddingTop: '1.5rem',
  },
  imgContainer: {
    width: '100%',
    // display: 'grid',
    // gridTemplateColumns: '1fr',
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem',
    marginBottom: '2rem',
    padding: '1rem',
  },
  imgBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'flex',
    width: '100%',
    '@media(max-width: 600px)': {
      flexDirection: 'column',
    },
  },
  img: {
    width: '100%',
  },
  leftElement: {
    marginRight: '.5rem',
    width: '45%',
    maxWidth: '330px',
    '@media(max-width: 600px)': {
      marginRight: 0,
      marginBottom: '.5rem',
    },
  },
});

export const Gallery = () => {
  const classes = useStyles();
  return (
    <div className={classes.galleryContainer}>
      <div className={classes.imgContainer}>
        <div className={classes.imgBox}>
          <img
            style={{ maxWidth: '900px' }}
            className={classes.img}
            loading="lazy"
            src={one}
            alt=""
          />
        </div>
        <div className={classes.imgBox}>
          <img
            style={{ maxWidth: '640px' }}
            className={classes.img}
            loading="lazy"
            src={two}
            alt=""
          />
        </div>
        <div className={classes.imgBox}>
          <img
            style={{ maxWidth: '700px' }}
            className={classes.img}
            loading="lazy"
            src={three}
            alt=""
          />
        </div>
        <div className={classes.imgBox}>
          <img
            className={classes.leftElement}
            loading="lazy"
            src={four}
            alt=""
          />
          <img
            loading="lazy"
            src={six}
            alt=""
            style={{ width: '45%', maxWidth: '330px' }}
          />
        </div>
        <div className={classes.imgBox}>
          <img className={classes.img} loading="lazy" src={five} alt="" />
        </div>
        <div className={classes.imgBox}>
          <img
            className={classes.leftElement}
            loading="lazy"
            src={eight}
            alt=""
          />
          <img
            style={{ width: '45%', maxWidth: '330px' }}
            loading="lazy"
            src={nine}
            alt=""
          />
        </div>
        <div className={classes.imgBox}>
          <img
            style={{ maxWidth: '640px' }}
            className={classes.img}
            loading="lazy"
            src={seven}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
