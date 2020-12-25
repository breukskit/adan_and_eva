import React, { useState, createContext } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

export interface State {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export const context = createContext<State | undefined>(undefined);

function App() {
  const [language, setLanguage] = useState('english');
  return (
    <Router>
      <context.Provider value={{ language, setLanguage }}>
        <div className="App">
          <Nav />
          <div style={{ marginTop: '96px' }}></div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/gallery" component={Gallery} />
          </Switch>
          <Footer language={language} setLanguage={setLanguage} />
        </div>
      </context.Provider>
    </Router>
  );
}

export default App;
