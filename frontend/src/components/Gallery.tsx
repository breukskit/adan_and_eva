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
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1.5rem',
    // justifyItems: 'center',
  },
  imgBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '800px',
    margin: 'auto',
    width: '100%',
  },
  img: {
    width: '100%',
  },
});

export const Gallery = () => {
  const classes = useStyles();
  return (
    <div className={classes.galleryContainer}>
      <div className={classes.imgContainer}>
        <div className={classes.imgBox}>
          <img className={classes.img} loading="lazy" src={one} alt="" />
        </div>
        <img loading="lazy" src={two} alt="" />
        <img loading="lazy" src={three} alt="" />
        <img loading="lazy" src={four} alt="" />
        <img loading="lazy" src={five} alt="" />
        <img loading="lazy" src={six} alt="" />
        <img loading="lazy" src={eight} alt="" />
        <img loading="lazy" src={seven} alt="" />
        <img loading="lazy" src={nine} alt="" />
      </div>
    </div>
  );
};
