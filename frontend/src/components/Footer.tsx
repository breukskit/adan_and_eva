import React, { useContext } from 'react';

import { context } from '../App';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

import mexicanFlag from '../assets/mexican-flag.png';
import britishFlag from '../assets/british-flag.png';

import { createUseStyles } from 'react-jss';
import { theme } from '../Theme';

const useStyles = createUseStyles({
  footer: {
    background: '#252525',
    padding: '2rem',
    '@media(max-width: 275px)': {
      padding: '1rem',
    },
  },
  footerWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    '@media(max-width: 700px)': {
      gridTemplateColumns: '1fr',
    },
  },
  leftContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  footerHeader: {
    color: '#C5C5C5',
    marginBottom: '2rem',
  },
  socialMediaLinks: {
    marginBottom: '1.5rem',
  },
  languages: {
    marginBottom: '1.5rem',
  },
  languagePick: {
    color: '#767676',
    marginBottom: '1rem',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  flag: {
    marginRight: '.5rem',
  },
  rightContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  rightInnerContent: {
    color: '#767676',
    '@media(max-width: 700px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  googleMap: {
    width: '300',
    height: '300',
  },
  inlineLink: {
    color: theme.primaryColor,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

interface IFooterProps {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export const Footer = (props: IFooterProps) => {
  const classes = useStyles();
  const langContext = useContext(context);
  const language = langContext!.language;
  return (
    <footer className={classes.footer}>
      <div className={classes.footerWrapper}>
        <div className={classes.leftContent}>
          <h3 className={classes.footerHeader}>
            {language === 'english' && 'Choose language'}
            {language === 'spanish' && 'Elige lengua'}
          </h3>
          <div className={classes.languages}>
            <p
              className={classes.languagePick}
              onClick={() => langContext!.setLanguage('spanish')}
            >
              <img
                className={classes.flag}
                src={mexicanFlag}
                alt="Mexican language picker"
              />
              Español
            </p>
            <p
              className={classes.languagePick}
              onClick={() => langContext!.setLanguage('english')}
            >
              <img
                className={classes.flag}
                src={britishFlag}
                alt="English language picker"
              />
              English
            </p>
          </div>
          <h3 className={classes.footerHeader}>
            {language === 'english' && 'Follow us on social media'}
            {language === 'spanish' && 'Síguenos en las redes sociales'}
          </h3>
          <div className={classes.socialMediaLinks}>
            <a
              href="https://www.facebook.com/AdanAndEvaPreispanic"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookF} color="#767676" size="2x" />
            </a>
          </div>
          <h3 className={classes.footerHeader}>
            {language === 'english' && 'Visit our blog'}
            {language === 'spanish' && 'Visita nuestro blog'}
          </h3>
          <div className={classes.socialMediaLinks}>
            <a
              className={classes.inlineLink}
              href="https://adanandeva.wixsite.com/blog"
              rel="noreferrer"
              target="_blank"
            >
              adanandeva.wixsite.com/blog
            </a>
          </div>
        </div>

        <div className={classes.rightContent}>
          <h3 className={classes.footerHeader}>
            {language === 'english' && 'Contact information'}
            {language === 'spanish' && 'Información de contacto'}
          </h3>
          <div className={classes.rightInnerContent}>
            <h4 style={{ marginBottom: '.5rem' }}>Email:</h4>
            <p style={{ marginBottom: '1rem' }}>
              <a
                style={{ color: '#767676' }}
                href="mailto:daniel.forsten@hotmail.com"
              >
                daniel.forsten@hotmail.com
              </a>
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <a style={{ color: '#767676' }} href="mailto:evafor60@gmail.com">
                evafor60@gmail.com
              </a>
            </p>
            <h4 style={{ marginBottom: '.5rem' }}>
              {language === 'english' && 'Phone number/WhatsApp:'}
              {language === 'spanish' && 'Número de teléfono/WhatsApp:'}
            </h4>
            <p style={{ marginBottom: '1rem' }}>+52 984 186 4634</p>
            <p style={{ marginBottom: '1rem' }}>+52 984 235 5135</p>
            <h4 style={{ marginBottom: '.5rem' }}>
              {language === 'english' && 'Address:'}
              {language === 'spanish' && 'Dirección:'}
            </h4>
            <p style={{ marginBottom: '1rem' }}>
              Nuevo Durango, Quintana Roo, Mexiko
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7044.542850107378!2d-87.58781096463419!3d20.721726221903374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f51e0e5a87eb213%3A0x73f6839a3660fa34!2sNuevo%20Durango%2C%20Quintana%20Roo%2C%20Mexiko!5e0!3m2!1ssv!2sse!4v1608928661202!5m2!1ssv!2sse"
              width="100%"
              height="300"
              style={{ border: 0 }}
              aria-hidden="false"
              title="gooogleMapsiFrame"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};
