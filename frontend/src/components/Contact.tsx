import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';

import { theme } from '../Theme';

import { context } from '../App';

import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './animation.css';

const useStyles = createUseStyles({
  contactContainer: {
    maxWidth: '1140px',
    margin: 'auto',
    padding: '1rem',
    position: 'relative',
  },
  header: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontSize: '3rem',
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '1.1rem',
    lineHeight: '2rem',
  },
  formInformation: {
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  formInformationHeader: {
    marginBottom: '1rem',
    fontSize: '2rem',
  },
  formInformationP: {
    fontSize: '1.1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '600px',
    margin: 'auto',
    marginBottom: '2rem',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: '1.5rem',
  },
  formInput: {
    fontSize: '1.2rem',
    padding: '.5rem',
    borderRadius: '5px',
    border: '2px solid rgba(0,0,0,0.15)',
  },
  formButton: {
    background: theme.primaryColor,
    padding: {
      top: '.5rem',
      right: '1.5rem',
      bottom: '.5rem',
      left: '1.5rem',
    },
    border: 'none',
    borderRadius: '5px',
    textTransform: 'uppercase',
    fontSize: '1.1rem',
    color: '#ffffff',
    letterSpacing: '.1rem',
    transition: 'all 200ms ease-in-out',
    outline: 'none',
    '&:hover': {
      cursor: 'pointer',
      background: '#1fa3a3',
      transform: 'scale(1.05)',
    },
  },
  labelSpan: {
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: '.5rem',
  },
  textArea: {
    fontSize: '1.2rem',
    padding: '.5rem',
    borderRadius: '5px',
    border: '2px solid rgba(0,0,0,0.15)',
  },
  successModal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '250px',
    maxWidth: '400px',
    transform: 'translateX(-50%) translateY(-50%)',
    background: '#ffffff',
    boxShadow: '3px 3px 10px 0px rgba(50, 50, 50, 0.5)',
  },
  serverErrorModal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '250px',
    maxWidth: '400px',
    transform: 'translateX(-50%) translateY(-50%)',
    background: '#ffffff',
    boxShadow: '3px 3px 10px 0px rgba(50, 50, 50, 0.5)',
  },
  modalExit: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  successModalHeader: {
    marginTop: '.5rem',
    textAlign: 'center',
    marginBottom: '1rem',
    color: theme.primaryColor,
  },
  serverErrorModalHeader: {
    marginTop: '.5rem',
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#842029',
  },
  successModalSubHeader: {
    textAlign: 'center',
    marginBottom: '1rem',
  },
  serverErrorModalSubheader: {
    textAlign: 'center',
    marginBottom: '1rem',
  },
  successModalParagraph: {
    textAlign: 'center',
    lineHeight: '1.5rem',
    marginBottom: '1.5rem',
  },
  serverErrorModalParagraph: {
    textAlign: 'center',
    lineHeight: '1.5rem',
    marginBottom: '1.5rem',
  },
  successModalCloseBtn: {
    padding: {
      top: '.5rem',
      right: '1.5rem',
      bottom: '.5rem',
      left: '1.5rem',
    },
    background: theme.primaryColor,
    border: 'none',
    outline: 'none',
    borderRadius: '5px',
    textTransform: 'uppercase',
    fontSize: '1rem',
    color: '#ffffff',
    transition: 'all 200ms ease-in-out',
    letterSpacing: '.1rem',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.05)',
      background: theme.btnHoverColor,
    },
  },
  errorContainer: {
    width: '100%',
    marginBottom: '1.5rem',
    border: '2px solid #DC3545',
    padding: '2rem',
    borderRadius: '5px',
    background: '#F8D7DA',
  },
  errorMsg: {
    textAlign: 'center',
    color: '#842029',
    fontWeight: 500,
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Contact = () => {
  const classes = useStyles();
  const lang = useContext(context)!.language;
  const [state, setState] = useState({ name: '', email: '', message: '' });
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleError = () => {
    setError(true);
    if (name === '') {
      document.getElementById('name')!.style.border = '2px solid red';
    }
    if (email === '') {
      document.getElementById('email')!.style.border = '2px solid red';
    }
    if (message === '') {
      document.getElementById('message')!.style.border = '2px solid red';
    }
    setTimeout(() => {
      setError(false);
      document.getElementById('name')!.style.border =
        '2px solid rgba(0,0,0,0.15)';
      document.getElementById('email')!.style.border =
        '2px solid rgba(0,0,0,0.15)';
      document.getElementById('message')!.style.border =
        '2px solid rgba(0,0,0,0.15)';
    }, 8000);
  };
  const { name, email, message } = state;
  const handleChange = (e: ChangeEvent) => {
    const target = e.currentTarget as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      handleError();
    }

    if (name !== '' && email !== '' && message !== '') {
      setLoading(true);
      try {
        const response = await fetch('/sendEmail', {
          method: 'POST',
          mode: 'cors',
          cache: 'default',
          headers: {
            'Content-type': 'application/json',
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(state),
        });
        const data = await response.json();
        setState({ name: '', email: '', message: '' });
        if (data.msg === 'Success') {
          setLoading(false);
          setEmailSuccess(true);
        } else {
          setServerError(true);
        }
      } catch (error) {
        // console.log(error);
        // console.log('hej');
        setServerError(true);
        setLoading(false);
      }
    }
  };
  return (
    <div className={classes.contactContainer}>
      {loading && (
        <div className={classes.overlay}>
          <div className="loader"></div>
        </div>
      )}
      {serverError && (
        <div className={classes.serverErrorModal}>
          <FontAwesomeIcon
            className={classes.modalExit}
            icon={faTimes}
            size="lg"
            onClick={() => setServerError(false)}
          />
          <h2 className={classes.serverErrorModalHeader}>Error!</h2>
          <h3 className={classes.serverErrorModalSubheader}>
            Your email could not be sent!
          </h3>
          <p className={classes.serverErrorModalParagraph}>
            An error occurred. Please use the contact-information in the bottom
            of the page instead.
          </p>
          <button
            className={classes.successModalCloseBtn}
            onClick={() => setServerError(false)}
          >
            Close
          </button>
        </div>
      )}
      {emailSuccess && (
        <div className={classes.successModal}>
          <FontAwesomeIcon
            className={classes.modalExit}
            icon={faTimes}
            size="lg"
            onClick={() => setEmailSuccess(false)}
          />
          <h2 className={classes.successModalHeader}>Success!</h2>
          <h3 className={classes.successModalSubHeader}>
            Your email has been sent!
          </h3>
          <p className={classes.successModalParagraph}>
            Thank you for your message. We will get back to you as soon as
            possible.
          </p>
          <button
            className={classes.successModalCloseBtn}
            onClick={() => setEmailSuccess(false)}
          >
            Close
          </button>
        </div>
      )}
      <h1 className={classes.header}>
        {lang === 'english' && 'Contact'}
        {lang === 'spanish' && 'Contacto'}
      </h1>
      <p className={classes.paragraph}>
        Contact us and we will get in touch with you as soon as possible! We are
        looking forward to hearing from you.
      </p>
      <div className={classes.formInformation}>
        <h3 className={classes.formInformationHeader}>Contact Form</h3>
        <p className={classes.formInformationP}>
          Required fields are marked with *
        </p>
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <label htmlFor="name" className={classes.label}>
          <span className={classes.labelSpan}>Name: *</span>
          <input
            className={classes.formInput}
            onChange={handleChange}
            value={name}
            type="text"
            name="name"
            id="name"
            placeholder="Name..."
          />
        </label>
        <label htmlFor="email" className={classes.label}>
          <span className={classes.labelSpan}>Email: *</span>
          <input
            value={email}
            className={classes.formInput}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            placeholder="Email..."
          />
        </label>
        <label htmlFor="message" className={classes.label}>
          <span className={classes.labelSpan}>Message: *</span>
          <textarea
            value={message}
            className={classes.textArea}
            onChange={handleChange}
            name="message"
            id="message"
            cols={30}
            rows={10}
          ></textarea>
        </label>
        {error && (
          <div className={classes.errorContainer}>
            <h3 className={classes.errorMsg}>
              Please fill out all the required fields
            </h3>
          </div>
        )}
        <button className={classes.formButton} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
