import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Local modules.
import App from './App';

// -----------------------------------------------------------------------------

// TODO: Update <Root /> component with providers.
const Root = () => (
  <Router>
    <App />
  </Router>
);

// -----------------------------------------------------------------------------

export default Root;
