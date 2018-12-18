import React from 'react';
import { Link, Router } from '@reach/router';

// Pages.
import NoMatchPage from './NoMatchPage';
import SettingsPage from './SettingsPage';
import TagPage from './TagPage';
import UrlPage from './UrlPage';
import UserSignInPage from './UserSignInPage';

// -----------------------------------------------------------------------------

// TODO: Write <App /> component.
const App = () => (
  <div>
    <nav role="navigation" aria-labelledby="nav-heading">
      <h4 id="nav-heading">Main Menu</h4>
      <ul>
        <li>
          <Link to="/urls/new">Create</Link>
        </li>
        <li>
          <Link to="/urls">Search</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
    <Router>
      <NoMatchPage default />
      <SettingsPage path="settings" />
      <TagPage path="tags/*" />
      <UrlPage path="urls/*" />
      <UserSignInPage path="signin" />
    </Router>
  </div>
);

// -----------------------------------------------------------------------------

export default App;
