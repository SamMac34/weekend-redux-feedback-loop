import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
// Import components
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandForm from '../UnderstandForm/UnderstandForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentForm from '../CommentForm/CommentForm';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import SubmitSuccess from '../SubmitSuccess/SubmitSuccess';

// App component
function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
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