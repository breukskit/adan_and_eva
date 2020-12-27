import React, { useContext } from 'react';

import { context } from '../App';

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
  const langContext = useContext(context);
  const language = langContext!.language;
  return (
    <div className={classes.aboutUsContainer}>
      <img
        loading="lazy"
        className={classes.heroImg}
        src={bienvenidos}
        alt="Signs"
      />
      <h1 className={classes.header}>
        {language === 'english' && 'Our community'}
        {language === 'spanish' && 'Nuestra comunidad'}
      </h1>
      <p className={classes.introduction}>
        {language === 'english' &&
          'We are a group of people that have concluded that life should besomething vibrant and meaningful and that we are willing to spend our lives working towards that goal. We are very sincere in this conclusion - so much so that we have left everything behind to go into the Mexican jungle and start a community amongst the Maya Indians of the Yucatan peninsula. Here, life is close to nature and we focus on health and happiness rather than economic growth and efficiency. Here, life is something to be enjoyed and nurtured with love rather than endured.'}
        {language === 'spanish' &&
          'Somos un grupo de personas que hemos llegado a la conclusión de que la vida debe ser algo vibrante y significativo y que estamos dispuestos a pasar la vida trabajando para lograr ese objetivo. Somos muy sinceros en esta conclusión, tanto que lo hemos dejado todo para ir a la selva mexicana y comenzar una comunidad entre los indios mayas de la península de Yucatán. Aquí, la vida está cerca de la naturaleza y nos enfocamos en la salud y la felicidad más que en el crecimiento económico y la eficiencia. Aquí, la vida es algo para disfrutar y nutrirse con amor en lugar de soportarlo.'}
        <br />
        <br />
        {language === 'english' &&
          'Below you will find a brief individual description of the people involved in this initiative.'}
        {language === 'spanish' &&
          'A continuación encontrará una breve descripción individual de las personas involucradas en esta iniciativa.'}
      </p>
      <div className={classes.cardContainer}>
        <div className={classes.card}>
          <img className={classes.cardImg} src={eva} alt="Eva" />
          <h3 className={classes.cardTitle}>Eva Forstén</h3>
          <p className={classes.cardParagraph}>
            {language === 'english' &&
              'Eva is a long time spiritual seeker and practitioner of various esoteric methods as well as a well educated academic. She has written a number of books and conducted healing on a large number of individuals from many different places and backgrounds. She wants to live in such a way where it is the heart and soul that is the primary source of truth rather than the mind. Her main passion in life is the spiritual process and she will gladly follow and guide anyone on their path.'}
            {language === 'spanish' &&
              'Eva es una buscadora espiritual desde hace mucho tiempo y practicante de varios métodos esotéricos, así como una académica bien educada. Ha escrito varios libros y ha llevado a cabo la curación de un gran número de personas de diferentes lugares y orígenes. Quiere vivir de tal manera que sea el corazón y el alma la principal fuente de verdad en lugar de la mente. Su principal pasión en la vida es el proceso espiritual y con mucho gusto seguirá y guiará a cualquiera en su camino.'}
          </p>
        </div>
        <div className={classes.card}>
          <img className={classes.cardImg} src={adan} alt="Adan" />
          <h3 className={classes.cardTitle}>Adan Corroviña Maya</h3>
          <p className={classes.cardParagraph}>
            {language === 'english' &&
              'One could perhaps describe Adan as the major force behind thisinitiative. He has an extensive history with yoga, natural medicines, spirituality and holistic health, primarily from India and Mexico. He has been all over the world in a search for meaning and truth in life and his journey has now taken him back to where he was born and raised. Now he is determined to share his passion with others that also seek something deep in the human existence.'}
            {language === 'spanish' &&
              'Quizás se podría describir a Adán como la principal fuerza detrás de esta iniciativa. Tiene una amplia historia con el yoga, las medicinas naturales, la espiritualidad y la salud holística, principalmente de India y México. Ha estado por todo el mundo en busca de significado y verdad en la vida y su viaje ahora lo ha llevado de regreso al lugar donde nació y se crió. Ahora está decidido a compartir su pasión con otros que también buscan algo profundo en la existencia humana.'}
          </p>
        </div>
        <div className={classes.card}>
          <img className={classes.cardImg} src={chicho} alt="Jesús" />
          <h3 className={classes.cardTitle}>Jesús Corroviña Maya</h3>
          <p className={classes.cardParagraph}>
            {language === 'english' &&
              'Jesús (or Chicho as he is often called) is like all of us a long time seeker of a meaningful existence. In our community in the jungle he has found a sense of purpose and calmness in everyday life where he spreads light with his calm and loving demeanor. Jesús is a very competent housebuilder and he have played and plays an important role in the construction of our community home in the jungle.'}
            {language === 'spanish' &&
              'Jesús (o Chicho como se le llama a menudo) es como todos nosotros un buscador de una existencia significativa desde hace mucho tiempo. En nuestra comunidad en la selva ha encontrado un sentido de propósito y tranquilidad en la vida cotidiana donde se difunde la luz con su comportamiento tranquilo y amoroso. Jesús es un constructor de casas muy competente y ha jugado y juega un papel importante en la construcción de nuestra casa comunitaria en la selva.'}
          </p>
        </div>
        <div className={classes.card}>
          <img className={classes.cardImg} src={daniel} alt="Daniel" />
          <h3 className={classes.cardTitle}>Daniel Forstén</h3>
          <p className={classes.cardParagraph}>
            {language === 'english' &&
              'Daniel is seeking a sense of liberation and freedom through simple living and a healthy relationship with the self. He feels that he in this initiative has found a purpose and a home. Daniel is a long time practitioner of music which is something he often utilizes during our daily activities. He is also good at organization and structure and often serves as a coordinator of practical matters in our community.'}
            {language === 'spanish' &&
              'Daniel busca un sentido de liberación y libertad a través de una vida sencilla y una relación sana consigo mismo. Siente que en esta iniciativa ha encontrado un propósito y un hogar. Daniel es un practicante de la música desde hace mucho tiempo, que es algo que a menudo utiliza durante nuestras actividades diarias. También es bueno en organización y estructura y, a menudo, se desempeña como coordinador de asuntos prácticos en nuestra comunidad.'}
          </p>
        </div>
        <div className={classes.card}>
          <img className={classes.cardImg} src={marcus} alt="Marcus" />
          <h3 className={classes.cardTitle}>Marcus Forstén</h3>
          <p className={classes.cardParagraph}>
            {language === 'english' &&
              'Marcus takes a very special role in our community. With his broad academic background he has a great interest in matters concerning holistic health and human life. He has education within behavioral science, cognitive behavioral therapy (amongst other things) and a genuine passion for exchange of life experiences. This leads him on a particular path with the people he meets. He has lived and worked in different parts of the world and met a lot of different people. Marcus is always there to listen, explore and talk about life.'}
            {language === 'spanish' &&
              'Marcus tiene un papel muy especial en nuestra comunidad. Con su amplia formación académica, tiene un gran interés en asuntos relacionados con la salud integral y la vida humana. Tiene formación en ciencias del comportamiento, terapia cognitivo-conductual (entre otras cosas) y una auténtica pasión por el intercambio de experiencias de vida. Esto lo lleva por un camino particular con las personas que conoce. Ha vivido y trabajado en diferentes partes del mundo y ha conocido a mucha gente diferente. Marcus siempre está ahí para escuchar, explorar y hablar sobre la vida.'}
          </p>
        </div>
      </div>
    </div>
  );
};
