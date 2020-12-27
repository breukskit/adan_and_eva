import React from 'react';

import bienvenidos from '../assets/11-min.jpg';
import eva from '../assets/eva.jpg';
import adan from '../assets/17-min.jpg';
import chicho from '../assets/chicho-min.jpg';
import daniel from '../assets/daniel.jpg';
import marcus from '../assets/marcus-min.jpg';

import { createUseStyles } from 'react-jss';
import { theme } from '../Theme';

const useStyles = createUseStyles({
  aboutUsContainer: {
    maxWidth: '1140px',
    margin: 'auto',
  },
  header: {
    textAlign: 'center',
    fontSize: '2.5rem',
    padding: '1rem',
    marginBottom: '.5rem',
  },
  introduction: {
    fontSize: '1.1rem',
    lineHeight: '1.75rem',
    textAlign: 'center',
    padding: '1rem',
    marginBottom: '2rem',
  },
  heroImg: {
    width: '100%',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '2rem',
  },
  card: {
    width: '350px',
    borderRadius: '10px',
    boxShadow: '3px 3px 10px 0px rgba(50, 50, 50, 0.5)',
    margin: '1rem',
  },
  cardImg: {
    width: '100%',
    borderTopRightRadius: '10px',
    borderTopLeftRadius: '10px',
    marginBottom: '1rem',
  },
  cardTitle: {
    textAlign: 'center',
    fontSize: '2rem',
    // marginBottom: '.5rem',
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
    color: theme.primaryTextColor,
  },
  cardParagraph: {
    padding: '1.5rem',
    paddingTop: '1rem',
    fontSize: '1.1rem',
    lineHeight: '1.75rem',
  },
});

export const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.aboutUsContainer}>
      <img
        loading="lazy"
        className={classes.heroImg}
        src={bienvenidos}
        alt="Signs"
      />
      <h1 className={classes.header}>Our community</h1>
      <p className={classes.introduction}>
        We are a group of people that have concluded that life should be
        something vibrant and meaningful and that we are willing to spend our
        lives working towards that goal. We are very sincere in this conclusion
        - so much so that we have left everything behind to go into the Mexican
        jungle and start a community amongst the Maya Indians of the Yucatan
        peninsula. Here, life is close to nature and we focus on health and
        happiness rather than economic growth and efficiency. Here, life is
        something to be enjoyed and nurtured with love rather than endured.
        <br />
        <br />
        Below you will find a brief individual description of the people
        involved in this initiative.
      </p>
      <div className={classes.cardContainer}>
        <div className={classes.card}>
          <img className={classes.cardImg} src={eva} alt="Eva" />
          <h3 className={classes.cardTitle}>Eva Forstén</h3>
          <p className={classes.cardParagraph}>
            Eva is a long time spiritual seeker and practitioner of various
            esoteric methods. She has written a number of books and conducted
            healing on a large number of individuals from many different places
            and backgrounds. She wants to live in such a way where it is the
            heart and soul that is the primary source of truth rather than the
            mind. Her main passion in life is the spiritual process and she will
            gladly follow and guide anyone on their path.
          </p>
        </div>
        <div className={classes.card}>
          <img className={classes.cardImg} src={adan} alt="Adan" />
          <h3 className={classes.cardTitle}>Adan Corroviña Maya</h3>
          <p className={classes.cardParagraph}>
            One could perhaps describe Adan as the major force behind this
            initiative. He has an extensive history with yoga, natural
            medicines, spirituality and holistic health, primarily from India
            and Mexico. He has been all over the world in a search for meaning
            and truth in life and his journey has now taken him back to where he
            was born and raised. Now he is determined to share his passion with
            others that also seek something deep in the human existence.
          </p>
        </div>
        <div className={classes.card}>
          <img className={classes.cardImg} src={chicho} alt="Jesús" />
          <h3 className={classes.cardTitle}>Jesús Corroviña Maya</h3>
          <p className={classes.cardParagraph}>
            Jesús (or Chicho as he is often called) is like all of us a long
            time seeker of a meaningful existence. In our community in the
            jungle he have found a sense of purpose and calmness in everyday
            life where he spreads light with his calm and loving demeanor.
          </p>
        </div>
        <div className={classes.card}>
          <img className={classes.cardImg} src={daniel} alt="Daniel" />
          <h3 className={classes.cardTitle}>Daniel Forstén</h3>
          <p className={classes.cardParagraph}>
            Daniel is seeking a sense of liberation and freedom through simple
            living and a healthy relationship with the self. He feels that he in
            this initiative have found a purpose and a home. Daniel is a long
            time practitioner of music which is something he often utilizes
            during our daily activities.
          </p>
        </div>
        <div className={classes.card}>
          <img className={classes.cardImg} src={marcus} alt="Marcus" />
          <h3 className={classes.cardTitle}>Marcus Forstén</h3>
          <p className={classes.cardParagraph}>
            Marcus takes on a very special role in our community. His education
            with cognitive behavioral therapy and genuine passion for exchange
            of life experience leads him on a particular path with the people he
            meets. He have lived in many different parts of the world and met a
            lot of different people and have always been there to listen and
            explore without judgement.
          </p>
        </div>
      </div>
    </div>
  );
};
