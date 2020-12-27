import React from 'react';

import { theme } from '../Theme';

import { Link } from 'react-router-dom';

import yogaJungle from '../assets/yoga-jungle.jpg';
import pyramid from '../assets/pyramid.jpg';
import temazcal from '../assets/temazcal.jpg';
import fruits from '../assets/fruits.jpg';
import cenote from '../assets/cenote.jpg';
import beach from '../assets/beach.jpg';
import bienvenidos from '../assets/11-min.jpg';

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
    maxWidth: '900px',
    margin: 'auto',
  },
  method: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    marginBottom: '1rem',
    padding: '1rem',
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
    lineHeight: '1.75rem',
    fontSize: '1.1rem',
  },
  methodImgContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media(max-width: 766px)': {
      marginBottom: '1rem',
      '&:nth-child(odd)': {
        order: 2,
      },
    },
  },
  methodImg: {
    maxWidth: '100%',
  },
  finishingParagraph: {
    textAlign: 'center',
    fontSize: '1.1rem',
    lineHeight: '2rem',
    marginTop: '2rem',
    marginBottom: '2.5rem',
    fontWeight: 600,
    padding: '1rem',
  },
  inlineLink: {
    color: theme.primaryColor,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
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
              body and mind. In our community we practice Ashtangayoga which is
              a traditional, methodical approach.
            </p>
          </div>
          <div className={classes.methodImgContainer}>
            <img
              loading="lazy"
              className={classes.methodImg}
              src={yogaJungle}
              alt="Woman doing yoga in the jungle"
            />
          </div>
        </div>
        <div className={classes.method}>
          <div className={classes.methodImgContainer}>
            <img
              loading="lazy"
              className={classes.methodImg}
              src={pyramid}
              alt="Pyramid in Chitchen Itza"
            />
          </div>
          <div className={classes.methodTextContent}>
            <h2 className={classes.methodHeader}>Pyramid excursions</h2>
            <p className={classes.methodDescription}>
              Mexico is home to some of the worlds most awe inspiring structures
              - the pyramids. These places of worship from the times of the Maya
              and the Aztec cultures are vibrant and full of energy. We
              regularly take trips to these magic places to feel the power there
              and to enjoy the "vibe". After one of these trips one feels
              energized and harmonious. These are also one of the best places in
              the world to find jewelry and other beautiful items made from
              obsidian and other materials which were revered by the indigenous
              peoples of Central America.
            </p>
          </div>
        </div>
        <div className={classes.method}>
          <div className={classes.methodTextContent}>
            <h2 className={classes.methodHeader}>Temazcal</h2>
            <p className={classes.methodDescription}>
              The Temazcal is an ancient method of cleansing and healing that
              dates back to the days of the Maya. Also known as a "Mayan
              sweatlodge" and "shamanic shower", the temazcal is a ceremony that
              aims to purify through high temperatures in an enclosed space
              while water spiced with various herbs is being vaporized on heated
              rocks. Music, chanting and high energy materials such as crystals
              is used to stimulate the flow of energy in the participants and
              often the reactions can be quite strong. It is a thoroughly
              cleansing and relaxing experience.
            </p>
          </div>
          <div className={classes.methodImgContainer}>
            <img
              loading="lazy"
              className={classes.methodImg}
              src={temazcal}
              alt="Temazcal painting"
            />
          </div>
        </div>
        <div className={classes.method}>
          <div className={classes.methodImgContainer}>
            <img
              loading="lazy"
              className={classes.methodImg}
              src={fruits}
              alt="Fruits"
            />
          </div>
          <div className={classes.methodTextContent}>
            <h2 className={classes.methodHeader}>Eco food/Jungle gastronomy</h2>
            <p className={classes.methodDescription}>
              Mexico's food culture is one of the world's most vibrant ones and
              on top of that, the jungle provides a plethora of delicious things
              to consume. Rich on vitamins and nutrition, the fruits and
              vegetables that we grow ourselves in our community does wonders
              for the health. It is a pleasure for the senses to eat things that
              are 100% natural and therefore full of flavour and nutrition.
            </p>
          </div>
        </div>
        <div className={classes.method}>
          <div className={classes.methodTextContent}>
            <h2 className={classes.methodHeader}>
              Eco tourism/Jungle adventures
            </h2>
            <p className={classes.methodDescription}>
              Our community resides in the jungle amongst one of the world's few
              remaining native cultures; the Maya. To spend time with us is to
              experience a way of life vastly different to the traditional
              Western lifestyle. There is a lot to do here and a lot of things
              to explore. One can go swimming in the underground lakes (locally
              referred to as cenotes), learn about agriculture, spend time with
              the locals or just go hiking in the beautiful jungle where every
              inch is teeming with life. To exist here is to recharge the
              batteries.
            </p>
          </div>
          <div className={classes.methodImgContainer}>
            <img
              loading="lazy"
              className={classes.methodImg}
              src={cenote}
              alt="Cenote"
            />
          </div>
        </div>
        <div className={classes.method}>
          <div className={classes.methodImgContainer}>
            <img
              loading="lazy"
              className={classes.methodImg}
              src={beach}
              alt="Beach"
            />
          </div>
          <div className={classes.methodTextContent}>
            <h2 className={classes.methodHeader}>Beach relaxation</h2>
            <p className={classes.methodDescription}>
              If the jungle is not for you, we offer other alternatives. The
              beaches of the Yucatan peninsula is spectacular and a great
              alternative to the forest if one enjoys the sea. For those that
              want a taste of the city life the beaches are within reach of that
              as well. Swimming, snorkeling amongst the coral reefs and surfing
              are all possible activites in our locations in Tulumn and Cancun.
            </p>
          </div>
        </div>
        <div className={classes.method}>
          <div className={classes.methodTextContent}>
            <h2 className={classes.methodHeader}>
              Healing/Therapeutic conversation
            </h2>
            <p className={classes.methodDescription}>
              Since our primary goal for each and every one of our visitors is
              health in the most holistic sense possible we offer both healing
              and therapy in various forms. This is done both individually and
              in groups in various ways depending on the needs of the
              individual. The approach is inspired by both spirituality and
              cognitive behavioral therapy in a mix of what we consider to be
              the best of both worlds.
            </p>
          </div>
          <div className={classes.methodImgContainer}>
            <img
              loading="lazy"
              className={classes.methodImg}
              src={bienvenidos}
              alt="Signs"
            />
          </div>
        </div>
        <div className={classes.method}>
          <div className={classes.methodImgContainer}>
            <img
              loading="lazy"
              className={classes.methodImg}
              src={fruits}
              alt="Fruits"
            />
          </div>
          <div className={classes.methodTextContent}>
            <h2 className={classes.methodHeader}>Eco food/Jungle gastronomy</h2>
            <p className={classes.methodDescription}>
              Mexico's food culture is one of the world's most vibrant ones and
              on top of that, the jungle provides a plethora of delicious things
              to consume. Rich on vitamins and nutrition, the fruits and
              vegetables that we grow ourselves in our community does wonders
              for the health. It is a pleasure for the senses to eat things that
              are 100% natural and therefore full of flavour and nutrition.
            </p>
          </div>
        </div>
        <div className={classes.method}>
          <div className={classes.methodTextContent}>
            <h2 className={classes.methodHeader}>Music</h2>
            <p className={classes.methodDescription}>
              Music. Materials, hantverk, honey etc.
            </p>
          </div>
          <div className={classes.methodImgContainer}>
            <img
              loading="lazy"
              className={classes.methodImg}
              src={cenote}
              alt="Cenote"
            />
          </div>
        </div>
      </div>
      <p className={classes.finishingParagraph}>
        We offer a wide variety of services and activities, too many to mention
        them all here. Beyond the ones covered above we offer (amongst other
        things) massage, pranayama breathing techniques, consultation regarding
        holistic health and much more.{' '}
        <Link className={classes.inlineLink} to="/contact">
          Contact us
        </Link>{' '}
        to learn more.
      </p>
    </div>
  );
};
