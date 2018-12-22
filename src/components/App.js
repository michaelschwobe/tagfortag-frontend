import React from 'react';
import { Link, Switch, Redirect, Route } from 'react-router-dom';

// Pages.
import NoMatchPage from './NoMatchPage';
import SettingsPage from './SettingsPage';
import SignInPage from './SignInPage';
import TagPage from './TagPage';
import UrlPage from './UrlPage';

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
    <Switch>
      <Redirect from="/" exact to="/urls" />
      <Route path="/settings" component={SettingsPage} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/tags" component={TagPage} />
      <Route path="/urls" component={UrlPage} />
      <Route component={NoMatchPage} />
    </Switch>
  </div>
);

// -----------------------------------------------------------------------------

export default App;
