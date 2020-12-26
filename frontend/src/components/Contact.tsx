import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';

import { theme } from '../Theme';

import { context } from '../App';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  contactContainer: {
    maxWidth: '1140px',
    margin: 'auto',
    padding: '1rem',
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
});

export const Contact = () => {
  const classes = useStyles();
  const lang = useContext(context)!.language;
  const [state, setState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = state;
  const handleChange = (e: ChangeEvent) => {
    const target = e.currentTarget as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = fetch('/sendEmail', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
    });
  };
  return (
    <div className={classes.contactContainer}>
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
        <button className={classes.formButton} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
