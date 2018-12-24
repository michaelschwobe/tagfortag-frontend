import React from 'react';
import { Link, Switch, Redirect, Route } from 'react-router-dom';

// Pages.
import NoMatchPage from './NoMatchPage';
import SettingsPage from './SettingsPage';
import SignInPage from './SignInPage';
import TagCreatePage from './TagCreatePage';
import TagMergePage from './TagMergePage';
import TagReadPage from './TagReadPage';
import TagSearchPage from './TagSearchPage';
import TagUpdatePage from './TagUpdatePage';
import UrlCreatePage from './UrlCreatePage';
import UrlMergePage from './UrlMergePage';
import UrlReadPage from './UrlReadPage';
import UrlSearchPage from './UrlSearchPage';
import UrlUpdatePage from './UrlUpdatePage';

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

      <Route path="/signin" component={SignInPage} />

      <Route path="/urls" exact component={UrlSearchPage} />
      <Route path="/urls/new" component={UrlCreatePage} />
      <Route path="/urls/merge" component={UrlMergePage} />
      <Route path="/urls/:urlId/edit" component={UrlUpdatePage} />
      <Route path="/urls/:urlId" component={UrlReadPage} />

      <Route path="/tags" exact component={TagSearchPage} />
      <Route path="/tags/new" component={TagCreatePage} />
      <Route path="/tags/merge" component={TagMergePage} />
      <Route path="/tags/:tagId/edit" component={TagUpdatePage} />
      <Route path="/tags/:tagId" component={TagReadPage} />

      <Route path="/settings" component={SettingsPage} />

      <Route component={NoMatchPage} />
    </Switch>
  </div>
);

// -----------------------------------------------------------------------------

export default App;
