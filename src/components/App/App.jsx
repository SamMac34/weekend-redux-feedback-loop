import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandForm from '../UnderstandForm/UnderstandForm';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <nav>
          <li>
            <Link>FeelingForm</Link>
          </li>
          <li>
            <Link>UnderstandForm</Link>
          </li>
          <li>
            <Link>X</Link>
          </li>
        </nav>
        <FeelingForm />
        <UnderstandForm />

      </div>
    </Router>
  );
}

export default App;
