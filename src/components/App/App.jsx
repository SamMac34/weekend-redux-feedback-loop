import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandForm from '../UnderstandForm/UnderstandForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentForm from '../CommentForm/CommentForm';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import SubmitSuccess from '../SubmitSuccess/SubmitSuccess';

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
            <Link to="/feelingform">FeelingForm</Link>
          </li>
          <li>
            <Link to="/understandform">UnderstandForm</Link>
          </li>
          <li>
            <Link to="/supportform">SupportForm</Link>
          </li>
          <li>
            <Link to="/commentform">CommentForm</Link>
          </li>
          <li>
            <Link to="/reviewfeedback">Review</Link>
          </li>
          <li>
            <Link to="/submitsuccess">SubmitSuccess</Link>
          </li>
        </nav>
        <Route path="/feelingform">
          <FeelingForm />
        </Route>
        <Route path="/understandform">
          <UnderstandForm />
        </Route>
        <Route path="/supportform">
          <SupportForm />
        </Route>
        <Route path="/commentform">
          <CommentForm />
        </Route>
        <Route path="/reviewfeedback">
        <ReviewFeedback />
        </Route>
        <Route path="/submitsuccess">
          <SubmitSuccess />
        </Route>

      </div>
    </Router>
  );
}

export default App;
