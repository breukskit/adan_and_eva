import React, { useContext } from 'react';

import { context } from '../App';

import { theme } from '../Theme';

import { Link } from 'react-router-dom';

import homePic from '../assets/2-min.jpg';
import adanSmilingCliff from '../assets/adan-smiling-cliff-min.jpg';

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
  },
  heroButton: {
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
  heroHeader: {
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
  heroSubHeader: {
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
  subHeader: {
    textAlign: 'center',
    background: 'rgba(0,0,0,0.95)',
    lineHeight: '2.1rem',
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
  },
  serviceSamplesHeader: {
    marginBottom: '2rem',
    color: theme.primaryTextColor,
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
  },
  cardLink: {
    color: theme.primaryColor,
    fontSize: '1.2rem',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  cardParagraph: {
    textAlign: 'center',
    lineHeight: '1.75rem',
    marginBottom: '1rem',
    fontSize: '1.1rem',
    fontWeight: 600,
    color: theme.primaryTextColor,
  },
  cardHeader: {
    color: theme.primaryColor,
    fontSize: '1.5rem',
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardHeaderh3: {
    textAlign: 'center',
    fontSize: '1.5rem',
  },
  cardIcon: {
    marginBottom: '.2rem',
  },
  inlineLink: {
    color: theme.primaryColor,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  belowCardsParagraph: {
    fontSize: '1.2rem',
    textAlign: 'center',
    lineHeight: '2rem',
  },
  callToAction: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    maxWidth: '1140px',
    margin: 'auto',
    marginBottom: '2rem',
    padding: '1rem',
    '@media(max-width: 766px)': {
      gridTemplateColumns: '1fr',
    },
  },
  callToActionText: {
    textAlign: 'center',
    '@media(max-width: 766px)': {
      order: 2,
      marginTop: '2rem',
    },
    padding: {
      top: 0,
      right: '1.5rem',
      bottom: 0,
      left: '1.5rem',
    },
  },
  callToActionP: {
    lineHeight: '2rem',
    fontSize: '1.1rem',
    '@media(min-width: 800px)': {
      maxWidth: '80%',
      margin: 'auto',
    },
  },
  callToActionh2: {
    marginBottom: '1.5rem',
  },
  callToActionImgContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  callToActionImg: {
    width: '300px',
  },
});

export const Home = () => {
  const classes = useStyles();
  const langContext = useContext(context);
  const language = langContext!.language;
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
          <h1 className={classes.heroHeader}>
            {language === 'english' && 'Welcome to the Jungle!'}
            {language === 'spanish' && 'Bienvenidos a la selva!'}
          </h1>
          <h3 className={classes.heroSubHeader}>
            {language === 'english' && 'Ready to try a different life?'}
            {language === 'spanish' && 'Listo para una vida diferente?'}
          </h3>
          <Link className={classes.heroButton} to="/contact">
            {language === 'english' && 'Book'}
            {language === 'spanish' && 'Reserva'}
          </Link>
        </div>
      </div>
      <h2 className={classes.subHeader}>
        {language === 'english' &&
          'We invite you to share our life in harmony with ourselves, each other and nature.'}
        {language === 'spanish' &&
          'Te invitamos a compartir nuestra vida en armonía con nosotros mismos, entre nosotros y con la naturaleza.'}
      </h2>
      <div className={classes.servicesSamples}>
        <h2 className={classes.serviceSamplesHeader}>
          {language === 'english' && 'Some of our services and activities:'}
          {language === 'spanish' && 'Algunos de nuestros actividades:'}
        </h2>
        <div className={classes.cardContainer}>
          <div className={classes.card}>
            <div className={classes.cardHeader}>
              <span>
                <FontAwesomeIcon className={classes.cardIcon} icon={faHeart} />
              </span>
              <h3 className={classes.cardHeaderh3}>Yoga</h3>
            </div>
            <p className={classes.cardParagraph}>
              {language === 'english' &&
                'Ashtanga Yoga from the Tibetan Yoga-tradition that "vacuums" the physical system and creates a sense of union between the body, mind and soul.'}
              {language === 'spanish' &&
                'La Yoga Ashtanga de la tradición Tibetana que purifica el sístema físico y cree una sensación de unión del cuerpo, de la mente y del alma.'}
            </p>
            <Link className={classes.cardLink} to="/services">
              {language === 'english' && 'Read More'}
              {language === 'spanish' && 'Lee mas'}
            </Link>
          </div>
          <div className={classes.card}>
            <div className={classes.cardHeader}>
              <span>
                <FontAwesomeIcon className={classes.cardIcon} icon={faFrog} />
              </span>
              <h3 className={classes.cardHeaderh3}>Temazcal</h3>
            </div>
            <p className={classes.cardParagraph}>
              {language === 'english' &&
                'Also known as "Mayan sweatlodge" or "shamanic shower" is aceremony conducted in high temperatures where water, herbs, music, and energetic crystals is used to cleanse the body and purify the mind and spirit.'}
              {language === 'spanish' &&
                'También conocido como "baño de sudor maya" o "ducha chamánica" es una ceremonia que se lleva a cabo a altas temperaturas donde se usa agua, hierbas, música y cristales energéticos para limpiar el cuerpo y purificar la mente y el espíritu.'}
            </p>
            <Link className={classes.cardLink} to="/services">
              {language === 'english' && 'Read More'}
              {language === 'spanish' && 'Lee mas'}
            </Link>
          </div>
          <div className={classes.card}>
            <div className={classes.cardHeader}>
              <span>
                <FontAwesomeIcon className={classes.cardIcon} icon={faLeaf} />
              </span>
              <h3 className={classes.cardHeaderh3}>
                {language === 'english' && 'Community living in nature'}
                {language === 'spanish' &&
                  'Una vida de communidad en la naturaleza'}
              </h3>
            </div>
            <p className={classes.cardParagraph}>
              {language === 'english' &&
                "We live together in each other's loving company in the heart of the beautiful Yucatan Jungle where life is given the ultimate conditions to blossom."}
              {language === 'spanish' &&
                'Vivimos juntos en la compañía amorosa de los demás en el corazón de la hermosa selva de Yucatán, donde la vida tiene las mejores condiciones para florecer.'}
            </p>
            <Link className={classes.cardLink} to="/services">
              {language === 'english' && 'Read More'}
              {language === 'spanish' && 'Lee mas'}
            </Link>
          </div>
        </div>
        <p className={classes.belowCardsParagraph}>
          <Link className={classes.inlineLink} to="/services">
            {language === 'english' && 'Click here'}
            {language === 'spanish' && 'Haga clic aquí'}
          </Link>{' '}
          {language === 'english' &&
            'to read more about what you could experience during your stay. '}
          {language === 'spanish' &&
            'para leer más sobre lo que podría experimentar durante su estadía. '}
          <Link className={classes.inlineLink} to="/about-us">
            {language === 'english' && 'Click here'}
            {language === 'spanish' && 'Haga clic aquí'}
          </Link>{' '}
          {language === 'english' &&
            'to read more about the people behind this initiative. '}
          {language === 'spanish' &&
            'para leer más sobre las personas detrás de esta iniciativa.'}
        </p>
      </div>
      <div className={classes.callToAction}>
        <div className={classes.callToActionText}>
          <h2 className={classes.callToActionh2}>
            {language === 'english' && 'Take the time to realign yourself'}
            {language === 'spanish' && 'Tómese el tiempo para realinearse'}
          </h2>
          <p className={classes.callToActionP}>
            {language === 'english' &&
              'We strive for achieving a sense of balance and peace in the entiretyof the being. What we want to see in a person after a visit with usis someone who is energized, healthy, happy, strong and full ofpurpose. We consider it to be the birthright of every human being tofeel good and we will do everything in our power to achieve this for everyone that comes. Read more about our methods '}
            {language === 'spanish' &&
              'Nos esforzamos por lograr una sensación de equilibrio y paz en la totalidad del ser. Lo que queremos ver en una persona después de una visita con nosotros es alguien que esté lleno de energía, sano, feliz, fuerte y lleno de propósito. Consideramos que es un derecho innato de todo ser humano sentirse bien y haremos todo lo que esté a nuestro alcance para lograrlo para todos los que vengan. Lea más sobre nuestros métodos '}
            <Link className={classes.inlineLink} to="/services">
              {language === 'english' && 'here'}
              {language === 'spanish' && 'aquí'}
            </Link>
            .
          </p>
        </div>
        <div className={classes.callToActionImgContainer}>
          <img
            loading="lazy"
            className={classes.callToActionImg}
            src={adanSmilingCliff}
            alt="Man standing on cliff smiling"
          />
        </div>
      </div>
    </div>
  );
};
