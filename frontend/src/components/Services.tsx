import React, { useContext } from 'react';

import { context } from '../App';

import { theme } from '../Theme';

import { Link } from 'react-router-dom';

import yoga from '../assets/yoga.jpg';
import pyramid from '../assets/pyramid.jpg';
import temazcal from '../assets/temazcal.jpg';
import fruits from '../assets/fruits.jpg';
import cenote from '../assets/cenote.jpg';
import beach from '../assets/beach.jpg';
import bienvenidos from '../assets/11-min.jpg';
import crystals from '../assets/crystals.jpg';
import drums from '../assets/drums.jpg';

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
    fontSize: '2.5rem',
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
    maxHeight: '100%',
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
  const langContext = useContext(context);
  const language = langContext!.language;
  return (
    <div className={classes.servicesContainer}>
      <h1 className={classes.header}>
        {language === 'english' && 'Services'}
        {language === 'spanish' && 'Servicios'}
      </h1>
      <h3 className={classes.subHeader}>
        {language === 'english' &&
          'Below you will find a description of the things we like to do in our community and the methods and practices that we use to enhance life.'}
        {language === 'spanish' &&
          'A continuación encontrará una descripción de las cosas que nos gusta hacer en nuestra comunidad y los métodos y prácticas que utilizamos para mejorar la vida.'}
      </h3>
      <div className={classes.methodsContainer}>
        <div className={classes.method}>
          <div className={classes.methodTextContent}>
            <h2 className={classes.methodHeader}>Yoga</h2>
            <p className={classes.methodDescription}>
              {language === 'english' &&
                'Yoga is not just a set of acrobatic exercises - it is a way of life. It is a special kind of relationship between the different parts of the being.'}
              {language === 'spanish' &&
                'El yoga no es solo un conjunto de ejercicios acrobáticos, es una forma de vida. Es un tipo especial de relación entre las diferentes partes del ser.'}
              <br />
              <br />
              {language === 'english' &&
                'When one practices yoga he or she is cleaning, both in a physical and energetical sense. This cleaning paves the way for energy to flow freely through the system. When an individual has this kind of flow he or she experiences a profound sense of health, in both body and mind. In our community we practice Ashtangayoga which is a traditional, methodical approach.'}
              {language === 'spanish' &&
                'Cuando uno practica yoga está limpiando, tanto en el sentido físico como energético. Esta limpieza allana el camino para que la energía fluya libremente a través del sistema. Cuando un individuo tiene este tipo de flujo, experimenta una profunda sensación de salud, tanto en el cuerpo como en la mente. En nuestra comunidad practicamos Ashtangayoga, que es un enfoque tradicional y metódico.'}
            </p>
          </div>
          <div className={classes.methodImgContainer}>
            <img
              loading="lazy"
              className={classes.methodImg}
              src={yoga}
              alt="Woman doing yoga"
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
            <h2 className={classes.methodHeader}>
              {language === 'english' && 'Pyramid excursions'}
              {language === 'spanish' && 'Excursiones piramidales'}
            </h2>
            <p className={classes.methodDescription}>
              {language === 'english' &&
                'Mexico is home to some of the worlds most awe inspiring structures - the pyramids. These places of worship from the times of the Maya and the Aztec cultures are vibrant and full of energy. We regularly take trips to these magic places to feel the power there and to enjoy the "vibe". After one of these trips one feels energized and harmonious. These are also one of the best places in the world to find jewelry and other beautiful items made from obsidian and other materials which were revered by the indigenous peoples of Central America.'}
              {language === 'spanish' &&
                'México es el hogar de algunas de las estructuras más impresionantes del mundo: las pirámides. Estos lugares de culto de los tiempos de las culturas maya y azteca son vibrantes y llenos de energía. Regularmente hacemos viajes a estos lugares mágicos para sentir el poder allí y disfrutar del "ambiente". Después de uno de estos viajes uno se siente lleno de energía y armonioso. Estos también son uno de los mejores lugares del mundo para encontrar joyas y otros artículos hermosos hechos de obsidiana y otros materiales que fueron venerados por los pueblos indígenas de América Central.'}
            </p>
          </div>
        </div>
        <div className={classes.method}>
          <div className={classes.methodTextContent}>
            <h2 className={classes.methodHeader}>Temazcal</h2>
            <p className={classes.methodDescription}>
              {language === 'english' &&
                'The Temazcal is an ancient method of cleansing and healing that dates back to the days of the Maya. Also known as a "Mayan sweatlodge" and "shamanic shower", the temazcal is a ceremony that aims to purify through high temperatures in an enclosed space while water spiced with various herbs is being vaporized on heated rocks. Music, chanting and high energy materials such as crystals is used to stimulate the flow of energy in the participants and often the reactions can be quite strong. It is a thoroughly cleansing and relaxing experience.'}
              {language === 'spanish' &&
                'El Temazcal es un método antiguo de limpieza y curación que se remonta a los días de los mayas. También conocido como "sudadera maya" y "ducha chamánica", el temazcal es una ceremonia que tiene como objetivo purificar a altas temperaturas en un espacio cerrado mientras se vaporiza agua condimentada con diversas hierbas sobre rocas calientes. Música, cánticos y materiales de alta energía como cristales se utilizan para estimular el flujo de energía en los participantes y, a menudo, las reacciones pueden ser bastante fuertes. Es una experiencia de limpieza y relajación a fondo.'}
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
            <h2 className={classes.methodHeader}>
              {language === 'english' && 'Eco food/Jungle gastronomy'}
              {language === 'spanish' &&
                'Comida ecologica/Gastronomía de la selva'}
            </h2>
            <p className={classes.methodDescription}>
              {language === 'english' &&
                "Mexico's food culture is one of the world's most vibrant ones andon top of that, the jungle provides a plethora of delicious things to consume. Rich on vitamins and nutrition, the fruits and vegetables that we grow ourselves in our community does wonders for the health. It is a pleasure for the senses to eat things that are 100% natural and therefore full of flavour and nutrition."}
              {language === 'spanish' &&
                'La cultura gastronómica de México es una de las más vibrantes del mundo y, además, la selva ofrece una gran cantidad de cosas deliciosas para consumir. Rico en vitaminas y nutrición, las frutas y verduras que cultivamos nosotros mismos en nuestra comunidad hacen maravillas por la salud. Es un placer para los sentidos comer cosas 100% naturales y por tanto llenas de sabor y nutrición.'}
            </p>
          </div>
        </div>
        <div className={classes.method}>
          <div className={classes.methodTextContent}>
            <h2 className={classes.methodHeader}>
              {language === 'english' && 'Eco tourism/Jungle adventures'}
              {language === 'spanish' &&
                'Turismo ecologico/Adventuras de la selva'}
            </h2>
            <p className={classes.methodDescription}>
              {language === 'english' &&
                "Our community resides in the jungle amongst one of the world's few remaining native cultures; the Maya. To spend time with us is to experience a way of life vastly different to the traditional Western lifestyle. There is a lot to do here and a lot of things to explore. One can go swimming in the underground lakes (locally referred to as cenotes), learn about agriculture, spend time with the locals or just go hiking in the beautiful jungle where every inch is teeming with life. To exist here is to recharge the batteries."}
              {language === 'spanish' &&
                'Nuestra comunidad reside en la selva entre una de las pocas culturas nativas que quedan en el mundo; los mayas. Pasar tiempo con nosotros es experimentar una forma de vida muy diferente al estilo de vida occidental tradicional. Hay mucho que hacer aquí y muchas cosas que explorar. Uno puede nadar en los lagos subterráneos (conocidos localmente como cenotes), aprender sobre agricultura, pasar tiempo con los lugareños o simplemente ir de excursión a la hermosa jungla donde cada centímetro está lleno de vida. Existir aquí es recargar las pilas.'}
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
            <h2 className={classes.methodHeader}>
              {language === 'english' && 'Beach relaxation'}
              {language === 'spanish' && 'Relaxión de la playa'}
            </h2>
            <p className={classes.methodDescription}>
              {language === 'english' &&
                'If the jungle is not for you, we offer other alternatives. The beaches of the Yucatan peninsula is spectacular and a great alternative to the forest if one enjoys the sea. For those that want a taste of the city life the beaches are within reach of that as well. Swimming, snorkeling amongst the coral reefs and surfing are all possible activites in our locations in Tulumn and Cancun.'}
              {language === 'spanish' &&
                'Si la selva no es para ti, te ofrecemos otras alternativas. Las playas de la península de Yucatán son espectaculares y una gran alternativa al bosque si se disfruta del mar. Para aquellos que quieran probar la vida de la ciudad, las playas también están al alcance de la mano. Nadar, bucear entre los arrecifes de coral y surfear son actividades posibles en nuestras ubicaciones en Tulumn y Cancún.'}
            </p>
          </div>
        </div>
        <div className={classes.method}>
          <div className={classes.methodTextContent}>
            <h2 className={classes.methodHeader}>
              {language === 'english' && 'Healing/Therapeutic conversation'}
              {language === 'spanish' && 'Curacion/Conversacion terapeútica'}
            </h2>
            <p className={classes.methodDescription}>
              {language === 'english' &&
                'Since our primary goal for each and every one of our visitors is health in the most holistic sense possible we offer both healing and therapy in various forms. This is done both individually and in groups in various ways depending on the needs of the individual. Our approach is inspired by both spirituality and cognitive behavioral therapy in a mix of what we consider to be the best of both worlds.'}
              {language === 'spanish' &&
                'Dado que nuestro objetivo principal para todos y cada uno de nuestros visitantes es la salud en el sentido más holístico posible, ofrecemos curación y terapia en varias formas. Esto se hace tanto individualmente como en grupos de varias formas dependiendo de las necesidades del individuo. Nuestro enfoque está inspirado tanto en la espiritualidad como en la terapia cognitivo-conductual en una combinación de lo que consideramos lo mejor de ambos mundos.'}
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
              src={drums}
              alt="Drums"
            />
          </div>
          <div className={classes.methodTextContent}>
            <h2 className={classes.methodHeader}>
              {language === 'english' && 'Music'}
              {language === 'spanish' && 'Música'}
            </h2>
            <p className={classes.methodDescription}>
              {language === 'english' &&
                'Music playes a important role in our everyday life and activities. We sing and play all the time, using every instrument at our disposal. During our ceremonies we encourage everyone to pick up our preispanic flutes and drums and join in - it is a simple way to elevate any situation.'}
              {language === 'spanish' &&
                'La música juega un papel importante en nuestra vida y actividades diarias. Cantamos y tocamos todo el tiempo, utilizando todos los instrumentos a nuestra disposición. Durante nuestras ceremonias, animamos a todos a que tomen nuestras flautas y tambores prehispánicos y se unan; es una forma sencilla de elevar cualquier situación.'}
            </p>
          </div>
        </div>
        <div className={classes.method}>
          <div className={classes.methodTextContent}>
            <h2 className={classes.methodHeader}>
              {language === 'english' && 'Energetic materials'}
              {language === 'spanish' && 'Materiales energéticos'}
            </h2>
            <p className={classes.methodDescription}>
              {language === 'english' &&
                'Just like with the music our energy-charged materials tends to follow us everywhere we go. We use these materials (such as obsidian, amber, quartzes etc) as a source of energy in our ceremonies and of course also for their beauty in everyday life. The Maya held these materials in very high esteem and we follow their example!'}
              {language === 'spanish' &&
                'Al igual que con la música, nuestros materiales cargados de energía tienden a seguirnos a todas partes. Usamos estos materiales (como obsidiana, ámbar, cuarzos, etc.) como fuente de energía en nuestras ceremonias y por supuesto también por su belleza en la vida cotidiana. Los mayas tenían estos materiales en muy alta estima y seguimos su ejemplo.'}
            </p>
          </div>
          <div className={classes.methodImgContainer}>
            <img
              loading="lazy"
              className={classes.methodImg}
              src={crystals}
              alt="Crystals"
            />
          </div>
        </div>
      </div>
      <p className={classes.finishingParagraph}>
        {language === 'english' &&
          'We offer a wide variety of services and activities, too many to mention them all here. Beyond the ones covered above we offer (amongst other things) massage, pranayama breathing techniques, consultation regarding holistic health and much more. '}
        {language === 'spanish' &&
          'Ofrecemos una amplia variedad de servicios y actividades, demasiados para mencionarlos todos aquí. Más allá de los mencionados anteriormente, ofrecemos (entre otras cosas) masajes, técnicas de respiración pranayama, consultas sobre salud holística y mucho más. '}
        <Link className={classes.inlineLink} to="/contact">
          {language === 'english' && 'Contact us'}
          {language === 'spanish' && 'Contacta con nosotros'}
        </Link>{' '}
        {language === 'english' && 'to learn more.'}
        {language === 'spanish' && 'aprender más.'}
      </p>
    </div>
  );
};
